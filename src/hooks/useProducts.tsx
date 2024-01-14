import useSWR from 'swr';
import axios from 'axios';
import { Product } from '../types/Product';
import { useEffect, useState } from 'react';

const fetchProducts = async () => {
    const response = await axios.get('http://localhost:5000/products');
    return response.data as Product[];
};

const useProducts = () => {
    const { data: products, error } = useSWR('products', fetchProducts);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const delay = setTimeout(() => {
            setIsLoading(false);
        }, 500);

        return () => clearTimeout(delay);
    }, []);

    return {
        products,
        isLoading,
        error,
    };
};

const getProduct = async (id: number) => {
    try {
        const response = await axios.get(`http://localhost:5000/products/${id}`);
        return response.data as Product;
    } catch (error) {
        console.error('Error fetching product:', error);
        return null;
    }
};

export { useProducts, getProduct };