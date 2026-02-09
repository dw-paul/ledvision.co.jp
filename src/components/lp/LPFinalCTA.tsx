import React from 'react';
import { ArrowRight } from 'lucide-react';

export function LPFinalCTA() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 sm:py-16 px-4 bg-gradient-to-b from-zinc-900 to-black border-b border-white/10">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Main Message */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-5 sm:mb-6 leading-tight">
          <span className="text-white">まずは</span>
          <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-yellow-400 bg-clip-text text-transparent">
            無料相談
          </span>
          <span className="text-white">から。</span>
        </h2>

        <p className="text-base sm:text-lg text-zinc-400 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto">
          価格、サイズ、設置場所、サポート内容など、<br className="hidden sm:inline" />
          どんな些細なことでもお気軽にご相談ください。<br />
          <span className="font-bold text-white">導入後1か月のオンラインサポート付きで安心です。</span>
        </p>

        {/* CTA Button */}
        <button 
          onClick={scrollToContact}
          className="group inline-flex items-center gap-3 px-10 sm:px-12 py-5 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-yellow-500 text-white rounded-lg font-black text-xl hover:shadow-2xl hover:shadow-fuchsia-500/50 transition-all"
        >
          無料相談・見積もりはこちら
          <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
        </button>

        {/* Trust Badge */}
        <div className="mt-8 flex flex-wrap gap-3 sm:gap-4 justify-center">
          <div className="px-4 py-2 bg-zinc-800 border border-white/20 rounded-full text-sm font-bold text-zinc-300">
            相見積もり歓迎
          </div>
          <div className="px-4 py-2 bg-zinc-800 border border-white/20 rounded-full text-sm font-bold text-zinc-300">
            全国対応
          </div>
          <div className="px-4 py-2 bg-zinc-800 border border-white/20 rounded-full text-sm font-bold text-zinc-300">
            最短3日納品
          </div>
        </div>
      </div>
    </section>
  );
}