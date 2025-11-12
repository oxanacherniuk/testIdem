import { HTMLAttributes } from 'react';
import styles from './SectionTitle.module.css';

interface SectionTitleProps extends HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
}

const SectionTitle = ({
    children,
    className = '',
    ...props
}: SectionTitleProps) => {
    const titleClasses = [
        styles['section-title'],
        className
    ].filter(Boolean).join(' ');

    return (
        <h2 className={titleClasses} {...props}>
            {children}
        </h2>
    );
};

export default SectionTitle;