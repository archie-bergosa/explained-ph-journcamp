import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import { LeaderboardProvider } from '@/contexts/LeaderboardContext';
import Header from '@/components/Header';
import CountdownBanner from '@/components/CountdownBanner';
import Hero from '@/components/Hero';
import Advisory from '@/components/Advisory';
import ProgramInfo from '@/components/ProgramInfo';
import Topics from '@/components/Topics';
import Competition from '@/components/Competition';
import InfoAndSchedules from '@/components/InfoAndSchedules';
import History from '@/components/History';
import FAQ from '@/contexts/FAQ';
import Footer from '@/components/Footer';
import LectureSeries from '@/components/LectureSeries';
import GuidelinesNav from '@/components/GuidelinesNav';
import Guidelines from '@/pages/Guidelines'; // Import the new Guidelines component
import NewsWriting from '@/pages/guidelines/NewsWriting';
import EditorialWriting from '@/pages/guidelines/EditorialWriting';
import ColumnWriting from '@/pages/guidelines/ColumnWriting';
import FeatureWriting from '@/pages/guidelines/FeatureWriting';
import CopyreadingHeadline from '@/pages/guidelines/CopyreadingHeadline';
import ScienceTechnologyWriting from '@/pages/guidelines/ScienceTechnologyWriting';
import SportsWriting from '@/pages/guidelines/SportsWriting';
import Photojournalism from '@/pages/guidelines/Photojournalism';
import EditorialCartooning from '@/pages/guidelines/EditorialCartooning';
import MobileJournalism from '@/pages/guidelines/MobileJournalism';
import CollaborativeDesktopPublishing from '@/pages/guidelines/CollaborativeDesktopPublishing';
import OnlinePublishing from '@/pages/guidelines/OnlinePublishing';
import Leaderboard from '@/pages/Leaderboard';
import AdminUpdate from '@/pages/AdminUpdate';

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

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
      <CountdownBanner />
      <main>
        <Hero />
        <ProgramInfo />
        <Advisory />
        <Topics />
        <History />
      </main>
    </>
  );
}

function App() {
  const location = useLocation();
  const isGuidelinesPage = location.pathname.startsWith('/guidelines');
  const isAdminPage = location.pathname === '/admin-update';

  return (
    <LeaderboardProvider>
      <div className="min-h-screen bg-slate-50 text-brand-dark">
        <ScrollToTop />
        {!isAdminPage && <Header />}
        {isGuidelinesPage && <GuidelinesNav />}
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lecture-series" element={<LectureSeries />} />
        <Route path="/rankings" element={<Leaderboard />} />
        <Route path="/admin-update" element={<AdminUpdate />} />
        <Route path="/guidelines" element={<Guidelines />} /> {/* Add the new route for the guidelines page */}
        <Route path="/guidelines/news" element={<NewsWriting />} />
        <Route path="/guidelines/editorial" element={<EditorialWriting />} />
        <Route path="/guidelines/column" element={<ColumnWriting />} />
        <Route path="/guidelines/feature" element={<FeatureWriting />} />
        <Route path="/guidelines/crhw" element={<CopyreadingHeadline />} />
        <Route path="/guidelines/scitech" element={<ScienceTechnologyWriting />} />
        <Route path="/guidelines/sports" element={<SportsWriting />} />
        <Route path="/guidelines/photojournalism" element={<Photojournalism />} />
        <Route path="/guidelines/editorial-cartooning" element={<EditorialCartooning />} />
        <Route path="/guidelines/mobile-journalism" element={<MobileJournalism />} />
        <Route path="/guidelines/cdp" element={<CollaborativeDesktopPublishing />} />
        <Route path="/guidelines/online-publishing" element={<OnlinePublishing />} />
        </Routes>
        <Footer />
        <Toaster />
      </div>
    </LeaderboardProvider>
  );
}

export default App;
