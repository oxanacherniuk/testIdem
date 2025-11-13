'use client';
import Image from 'next/image';
import Button from '@/components/Button/Button';
import styles from './ShareButton.module.css';

interface ShareButtonProps {
    productTitle: string;
}

const ShareButton = ({ productTitle }: ShareButtonProps) => {
    const handleShare = async () => {
        const shareData = {
            title: productTitle,
            text: `Посмотрите на ${productTitle}`,
            url: window.location.href,
        };

    if (navigator.share) {
        try {
            await navigator.share(shareData);
        } catch (error) {
            console.log('Поделиться отменено');
        }
        } else {
        try {
            await navigator.clipboard.writeText(window.location.href);
            alert('Ссылка скопирована в буфер обмена!');
        } catch (error) {
            console.error('Ошибка копирования:', error);
        }
        }
    };

    return (
        <Button className={styles['card-top__button']} onClick={handleShare}>
            <Image width={24} height={24} src={'/images/share.svg'} alt={'Поделиться'} />
            Поделиться
        </Button>
    );
};

export default ShareButton;