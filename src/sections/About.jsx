import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Paragraph from '../components/Paragraph';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section sections-padding">
            <div className="container">
                <div className="about-grid">
                    <div className="about-image">
                        <img
                            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000"
                            alt="Law Firm Office"
                            className="rounded-image"
                        />
                    </div>
                    <div className="about-content">
                        <SectionTitle
                            title="About Our Firm"
                            subtitle="Over 25 years of combined legal expertise in corporate and civil law."
                            centered={false}
                        />
                        <Paragraph>
                            Ali Law Group was founded on the principles of excellence, integrity, and dedication.
                            Our team of trial-tested attorneys brings a wealth of experience to every case,
                            ensuring our clients receive the highest level of legal representation.
                        </Paragraph>
                        <Paragraph>
                            We specialize in navigating complex legal landscapes for individuals and corporations alike.
                            Whether you are facing a business dispute or require estate planning,
                            our firm is committed to protecting your interests and achieving the best possible outcome.
                        </Paragraph>
                        <div className="vision-mission">
                            <div className="vision">
                                <h3>Our Vision</h3>
                                <p>To be the most trusted legal partner for businesses and individuals worldwide.</p>
                            </div>
                            <div className="mission">
                                <h3>Our Mission</h3>
                                <p>Providing strategic, results-driven legal counsel with unwavering professional ethics.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
