import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import { Briefcase, Gavel, ShieldCheck, Home, Users, Globe } from 'lucide-react';
import './PracticeAreas.css';

const PracticeAreas = () => {
    const practices = [
        {
            title: 'Corporate Law',
            description: 'Strategic legal counsel for businesses, from startups to global corporations.',
            icon: <Briefcase />
        },
        {
            title: 'Civil Litigation',
            description: 'Expert representation in complex civil disputes and courtroom proceedings.',
            icon: <Gavel />
        },
        {
            title: 'Family Law',
            description: 'Compassionate guidance for family matters, including divorce and custody.',
            icon: <Users />
        },
        {
            title: 'Real Estate',
            description: 'Comprehensive legal services for residential and commercial property transactions.',
            icon: <Home />
        },
        {
            title: 'Employment Law',
            description: 'Protecting the rights of both employers and employees in workplace matters.',
            icon: <ShieldCheck />
        },
        {
            title: 'International Law',
            description: 'Navigating the complexities of cross-border legal issues and regulations.',
            icon: <Globe />
        }
    ];

    return (
        <section id="practice-areas" className="practice-section sections-padding">
            <div className="container">
                <SectionTitle
                    title="Practice Areas"
                    subtitle="Specialized legal services designed to meet your every need."
                />
                <div className="practice-grid">
                    {practices.map((item, index) => (
                        <Card
                            key={index}
                            title={item.title}
                            description={item.description}
                            icon={item.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PracticeAreas;
