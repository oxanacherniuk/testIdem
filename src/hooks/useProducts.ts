import { useState, useEffect } from 'react';
import { Product, ProductsResponse } from '@/types/product';

export const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://dummyjson.com/products');
                const data: ProductsResponse = await response.json();
                setProducts(data.products);
            } catch (err) {
                setError('Ошибка при загрузке товаров');
                console.error('Error fetching products:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return { products, loading, error };
};