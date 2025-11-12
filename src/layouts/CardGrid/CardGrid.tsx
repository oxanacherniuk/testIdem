'use client';

import { useProducts } from '@/hooks/useProducts';
import styles from './CardGrid.module.css';
import SmallCard from '@/components/SmallCard/SmallCard';

const CardGrid = () => {
    const { products, loading, error } = useProducts();

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
        <div className={styles['card-grid']}>
            {products.map((product) => (
                <SmallCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default CardGrid;