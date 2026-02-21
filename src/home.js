import React from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import PracticeAreas from './sections/PracticeAreas';
import Team from './sections/Team';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import ScrollToTop from './components/ScrollToTop';

const Home = () => {
    return (
        <div className="home-page">
            <Navbar />
            <main>
                <Hero />
                <About />
                <PracticeAreas />
                <Team />
                <FAQ />
                <Contact />
            </main>
            <Footer />
            <ScrollToTop />
        </div>
    );
};

export default Home;
