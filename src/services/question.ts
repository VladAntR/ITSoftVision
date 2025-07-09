export type TypeQuestion = {
    id: number;
    title: string;
    text: string;
};

export type TypeQuestionProps = {
    id: number;
    title: string;
    text: string;
    isOpen?: boolean;
    openDescription: () => void;
}


export const questions = [
    { id: 30, title: "What services do you offer?", text: "We specialize in website development (landing pages, corporate websites, online stores) and CRM system setup to automate business processes." },
    { id: 31, title: "How long does it take to develop a website?", text: " The timeline depends on the project complexity, but typically, creating a standard website takes between 2 to 6 weeks." },
    { id: 32, title: "Do you provide support after the website launch?", text: "Yes, we offer technical support and updates to ensure your website runs smoothly at all times." },
    { id: 33, title: "How is the CRM system setup process carried out?", text: "We analyze your business needs, select the optimal solution, and configure the system according to your requirements." },
    { id: 34, title: "Is a consultation needed before placing an order?", text: "Yes, we provide free consultations to help you choose the best solutions for your business." },
]