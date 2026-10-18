import React, { useState } from 'react';
import { PORTFOLIO_ITEMS, PortfolioItem } from './data/portfolioData';
import { Header } from './components/Header';
import { HeroStage } from './components/HeroStage';
import { PortfolioGallery } from './components/PortfolioGallery';
import { LightboxModal } from './components/LightboxModal';
import { FilmShowcase } from './components/FilmShowcase';
import { PhilosophySection } from './components/PhilosophySection';
import { StudioLocation } from './components/StudioLocation';
import { Footer } from './components/Footer';
import { DateEnquiryModal } from './components/DateEnquiryModal';
import { SearchModal } from './components/SearchModal';
import { PrivacyModal } from './components/PrivacyModal';
import { ScrollProgressButton } from './components/ScrollProgressButton';
import { CookieBanner } from './components/CookieBanner';
import { DedicatedPages } from './components/DedicatedPages';
import { MobileBottomNav } from './components/MobileBottomNav';
import { LoadingScreen } from './components/LoadingScreen';

export type PageView =
  | 'home'
  | 'gallery'
  | 'installations'
  | 'films'
  | 'philosophy'
  | 'services'
  | 'location'
  | 'check-dates'
  | 'search'
  | 'cookies-policy'
  | 'terms-conditions';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);
  const [activeLightboxItem, setActiveLightboxItem] = useState<PortfolioItem | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const handleOpenEnquiry = (serviceTitle?: string) => {
    setPreselectedService(serviceTitle);
    setCurrentPage('check-dates');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPhoto = (item: PortfolioItem) => {
    setActiveLightboxItem(item);
  };

  const handleNextPhoto = () => {
    if (!activeLightboxItem) return;
    const currentIndex = PORTFOLIO_ITEMS.findIndex((p) => p.id === activeLightboxItem.id);
    const nextIndex = (currentIndex + 1) % PORTFOLIO_ITEMS.length;
    setActiveLightboxItem(PORTFOLIO_ITEMS[nextIndex]);
  };

  const handlePrevPhoto = () => {
    if (!activeLightboxItem) return;
    const currentIndex = PORTFOLIO_ITEMS.findIndex((p) => p.id === activeLightboxItem.id);
    const prevIndex = (currentIndex - 1 + PORTFOLIO_ITEMS.length) % PORTFOLIO_ITEMS.length;
    setActiveLightboxItem(PORTFOLIO_ITEMS[prevIndex]);
  };

  const handleEnquireSimilar = (itemTitle: string) => {
    setPreselectedService(`Coverage inspired by: ${itemTitle}`);
    setIsEnquiryOpen(true);
  };

  const handleNavigatePage = (page: string) => {
    setCurrentPage(page as PageView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#0f0f0e] flex flex-col relative selection:bg-[#b3884c]/25 selection:text-[#0f0f0e] pb-16 md:pb-0">
      {/* 0. BRAND LUXURY LOADING SCREEN */}
      <LoadingScreen />

      {/* 1. FLOATING SLEEK HEADER */}
      <Header
        currentPage={currentPage}
        onOpenEnquiry={() => handleNavigatePage('check-dates')}
        onOpenSearch={() => handleNavigatePage('search')}
        onNavigatePage={handleNavigatePage}
      />

      {/* 2. DEDICATED SEPARATE PAGE VIEWS OR STREAMLINED LANDING PAGE */}
      {currentPage !== 'home' ? (
        <DedicatedPages
          currentPage={currentPage}
          onBackToHome={() => setCurrentPage('home')}
          onSelectPhoto={handleSelectPhoto}
          onOpenEnquiry={handleOpenEnquiry}
          onNavigatePage={handleNavigatePage}
        />
      ) : (
        <main className="flex-1">
          {/* HERO STAGE: Right-side oriented moving photo animation (visible on smartphone too!) */}
          <HeroStage
            onOpenEnquiry={() => handleOpenEnquiry()}
            onSelectPhoto={handleSelectPhoto}
          />

          {/* CURATED PHOTOGRAPHIC ARCHIVE & MINIMALIST GALLERY */}
          <PortfolioGallery onSelectPhoto={handleSelectPhoto} />

          {/* CINEMATIC WEDDING CINEMA SHOWCASE */}
          <FilmShowcase onOpenFilmsPage={() => handleNavigatePage('films')} />

          {/* PHILOSOPHY & ART OF MASOOM JAVED */}
          <PhilosophySection />

          {/* STUDIO LOCATION TOUCHPOINT */}
          <StudioLocation onOpenEnquiry={() => handleOpenEnquiry()} />
        </main>
      )}

      {/* 3. EDITORIAL FOOTER WITH CENTERED COPYRIGHT & ACCustomLabs CREDIT */}
      <Footer
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
        onOpenEnquiry={() => handleOpenEnquiry()}
        onNavigatePage={handleNavigatePage}
      />

      {/* 4. IMMERSIVE MODALS & OVERLAYS */}
      <LightboxModal
        item={activeLightboxItem}
        onClose={() => setActiveLightboxItem(null)}
        onNext={handleNextPhoto}
        onPrev={handlePrevPhoto}
        onEnquireSimilar={handleEnquireSimilar}
      />

      <DateEnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        preselectedService={preselectedService}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectPhoto={handleSelectPhoto}
      />

      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />

      {/* 5. COOKIE POLICY BANNER (VISIBLE ONLY ONCE FOR NEW USERS) */}
      <CookieBanner onOpenPrivacy={() => setIsPrivacyOpen(true)} />

      {/* 6. DYNAMIC FILLING BORDER SCROLL-UP BUTTON */}
      <ScrollProgressButton />

      {/* 7. CONSTANTLY VISIBLE MOBILE BOTTOM DOCK WITH ICONS */}
      <MobileBottomNav
        currentPage={currentPage}
        onNavigatePage={handleNavigatePage}
        onOpenEnquiry={() => handleOpenEnquiry()}
      />
    </div>
  );
}
