'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types/product';
import styles from './SmallCard.module.css';
import Button from '../Button/Button';

interface SmallCardProps {
    product: Product;
}

const SmallCard = ({ product }: SmallCardProps) => {
    const renderRating = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            stars.push(
            <Image
                key={i}
                width={16}
                height={16}
                src={'/images/starActive.svg'}
                alt={'Активная звезда'}
            />
            );
        } else if (i === fullStars + 1 && hasHalfStar) {
            stars.push(
            <Image
                key={i}
                width={16}
                height={16}
                src={'/images/starActive.svg'}
                alt={'Полуактивная звезда'}
            />
            );
        } else {
            stars.push(
            <Image
                key={i}
                width={16}
                height={16}
                src={'/images/starDefault.svg'}
                alt={'Неактивная звезда'}
            />
            );
        }
        }
        return stars;
    };

  const discountedPrice = product.price * (1 - product.discountPercentage / 100);

    return (
    <Link href={`/products/${product.id}`} className={styles['small-card-link']}>
        <div className={styles['small-card']}>
            <div className={styles['small-card__top']}>
            <button 
                className={styles['favorite-button']}
                onClick={(e) => {
                e.preventDefault(); 
                e.stopPropagation(); 
                }}
            >
                <Image width={24} height={24} src={'/images/heart.svg'} alt={'Избранное'} />
            </button>
            
            <Image 
                width={272} 
                height={160} 
                src={product.thumbnail || '/images/card.png'} 
                alt={product.title}
                className={styles['product-image']}
            />
            
            {product.discountPercentage > 0 && (
                <div className={styles['discount']}>
                <p>-{Math.round(product.discountPercentage)}%</p>
                </div>
            )}
            </div>
            
            <div className={styles['small-card__bottom']}>
                <div className={styles['prices']}>
                    <div className={styles['price__col']}>
                    <p className={styles['price__bold']}>
                        {discountedPrice.toFixed(2)} ₽
                    </p>
                    <p className={styles['price__type']}>Со скидкой</p>
                    </div>
                    {product.discountPercentage > 0 && (
                    <div className={styles['price__col']}>
                        <p className={styles['price__regular']}>
                        {product.price.toFixed(2)} ₽
                        </p>
                        <p className={styles['price__type']}>Обычная</p>
                    </div>
                    )}
                </div>
            
                <p className={styles['card-title']}>
                    {product.title}
                </p>
            
                <div className={styles['rating']}>
                    {renderRating(product.rating)}
                    {/* <span className={styles['rating-value']}>({product.rating})</span> */}
                </div>
                <Button className={styles['button-cart']}>
                    В корзину
                </Button>
            </div>
        </div>
    </Link>
    )
}

export default SmallCard;