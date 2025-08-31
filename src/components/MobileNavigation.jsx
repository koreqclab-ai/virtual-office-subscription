import React from 'react';

export function MobileNavigation({ isOpen, setIsOpen, onGetStartedClick }) {
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsOpen(false)}></div>
          <div className="fixed top-0 right-0 h-full w-80 max-w-sm bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out">
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-1">Anson & Co</h2>
                <span className="text-sm text-gray-500">The Right Address Matters</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100"
              >
                <span className="sr-only">Close menu</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <nav className="p-6">
              <ul className="space-y-4">
                <li>
                  <a href="#home" onClick={handleLinkClick} className="block text-lg text-gray-700 hover:text-amber-600 py-2 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" onClick={handleLinkClick} className="block text-lg text-gray-700 hover:text-amber-600 py-2 transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#locations" onClick={handleLinkClick} className="block text-lg text-gray-700 hover:text-amber-600 py-2 transition-colors">
                    Locations
                  </a>
                </li>
                <li>
                  <a href="#pricing" onClick={handleLinkClick} className="block text-lg text-gray-700 hover:text-amber-600 py-2 transition-colors">
                    Pricing
                  </a>
                </li>
                <li className="pt-4 border-t border-gray-100">
                  <button 
                    onClick={() => {
                      onGetStartedClick('get-started');
                      setIsOpen(false);
                    }}
                    className="w-full bg-amber-600 text-white py-3 rounded-full hover:bg-amber-700 transition-colors font-medium"
                  >
                    Get Started
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}