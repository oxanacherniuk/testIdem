'use client';
import { useState } from 'react';
import { useProducts } from '@/hooks/useProducts';
import styles from './CardGrid.module.css';
import SmallCard from '@/components/SmallCard/SmallCard';
import DownloadButton from '@/components/DownloadButton/DownloadButton';

const CardGrid = () => {
    const { products, loading, error } = useProducts();
    const [isExpanded, setIsExpanded] = useState(false);

    const initialProductsCount = 16; 
    const displayedProducts = isExpanded 
        ? products 
        : products.slice(0, initialProductsCount);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    if (loading) {
        return (
        <div className={styles['loading']}>
            <p>Загрузка товаров...</p>
        </div>
        );
    }

    if (error) {
        return (
        <div className={styles['error']}>
            <p>{error}</p>
        </div>
        );
    }

    return (
        <div className={styles['container']}>
            <div className={styles['card-grid']}>
                {displayedProducts.map((product) => (
                <SmallCard key={product.id} product={product} />
                ))}
            </div>

            {products.length > initialProductsCount && (
                <div className={styles['button-container']}>
                <DownloadButton 
                    onClick={toggleExpanded}
                    isExpanded={isExpanded}
                />
                </div>
            )}
        </div>
    );
};

export default CardGrid;