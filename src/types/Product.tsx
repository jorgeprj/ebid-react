export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    code: string;
    authentication: {
        id: string;
        brand: string;
        material: string;
        link: string;
        date_code: string;
    }
}
