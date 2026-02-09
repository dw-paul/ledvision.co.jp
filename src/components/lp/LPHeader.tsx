import React from 'react';
import logo from 'figma:asset/f659817b6349923f8af1ace708e00a793f6d3c18.png';

export function LPHeader() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src={logo} 
              alt="LED VISION" 
              className="h-9 sm:h-10 w-auto"
            />
          </div>

          {/* CTA Button */}
          <button 
            onClick={scrollToContact}
            className="px-5 sm:px-7 py-2 sm:py-2.5 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-yellow-500 text-white rounded-md font-black text-sm sm:text-base hover:shadow-lg hover:shadow-fuchsia-500/40 transition-all"
          >
            無料相談
          </button>
        </div>
      </div>
    </header>
  );
}