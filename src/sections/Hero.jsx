import React from 'react';
import Button from '../components/Button';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1 className="hero-title">
                    Excellence in Legal <span className="highlight">Representation</span>
                </h1>
                <p className="hero-subtitle">
                    At Ali Law Group, we provide sophisticated legal solutions tailored to your unique needs.
                    Dedicated to justice, integrity, and your success.
                </p>
                <div className="hero-cta">
                    <Button variant="primary" size="md" onClick={() => window.location.href = '#contact'}>
                        Consult Experts
                    </Button>
                    <Button variant="outline" size="md" onClick={() => window.location.href = '#about'}>
                        Our Firm
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
