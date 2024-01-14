import { Product } from "../types/Product";

export function getHighestBid(product: Product | undefined): number | undefined {
    if (product?.bids.length === 0) {

        return product.startPrice;
    }

    const bidPrices: number[] | undefined = product?.bids.map((bid) => bid.price);

    if(bidPrices != undefined) {
        return Math.max(...bidPrices);
    }
}