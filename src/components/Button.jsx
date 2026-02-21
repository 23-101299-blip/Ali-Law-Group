import React from 'react';
import './Button.css';

const Button = ({ children, onClick, variant = 'primary', size = 'md', className = '', ...props }) => {
    return (
        <button
            className={`btn btn-${variant} btn-${size} ${className}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
