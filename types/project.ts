export interface Project {
    id: number;
    title: string;
    category: string;
    year: string;
    description: string;
    services: string[];
    image: string;
    images: string[];
    url?: string;
}
