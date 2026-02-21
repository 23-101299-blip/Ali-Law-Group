import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.css';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`faq-item ${isOpen ? 'open' : ''}`}>
            <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
                <span>{question}</span>
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            <div className="faq-answer">
                <p>{answer}</p>
            </div>
        </div>
    );
};

const FAQ = () => {
    const faqs = [
        {
            question: 'How much do you charge for a consultation?',
            answer: 'We offer an initial 30-minute consultation for a flat fee, which is credited toward your total bill if you choose to retain our firm.'
        },
        {
            question: 'What types of cases do you handle?',
            answer: 'Our firm specializes in Corporate Law, Civil Litigation, Family Law, and Real Estate transactions. We provide expert advice across a wide spectrum of legal disciplines.'
        },
        {
            question: 'How long will my case take?',
            answer: 'Every case is unique. During our initial consultation, we will provide a realistic timeline based on the complexity and specifics of your matter.'
        },
        {
            question: 'Do you offer remote consultations?',
            answer: 'Yes, we provide virtual consultations via secure video conferencing platforms to accommodate our clients worldwide.'
        }
    ];

    return (
        <section id="faq" className="faq-section sections-padding">
            <div className="container">
                <SectionTitle
                    title="Frequently Asked Questions"
                    subtitle="Clear answers to common legal inquiries."
                />
                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} {...faq} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
