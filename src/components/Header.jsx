import React from 'react';

export function Header({ isMobileMenuOpen, setIsMobileMenuOpen, onGetStartedClick }) {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900">Anson & Co</h1>
              <span className="text-xs text-gray-500 font-normal mt-1 block">The Right Address Matters</span>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200">
              Home
            </a>
            <a href="#services" className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200">
              Services
            </a>
            <a href="#locations" className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200">
              Locations
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200">
              Pricing
            </a>
            <button 
              onClick={() => onGetStartedClick('get-started')}
              className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-colors duration-200 font-medium"
            >
              Get Started
            </button>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-amber-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-500"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <div className="w-6 h-6 flex flex-col justify-around">
              <span className={`w-full h-0.5 bg-current transform transition-all duration-200 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 bg-current transition-all duration-200 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-current transform transition-all duration-200 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}