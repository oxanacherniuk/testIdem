import { notFound } from 'next/navigation';
import Image from 'next/image';
import styles from './page.module.css';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import Button from '@/components/Button/Button';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import Header from '@/layouts/Header/Header';
import ShareButton from '@/components/ShareButton/ShareButton';
import ImageSlider from '@/components/ImageSlider/ImageSlider';
import SimilarProducts from '@/layouts/SimilarProducts/SimilarProducts';

interface ProductPageProps {
    params: Promise<{
        id: string;
    }>;
}

const getProduct = async (id: string) => {
    try {
        const response = await fetch(`https://dummyjson.com/products/${id}`, {
        next: { revalidate: 60 }
        });
        
        if (!response.ok) {
            return null;
        }
        
        return response.json();
    } catch (error) {
        console.error('Error fetching product:', error);
        return null;
    }
};

const getAllProducts = async () => {
    try {
        const response = await fetch('https://dummyjson.com/products?limit=100', {
            next: { revalidate: 60 }
        });
        
        if (!response.ok) {
            return [];
        }
        
        const data = await response.json();
        return data.products || [];
    } catch (error) {
        console.error('Error fetching all products:', error);
        return [];
    }
};

export default async function ProductPage({ params }: ProductPageProps) {
    const { id } = await params;
    const product = await getProduct(id);
    const allProducts = await getAllProducts();

    if (!product) {
        notFound();
    }

    const discountedPrice = product.price * (1 - product.discountPercentage / 100);

    // Функции для получения данных с fallback значениями
    const getCountry = () => {
        // В API dummyjson нет поля country, используем shippingInformation или brand как индикатор
        if (product.shippingInformation && product.shippingInformation.includes('China')) {
            return 'Китай';
        } else if (product.brand && product.brand.includes('Samsung')) {
            return 'Южная Корея';
        } else if (product.brand && product.brand.includes('Apple')) {
            return 'США';
        } else {
            return 'Не указано';
        }
    };

    const getWeight = () => {
        if (product.weight) {
            return `${product.weight * 1000} г`; // конвертируем кг в граммы
        } else if (product.dimensions) {
            const volume = product.dimensions.width * product.dimensions.height * product.dimensions.depth;
            const estimatedWeight = Math.round(volume * 0.1); 
            return `${estimatedWeight} г`;
        } else {
            return 'Не указано';
        }
    };

    const breadcrumbsItems = [
        { label: 'Главная', href: '/' },
        { label: 'Каталог', href: '/' },
        { label: product.category, href: `/?category=${product.category}` },
        { label: product.title }
    ];

    return (
    <main className={styles.main}>
        <Header />
        <div className='container'>
            <Breadcrumbs items={breadcrumbsItems} />
            <SectionTitle>{product.title}</SectionTitle>
            <div className={styles['card-top']}>
                <p className={styles['product-sku']}>арт. {product.id}</p>
                <div className={styles['rating']}>
                    <span className={styles['reviews-count']}>{product.reviews?.length || 0} отзыва</span>
                </div>
                <ShareButton productTitle={product.title} />
                <Button className={styles['card-top__button']}>
                    <Image width={24} height={24} src={'/images/favoritesIcon.svg'} alt={'В избранное'} />
                    В избранное
                </Button>
            </div>
            <div className={styles['card-main']}>
                <ImageSlider 
                    images={[product.thumbnail, ...product.images]} 
                    productTitle={product.title}
                />
                <div className={styles['product-info']}>
                    <div className={styles['prices']}>
                        <div className={styles['prices__col']}>
                            <p className={styles['price-regular']}>{product.price.toFixed(2)} ₽</p>
                            <p className={styles['price-text']}>Обычная цена</p>
                        </div>
                        <div className={styles['prices__col']}>
                            <p className={styles['price-bold']}>{discountedPrice.toFixed(2)} ₽</p>
                            <div className={styles['price-info']}>
                                <p className={styles['price-text']}>С картой Северяночки</p>
                                <Image width={24} height={24} src={'/images/info.svg'} alt={'Информация'} />
                            </div>
                        </div>
                    </div>
                    <div className={styles['shopping-button']}>
                        <Image className={styles['shopping-cart']} width={32} height={32} src={'/images/shopping-cart.svg'} alt={'Добавить'} />
                        <Button className={styles['add-to-cart']}>
                            В корзину
                        </Button>
                    </div>
                    <div className={styles['bonuses']}>
                        <Image width={24} height={24} src={'/images/smile.svg'} alt={'Бонусы'} />
                        <p>Вы получаете 10 бонусов</p>
                    </div>
                    <div className={styles['notifications']}>
                        <Image width={24} height={24} src={'/images/bell-off.svg'} alt={'Уведомления'} />
                        <p>Уведомить о снижении цены</p>
                    </div>
                    <div className={styles['specifications']}>
                        <div style={{ backgroundColor: `var(--light-grey)` }} className={styles['spec-item']}>
                            <span className={styles['spec-label']}>Бренд</span>
                            <span className={styles['spec-value']}>
                                {product.brand || 'Не указан'}
                            </span>
                        </div>
                        <div className={styles['spec-item']}>
                            <span className={styles['spec-label']}>Страна производителя</span>
                            <span className={styles['spec-value']}>
                                {getCountry()}
                            </span>
                        </div>
                        <div style={{ backgroundColor: `var(--light-grey)` }} className={styles['spec-item']}>
                            <span className={styles['spec-label']}>Вес</span>
                            <span className={styles['spec-value']}>
                                {getWeight()}
                            </span>
                        </div>
                        {product.dimensions && (
                            <div className={styles['spec-item']}>
                                <span className={styles['spec-label']}>Размеры</span>
                                <span className={styles['spec-value']}>
                                    {Math.round(product.dimensions.width)}x{Math.round(product.dimensions.height)}x{Math.round(product.dimensions.depth)} см
                                </span>
                            </div>
                        )}
                        {product.warrantyInformation && (
                            <div style={{ backgroundColor: `var(--light-grey)` }} className={styles['spec-item']}>
                                <span className={styles['spec-label']}>Гарантия</span>
                                <span className={styles['spec-value']}>
                                    {product.warrantyInformation}
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className={styles['order-products']}>
                <SectionTitle>С этим товаром покупают</SectionTitle>
                <SimilarProducts 
                    products={allProducts} 
                    currentProductId={product.id}
                />
            </div>
        </div>
    </main>
    );
}

export async function generateMetadata({ params }: ProductPageProps) {
    const { id } = await params;
    const product = await getProduct(id);

    if (!product) {
        return {
        title: 'Товар не найден'
        };
    }

    return {
        title: `${product.title} - Online Catalog`,
        description: product.description,
    };
}