import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <section id="contact" className="contact-section sections-padding">
            <div className="container">
                <SectionTitle
                    title="Contact Us"
                    subtitle="Start your legal journey today. Get in touch with our experts."
                />
                <div className="contact-container">
                    {isSubmitted ? (
                        <div className="submission-success">
                            <h3>Thank you for reaching out!</h3>
                            <p>Your message has been received. One of our legal experts will contact you shortly.</p>
                            <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
                        </div>
                    ) : (
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <FormInput
                                    label="Full Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    required
                                />
                                <FormInput
                                    label="Email Address"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                            <FormInput
                                label="Subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Topic of inquiry"
                                required
                            />
                            <FormInput
                                isTextArea
                                label="Your Message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="How can we help you?"
                                required
                            />
                            <Button variant="primary" size="md" type="submit" className="submit-btn font-bold">
                                Send Message
                            </Button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;
