import React from 'react';
import './Card.css';

const Card = ({ title, description, icon, className = '', children, ...props }) => {
    return (
        <div className={`card theme-transition ${className}`} {...props}>
            {icon && <div className="card-icon">{icon}</div>}
            {title && <h3 className="card-title">{title}</h3>}
            {description && <p className="card-description">{description}</p>}
            {children}
        </div>
    );
};

export default Card;
