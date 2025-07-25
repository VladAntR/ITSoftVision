export type TypeItemMenu = {
    id: number;
    name: string;
}

export type TypeSlide = {
    id: number;
    image: string;
    title: string;
    description?: string;
    caseUrl?: string;
}

export type SliderCasesProps = {
    items: TypeSlide[];
}

export const navCases = [
    { id: 12, name: "Wordpress" },
    { id: 13, name: "Shopify" },
    { id: 14, name: "Design" },
    { id: 15, name: "Webbuilder" },
    { id: 16, name: "Programmes" },
    { id: 17, name: "Crm" },
]

export const wordpressSlider = [
    { id: 18, image: "/cases/wordpress/crypto.webp", title: "Best Crypto", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy.", caseUrl: "#" },
    { id: 19, image: "/cases/wordpress/future.webp", title: "Future", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy.", caseUrl: "#" },
    { id: 20, image: "/cases/wordpress/ui_ux.webp", title: "UI & UX Designer", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy.", caseUrl: "#" },
    { id: 21, image: "/cases/wordpress/crypto.webp", title: "Best Crypto", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy.", caseUrl: "#" },
    { id: 22, image: "/cases/wordpress/future.webp", title: "Future", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy.", caseUrl: "#" },
    { id: 23, image: "/cases/wordpress/ui_ux.webp", title: "UI & UX Designer", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy.", caseUrl: "#" },
]

export const shopifySlider = [
    { id: 24, image: "/cases/shopify/home_love.webp", title: "Home Love", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy.", caseUrl: "#" },
    { id: 25, image: "/cases/shopify/martin.webp", title: "Martin", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy.", caseUrl: "#" },
    { id: 26, image: "/cases/shopify/mister-graver.webp", title: "Mister Graver", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy.", caseUrl: "#" },
    { id: 27, image: "/cases/shopify/runway.webp", title: "Runaway", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy.", caseUrl: "#" },
    { id: 28, image: "/cases/shopify/home_love.webp", title: "Home Love", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy.", caseUrl: "#" },
    { id: 29, image: "/cases/shopify/martin.webp", title: "Martin", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy.", caseUrl: "#" },
]