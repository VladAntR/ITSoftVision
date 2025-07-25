import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from 'nodemailer';
import { google } from 'googleapis';

const CLIENT_ID = process.env.CLIENT_ID!;
const CLIENT_SECRET = process.env.CLIENT_SECRET!;
const REDIRECT_URL = process.env.REDIRECT_URL!;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN!;
const GMAIL_USER = process.env.GMAIL_USER!;


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') return res.status(405).json({ message: 'Method Not Allowed' });

    try {
        const oAuth2Client = new google.auth.OAuth2(
            CLIENT_ID,
            CLIENT_SECRET,
            REDIRECT_URL
        );
        oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

        const accessToken = (await oAuth2Client.getAccessToken()).token;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: GMAIL_USER,
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken,
            },
        } as nodemailer.TransportOptions);

        const result = await transporter.sendMail({
            from: `Your site <${GMAIL_USER}>`,
            to: 'vladantonyak2@gmail.com',
            subject: 'Contact Form',
            text: 'Example text',
            html: '<p>Example HTML</p>',
        });

        res.status(200).json({ message: 'Email sent', result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to send email' });
    }
}