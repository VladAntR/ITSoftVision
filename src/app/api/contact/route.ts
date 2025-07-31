import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        console.log('Received request:', body);

        // ...existing code...
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER || "",
                pass: process.env.GMAIL_PASS || "",
            },
        } as nodemailer.TransportOptions);

        const result = await transporter.sendMail({
            from: process.env.GMAIL_FROM || "",
            to: process.env.GMAIL_TO || "",
            subject: 'Contact Form',
            text: 'Example text',
        });

        return new Response(JSON.stringify({ message: 'Email sent', result }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: 'Failed to send email' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}