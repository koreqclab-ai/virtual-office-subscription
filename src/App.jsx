import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { MainContent } from './components/MainContent';
import { Footer } from './components/Footer';
import { MobileLocationPanel } from './components/MobileLocationPanel';
import { MobileNavigation } from './components/MobileNavigation';
import { ChatWidget } from './components/ChatWidget';
import { ContactForm } from './components/ContactForm';
import { ThankYouPage } from './components/ThankYouPage';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [contactFormSource, setContactFormSource] = useState('unknown');

  const handleGetStartedClick = (source) => {
    setContactFormSource(source);
    setIsContactFormOpen(true);
  };

  return (
    <Router>
      <div className="min-h-screen bg-white font-light text-gray-800 overflow-x-hidden">
        <Header 
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          onGetStartedClick={handleGetStartedClick}
        />
        <Navigation />
        
        <Routes>
          <Route path="/" element={<MainContent onGetStartedClick={handleGetStartedClick} />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
        
        <Footer />
        <MobileLocationPanel />
        <MobileNavigation 
          isOpen={isMobileMenuOpen}
          setIsOpen={setIsMobileMenuOpen}
          onGetStartedClick={handleGetStartedClick}
        />
        <ChatWidget />
        <ContactForm 
          isOpen={isContactFormOpen}
          onClose={() => setIsContactFormOpen(false)}
          buttonSource={contactFormSource}
        />
      </div>
    </Router>
  );
}

export default App;