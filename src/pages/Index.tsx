import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TechMarquee from '@/components/TechMarquee';
import About from '@/components/About';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Benefits from '@/components/Benefits';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import CursorGlow from '@/components/fx/CursorGlow';

const Index = () => (
  <main className="relative min-h-screen bg-yrwen-ink text-white">
    <CursorGlow />
    <Navbar />
    <Hero />
    <TechMarquee />
    <About />
    <Services />
    <Process />
    <Benefits />
    <FAQ />
    <CTA />
    <ContactForm />
    <Footer />
  </main>
);

export default Index;
