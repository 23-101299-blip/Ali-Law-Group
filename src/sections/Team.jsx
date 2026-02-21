import React from 'react';
import SectionTitle from '../components/SectionTitle';
import './Team.css';

const Team = () => {
    const members = [
        {
            name: 'Ali Mansour',
            role: 'Founding Partner',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
        },
        {
            name: 'Sarah Jenkins',
            role: 'Senior Associate',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
        },
        {
            name: 'Robert Chen',
            role: 'Corporate Counsel',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
        }
    ];

    return (
        <section id="team" className="team-section sections-padding">
            <div className="container">
                <SectionTitle
                    title="Our Legal Team"
                    subtitle="Meet the dedicated professionals committed to your success."
                />
                <div className="team-grid">
                    {members.map((member, index) => (
                        <div key={index} className="team-card">
                            <div className="team-image-wrapper">
                                <img src={member.image} alt={member.name} className="team-image" />
                            </div>
                            <div className="team-info">
                                <h3 className="member-name">{member.name}</h3>
                                <p className="member-role">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
