import { Product } from "../../../types/Product";
import { getHighestBid } from "../../../utils/getHighestBid";

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

    return (
        <div key={product.id} className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-28 sm:w-48 lg:w-56 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75"> 
                <img
                    src={`../../src/assets/products/${product.id}.png`}
                    alt={product.name}
                    className="h-full w-56 object-cover object-center"
                />
            </div>
            <div className="mt-2 flex flex-col justify-between gap-2 w-28 sm:w-48 lg:w-56">
                <div>
                    <h3 className="text-sm text-gray-700">
                        <a href={`/product/${product.id}`}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {product.name}
                        </a>
                    </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">Auction price: U${getHighestBid(product)}</p> 
            </div>
        </div>

    )
}

export default ProductCard