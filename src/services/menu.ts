export type TMenuItem = {
    id: number;
    label: string;
    link: string;
};

export const menu: Array<TMenuItem> = [
    { id: 1, label: "Home", link: '#home' },
    { id: 2, label: "About Us", link: '#about-us' },
    { id: 3, label: "Services", link: '#services' },
    { id: 4, label: "Contact Us", link: '#contact-us' },
    { id: 5, label: "Our Cases", link: '#our-cases' },
    { id: 6, label: "Faq", link: '#faq' },
]