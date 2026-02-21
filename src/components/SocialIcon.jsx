import React from 'react';
import './SocialIcon.css';

const SocialIcon = ({ icon: Icon, href, label }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label={label}
        >
            <Icon size={20} />
        </a>
    );
};

export default SocialIcon;
