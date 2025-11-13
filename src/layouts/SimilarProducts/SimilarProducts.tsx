import { Product } from '@/types/product';
import styles from './SimilarProducts.module.css';
import SmallCard from '@/components/SmallCard/SmallCard';

interface SimilarProductsProps {
    products: Product[];
    currentProductId: number;
}

const SimilarProducts = ({ products, currentProductId }: SimilarProductsProps) => {
    const similarProducts = products
        .filter(product => product.id !== currentProductId)
        .slice(0, 4);

    if (similarProducts.length === 0) {
        return null;
    }

    return (
        <div className={styles['products-list']}>
        {similarProducts.map((product) => (
            <SmallCard key={product.id} product={product} />
        ))}
        </div>
    );
};

export default SimilarProducts;