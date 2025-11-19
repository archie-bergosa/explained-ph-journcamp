import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Modules from '@/components/Modules';
import Advisory from '@/components/Advisory';
import Competition from '@/components/Competition';
import History from '@/components/History';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

function Home() {
  return (
    <>
      <Helmet>
        <title>Explained PH JournCamp+ | National Campus Press Summit</title>
        <meta name="description" content="Join the Virtual Journalism Camp by Explained PH - a month-long program combining seasoned practitioners with award-winning storytellers to strengthen campus publications nationwide." />
        <meta name="keywords" content="journalism, campus press, summit, workshop, philippines, explained ph, journcamp" />
        <meta name="author" content="Explained PH" />

        {/* Open Graph Meta Tags (for social media sharing) */}
        <meta property="og:title" content="Explained PH JournCamp+ | National Campus Press Summit" />
        <meta property="og:description" content="Join the Virtual Journalism Camp by Explained PH to strengthen campus publications nationwide." />
        <meta property="og:image" content="https://i.postimg.cc/7Y0rb3Jh/journcamp.png" />
        <meta property="og:url" content="https://journcamp.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Explained PH JournCamp+ | National Campus Press Summit" />
        <meta name="twitter:description" content="Join the Virtual Journalism Camp by Explained PH to strengthen campus publications nationwide." />
        <meta name="twitter:image" content="https://i.postimg.cc/7Y0rb3Jh/journcamp.png" />
      </Helmet>
      <main>
        <Hero />
        <Modules />
        <Advisory />
        <Competition />
        <History />
        <FAQ />
      </main>
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-brand-dark">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
