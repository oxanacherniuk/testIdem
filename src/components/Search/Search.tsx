'use client';

import { InputHTMLAttributes, useState } from 'react';
import styles from './Search.module.css';
import Image from 'next/image';
import Button from '../Button/Button';

interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
    onSearch?: (value: string) => void;
}

const Search = ({
    placeholder = 'Найти товар',
    onSearch,
    className = '',
    ...props
}: SearchProps) => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearchClick = () => {
        if (onSearch) {
            onSearch(searchValue);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && onSearch) {
            onSearch(searchValue);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    return (
        <div className={`${styles['search-form']} ${className}`}>
            <div className='container'>
                <div className={styles['search-container']}>
                    <input
                        type="text"
                        placeholder={placeholder}
                        className={styles['search-input']}
                        value={searchValue}
                        onChange={handleInputChange}
                        onKeyPress={handleKeyPress}
                        {...props}
                    />
                    <Button 
                        className={styles['search-button']}
                        onClick={handleSearchClick}
                        aria-label="Поиск"
                    >
                        <Image 
                            src={'/images/searchIcon.svg'} 
                            alt={'Найти'} 
                            width={20} 
                            height={20}
                        />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Search;