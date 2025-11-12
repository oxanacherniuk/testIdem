import { ButtonHTMLAttributes } from 'react';
import Button from '../Button/Button';
import styles from './CatalogButton.module.css';
import Image from 'next/image';

interface CatalogButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    iconSrc?: string;
}

const CatalogButton = ({
    children = 'Каталог',
    iconSrc = '/images/menu.svg',
    ...props
}: CatalogButtonProps) => {
    return (
        <Button
            variant="outline"
            size="large"
            className={styles['catalogButton']}
            {...props}
        >
            <span className={styles['icon']}>
                <Image 
                    src={iconSrc} 
                    alt="Меню" 
                    width={24}
                    height={24}
                />
            </span>
            {children}
        </Button>
    );
};

export default CatalogButton;