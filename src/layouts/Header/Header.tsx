import Link from 'next/link';
import styles from './Header.module.css';
import Logo from '../../../public/images/logo.svg';
import Image from 'next/image';
import CatalogButton from '@/components/CatalogButton/CatalogButton';
import Button from '@/components/Button/Button';

const Header = () => {
    return (
        <header className={styles['header']}>
            <div className='container'>
                <div className={styles['header-box']}>
                    <div className={styles['header-box__left']}>
                        <Link href="/" className={styles['logo']}>
                            <Image src={Logo} alt="Online Catalog" width={85} height={40} />
                        </Link>
                        <CatalogButton />
                    </div>
                    <div className={styles['header-box__right']}>
                        <nav className={styles['nav']}>
                            <Link href="/favorites" className={styles['nav-link']}>
                                <Image width={24} height={24} src={'/images/favoritesIcon.svg'} alt={'Избранное'} />
                                <p>Избранное</p>
                            </Link>
                            <Link href="/orders" className={styles['nav-link']}>
                                <Image width={24} height={24} src={'/images/ordersIcon.svg'} alt={'Заказы'} />
                                <p>Заказы</p>
                            </Link>
                            <Link href="/basket" className={styles['nav-link']}>
                                <Image width={24} height={24} src={'/images/basketIcon.svg'} alt={'Корзина'} />
                                <p>Корзина</p>
                            </Link>
                        </nav>
                        <div className={styles['user']}>
                            <Image src={'/images/avatar.svg'} width={40} height={40} alt={'User'} />
                            <p>Алексей</p>
                            <Button className={styles['user-button']}>
                                <Image width={24} height={24} src={'/images/arrow.svg'} alt={'Стрелка'} />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;