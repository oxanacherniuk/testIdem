'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './ImageSlider.module.css';

interface ImageSliderProps {
    images: string[];
    productTitle: string;
}

const ImageSlider = ({ images, productTitle }: ImageSliderProps) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const selectImage = (index: number) => {
        setCurrentImageIndex(index);
    };

    return (
    <div className={styles['product-gallery']}>
        <div className={styles['image-thumbnails']}>
            {images.map((image, index) => (
            <div 
                key={index} 
                className={`${styles['thumbnail-wrapper']} ${
                index === currentImageIndex ? styles['thumbnail-active'] : ''
                }`}
                onClick={() => selectImage(index)}
            >
                <Image
                    src={image}
                    alt={`${productTitle} ${index + 1}`}
                    width={80}
                    height={80}
                    className={styles['thumbnail']}
                />
            </div>
            ))}
        </div>
        
        <div className={styles['main-image']}>
            <Image
                src={images[currentImageIndex]}
                alt={productTitle}
                width={400}
                height={400}
                className={styles['product-image']}
            />
            
        </div>
    </div>
    );
};

export default ImageSlider;