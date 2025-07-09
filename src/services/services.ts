import { TypeIcon } from "./types";

export type TypeService = {
    id: number;
    name: string;
    description: string;
    price: number;
    icon: TypeIcon;
}

export const services = [
    {
        id: 7,
        name: "UX Designs",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
        price: 1000,
        icon: {
            id: "ux_design", pathIcon: '/services/ux_design.svg'
        }
    },
    {
        id: 8,
        name: "UX Designs",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
        price: 1000,
        icon: { id: "ux_design", pathIcon: '/services/ux_design.svg' }
    },
    {
        id: 9,
        name: "UX Designs",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
        price: 1000,
        icon: { id: "ux_design", pathIcon: '/services/ux_design.svg' }
    },
    {
        id: 10,
        name: "UX Designs",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
        price: 1000,
        icon: { id: "ux_design", pathIcon: '/services/ux_design.svg' }
    },
    {
        id: 11,
        name: "UX Designs",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
        price: 1000,
        icon: { id: "ux_design", pathIcon: '/services/ux_design.svg' }
    }
]