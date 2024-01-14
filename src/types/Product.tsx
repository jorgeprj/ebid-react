export type Bid = {
    user_name: string;
    price: number;
};

export type Product = {
    id: number;
    name: string;
    price: number;
    startPrice: number;
    description: string;
    code: string;
    authentication: {
        id: string;
        brand: string;
        material: string;
        link: string;
        date_code: string;
    };
    bids: Bid[];
};
