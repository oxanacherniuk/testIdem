'use client';
import Button from '../Button/Button';
import styles from './DownloadButton.module.css';

interface DownloadButtonProps {
    onClick: () => void;
    isExpanded: boolean;
    disabled?: boolean;
}

const DownloadButton = ({ onClick, isExpanded, disabled = false }: DownloadButtonProps) => {
    return (
        <Button 
            className={styles['download-button']}
            onClick={onClick}
            disabled={disabled}
        >
            {isExpanded ? 'Скрыть' : 'Загрузить еще'}
        </Button>
    );
};

export default DownloadButton;