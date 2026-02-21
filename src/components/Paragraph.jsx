import React from 'react';
import './Paragraph.css';

const Paragraph = ({ children, className = '', size = 'md', ...props }) => {
    return (
        <p className={`paragraph p-${size} ${className}`} {...props}>
            {children}
        </p>
    );
};

export default Paragraph;
