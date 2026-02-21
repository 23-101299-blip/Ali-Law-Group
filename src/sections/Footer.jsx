import React from 'react';
import SocialIcon from '../components/SocialIcon';
import { Linkedin, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer theme-transition">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <h2 className="footer-logo">ALI LAW <span>GROUP</span></h2>
                        <p>Advocating for your rights with integrity and precision.</p>
                        <div className="social-links">
                            <SocialIcon icon={Linkedin} href="#" label="LinkedIn" />
                            <SocialIcon icon={Twitter} href="#" label="Twitter" />
                            <SocialIcon icon={Facebook} href="#" label="Facebook" />
                        </div>
                    </div>

                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#practice-areas">Practice Areas</a></li>
                            <li><a href="#team">Our Team</a></li>
                            <li><a href="#faq">FAQ</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h3>Contact Info</h3>
                        <ul>
                            <li><MapPin size={18} /> 123 Legal Plaza, Tower A, City Center</li>
                            <li><Phone size={18} /> +1 (555) 123-4567</li>
                            <li><Mail size={18} /> info@alilawgroup.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
