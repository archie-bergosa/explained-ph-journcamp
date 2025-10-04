
import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProgramInfo from '@/components/ProgramInfo';
import History from '@/components/History';
import Competition from '@/components/Competition';
import InfoAndSchedules from '@/components/InfoAndSchedules';
import Topics from '@/components/Topics';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import StickyRegisterButton from '@/components/StickyRegisterButton';

function App() {
  return (
    <>
      <Helmet>
        <title>Explained PH JournCamp+ | National Campus Press Summit</title>
        <meta name="description" content="Join the Virtual Journalism Camp by Explained PH - a month-long program combining seasoned practitioners with award-winning storytellers to strengthen campus publications nationwide." />
      </Helmet>
      <div className="min-h-screen bg-slate-50 text-brand-dark">
        <Header />
        <main>
          <Hero />
          <ProgramInfo />
          <Competition />
          <InfoAndSchedules />
          <Topics />
          <FAQ />
          <History />
        </main>
        <Footer />
        <Toaster />
        <StickyRegisterButton />
      </div>
    </>
  );
}

export default App;
