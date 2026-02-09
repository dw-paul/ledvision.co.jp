import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from 'figma:asset/f659817b6349923f8af1ace708e00a793f6d3c18.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-zinc-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src={logo} 
              alt="LED VISION" 
              className="h-10 sm:h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('strengths')}
              className="text-sm font-bold text-zinc-300 hover:text-white transition-colors"
            >
              選ばれる理由
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="text-sm font-bold text-zinc-300 hover:text-white transition-colors"
            >
              製品・サービス
            </button>
            <button 
              onClick={() => scrollToSection('usecases')}
              className="text-sm font-bold text-zinc-300 hover:text-white transition-colors"
            >
              用途別提案
            </button>
            <button 
              onClick={() => scrollToSection('cases')}
              className="text-sm font-bold text-zinc-300 hover:text-white transition-colors"
            >
              活用イメージ
            </button>
            <button 
              onClick={() => scrollToSection('cta')}
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-yellow-500 rounded font-bold text-sm hover:opacity-90 transition-opacity"
            >
              お問い合わせ
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-zinc-900 border-t border-zinc-800">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button 
              onClick={() => scrollToSection('strengths')}
              className="text-left py-2 font-bold text-zinc-300 hover:text-white transition-colors"
            >
              選ばれる理由
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="text-left py-2 font-bold text-zinc-300 hover:text-white transition-colors"
            >
              製品・サービス
            </button>
            <button 
              onClick={() => scrollToSection('usecases')}
              className="text-left py-2 font-bold text-zinc-300 hover:text-white transition-colors"
            >
              用途別提案
            </button>
            <button 
              onClick={() => scrollToSection('cases')}
              className="text-left py-2 font-bold text-zinc-300 hover:text-white transition-colors"
            >
              活用イメージ
            </button>
            <button 
              onClick={() => scrollToSection('cta')}
              className="mt-2 px-6 py-3 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-yellow-500 rounded font-bold text-center hover:opacity-90 transition-opacity"
            >
              お問い合わせ
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
