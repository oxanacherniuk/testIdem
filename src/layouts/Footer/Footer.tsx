import Link from 'next/link';
import styles from './Footer.module.css';
import Image from 'next/image';
import Logo from '../../../public/images/logo.svg';

const Footer = () => {
    return (
        <footer className={styles['footer']}>
            <div className='container'>
                <div className={styles['footer-box']}>
                    <div className={styles['footer-box__left']}>
                        <Link href="/" className={styles['logo']}>
                            <Image src={Logo} alt="Online Catalog" width={85} height={40} />
                        </Link>
                        <nav className={styles['footer-nav']}>
                            <Link className={styles['footer-link']} href={'/'}>О компании</Link>
                            <Link className={styles['footer-link']} href={'/'}>Контакты</Link>
                            <Link className={styles['footer-link']} href={'/'}>Вакансии</Link>
                            <Link className={styles['footer-link']} href={'/'}>Статьи</Link>
                            <Link className={styles['footer-link']} href={'/'}>Политика обработки персональных данных</Link>
                        </nav>
                    </div>
                    <div className={styles['footer-box__right']}>
                        <div className={styles['footer-socials']}>
                            <Link href={'/'}>
                                <Image src={'/images/instagram.svg'} alt={'Инстаграм'} width={24} height={24} />
                            </Link>
                            <Link href={'/'}>
                                <Image src={'/images/vkontakte.svg'} alt={'VK'} width={24} height={24} />
                            </Link>
                            <Link href={'/'}>
                                <Image src={'/images/facebook.svg'} alt={'Facebook'} width={24} height={24} />
                            </Link>
                            <Link href={'/'}>
                                <Image src={'/images/ok.svg'} alt={'OK'} width={24} height={24} />
                            </Link>
                        </div>
                        <div className={styles['footer-phone']}>
                            <Link className={styles['footer-num']} href={'/'}>
                                <Image width={24} height={24} src={'/images/phone.svg'} alt={'Позвонить'} />
                                8 800 777 33 33
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;