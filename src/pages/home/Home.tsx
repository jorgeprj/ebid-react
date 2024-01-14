import { useState } from "react";
import Modal from "../../components/feedback/modal/Modal";
import ProductCard from "../../components/surfaces/productCard/ProductCard"

import { Product } from "../../types/Product";
import Loading from "../../components/feedback/loading/Loading";
import { useProducts } from "../../hooks/useProducts";

interface FeatureProductProps {
    product: Product;
}

const FeatureProduct: React.FC<FeatureProductProps> = ({ product }) => {
    const [modal, setModal] = useState(false)

    return (
        <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
            {modal && <Modal modalId="default-modal" setModal={setModal} product={product}/> }
            <div className="flex flex-col justify-between gap-16 items-center p-8  aspect-h-1 aspect-w-1 w-full h-fit lg:flex-row overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
                <div className="mx-100%">
                    <h1 className="text-4xl font-bold">{product.name}</h1>
                    <p className="mt-3">{product.description}</p>
                    <div className="flex gap-4 mt-8">
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                            <a href={`/product/${product.id}`}>Buy Now</a>
                        </button>
                        <button onClick={() => setModal(true)} className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
                            Authentication certificate
                        </button>
                    </div>
                </div>
                <img
                    src={`../../src/assets/products/${product.id}.png`}
                    alt="Featured Product"
                    className="h-64 w-64 object-cover object-center lg:h-72 lg:w-72 "
                />
            </div>

        </div>
    )
}


interface NewProductsProps {
    products: Product[];
}

const NewProducts: React.FC<NewProductsProps> = ({ products }) => {
    return (
        <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">New products</h2>
            <div className="mt-6 grid grid-cols-3 gap-x-6 gap-y-10 lg:grid-cols-4 xl:grid-cols-5">
                {products?.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </div>

    )

}

const Home = () => {
    const { products, isLoading, error } = useProducts();

    if (isLoading) {
        return <Loading/>;
    }

    if (error) {
        return <div>Error loading products</div>;
    }


    return (
        <div>
            {products && products.length > 0 && (
                <FeatureProduct product={products[products.length - 1]} />
            )}
            <NewProducts products={products || []} />
        </div>

    )
}

export default Home