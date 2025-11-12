import Link from 'next/link';
import styles from './Breadcrumbs.module.css';
import Image from 'next/image';

const Breadcrumbs = ({ items, className = '' }: BreadcrumbsProps) => {
    const breadcrumbsClasses = [
        styles['breadcrumbs'],
        className
    ].filter(Boolean).join(' ');

    return (
        <nav className={breadcrumbsClasses}>
            <ul className={styles['breadcrumbs-list']}>
                {items.map((item, index) => (
                <li key={index} className={styles['breadcrumbs-item']}>
                    {index > 0 && (
                    <span className={styles['breadcrumbs-separator']}>
                        <Image src={'/images/breadcrumbsIcon.svg'} alt={'Arrow'} width={24} height={24} />
                    </span>
                    )}
                    {item.href ? (
                    <Link href={item.href} className={styles['breadcrumbs-link']}>
                        {item.label}
                    </Link>
                    ) : (
                    <span className={styles['breadcrumbs-current']}>
                        {item.label}
                    </span>
                    )}
                </li>
                ))}
            </ul>
        </nav>
    );
};

export default Breadcrumbs;