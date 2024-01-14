import { useParams } from 'react-router-dom';
import { getProduct } from '../../hooks/useProducts';
import { useEffect, useState } from 'react';
import { Product as ProductType } from '../../types/Product';
import Loading from '../../components/feedback/loading/Loading';
import Tag from '../../components/dataDisplay/tag/Tag';
import { getHighestBid } from '../../utils/getHighestBid';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import Modal from '../../components/feedback/modal/Modal';

interface ProductProps {
	product: ProductType;
}

interface ProductIDProps {
	productID: number;
}

const ProductImage: React.FC<ProductIDProps> = ({ productID }) => {
	return (
		<div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
			<img className="object-contain w-full lg:h-full" src={`../src/assets/products/${productID}.png`} alt="" />
		</div>
	)
}

const ProductInfo: React.FC<ProductProps> = ({ product }) => {
	return (
		<div className="mb-4 ">
			<Tag>New Arrival</Tag>
			<h2 className="max-w-xl mt-6 mb-2 text-2xl font-bold leading-loose tracking-wide text-gray-900 md:text-3xl">
				{product.name}
			</h2>
			<div className="flex flex-wrap items-center mb-4">
				<p className="font-medium lg:mb-0 text-gray-300">
					ID: {product.code}
				</p>
			</div>
			<div>
				<p className='mb-8 text-gray-700'>
					{product.description}
				</p>
			</div>
			<div className='flex gap-12'>
				<p className="flex flex-col text-4xl font-bold text-gray-700">
					<span>${getHighestBid(product)}</span>
					<span className="ml-3 text-base font-normal text-gray-500">Auction price</span>
				</p>
				<p className="flex flex-col text-4xl font-bold text-gray-700">
					<span>${product.price}</span>
					<span className="ml-3 text-base font-normal text-gray-500">Buy now</span>
				</p>
			</div>
		</div>
	)
}

const ProductAuthentication: React.FC<ProductProps> = ({ product }) => {
	const [modal, setModal] = useState(false)
	return (
		<div>
			{modal && product !== null && product !== undefined && <Modal modalId="default-modal" setModal={setModal} product={product} />}
			<div className="py-6 mb-6 border-b border-gray-200">
				<span className="flex gap-2 items-center text-base text-gray-600 mb-2"> <CheckBadgeIcon className='h-4 w-4 text-black' /> Authenticated</span>
				<a className="mt-2 text-sm text-blue-500 hover:underline cursor-pointer" onClick={() => setModal(true)}>
					Authentication Certificate
				</a>
				<span className="text-gray-600 ml-2">
					by eBid Rarity Assurance LTDA
				</span>
			</div>

		</div>
	)
}

const ProductBid: React.FC<ProductDetailsProps> = ({ product, handleCart }) => {
	return (
		<div className="flex flex-wrap items-center mb-6">
			<div className="mb-4 mr-4 lg:mb-0">
				<div className="w-28">
					<div className="relative flex flex-row w-full h-10 bg-transparent rounded-lg">
						<button className="w-20 h-full text-gray-600 bg-gray-100 border-r rounded-l outline-none cursor-pointe hover:bg-gray-300">
							<span className="m-auto text-2xl font-thin">-</span>
						</button>
						<input type="number" className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-100 outline-nonefocus:outline-none text-md hover:text-black" placeholder={String(Number(getHighestBid(product)) + 10)} />
						<button className="w-20 h-full text-gray-600 bg-gray-100 border-l rounded-r outline-none cursor-pointer hover:text-gray-700 hover:bg-gray-300">
							<span className="m-auto text-2xl font-thin">+</span>
						</button>
					</div>
				</div>
			</div>

			<a onClick={handleCart} className=" cursor-pointer w-full px-4 py-3 text-center text-green-600 bg-green-100 border border-green-600 hover:bg-green-600 hover:text-gray-100 lg:w-1/2 rounded-xl">
				Place a bid
			</a>
		</div>
	)
}

interface ProductDetailsProps {
	product: ProductType;
    handleCart: () => void;
}


const ProductDetails: React.FC<ProductDetailsProps> = ({ product, handleCart }) => {
	return (
		<div>
			{product && (
				<section className="py-10">
					<div className="max-w-6xl px-4 mx-auto">
						<div className="flex flex-wrap mb-24 -mx-4">
							<ProductImage productID={product.id} />
							<div className="w-full px-4 md:w-1/2">
								<div className="lg:pl-20">
									<ProductInfo product={product} />
									<ProductAuthentication product={product} />
									<ProductBid product={product} handleCart={handleCart}/>
									<div className="flex gap-4 mb-6">
										<a href="#" className="w-full px-4 py-3 text-center text-gray-100 bg-green-600 border border-transparent hover:border-green-500 hover:text-green-700 hover:bg-green-100 rounded-xl">
											Buy now
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			)}
		</div>
	)
};


interface ProductPageProps {
    handleCart: () => void;
}

const Product: React.FC<ProductPageProps>  = ({ handleCart }) => {
	const { id } = useParams();
	const [product, setProduct] = useState<ProductType | null>();
	const [isLoading, setIsLoading] = useState(true);


	useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(true);
				const productData = await getProduct(Number(id));
				setProduct(productData);
			} catch (error) {
				console.error('Error fetching product:', error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();

	}, [id]);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<div>
			{product && <ProductDetails product={product} handleCart={handleCart} />}
		</div>
	);
};

export default Product;