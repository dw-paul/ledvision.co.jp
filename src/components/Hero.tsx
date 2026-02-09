import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('cta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center max-w-5xl">
        {/* Main Catchphrase */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 leading-tight">
            <span className="inline-block bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-yellow-400 bg-clip-text text-transparent">
              光らせろ、
            </span>
            <br />
            <span className="inline-block bg-gradient-to-r from-yellow-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              売り場を。
            </span>
          </h1>
          <div className="h-1 w-32 sm:w-48 mx-auto bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-yellow-500 rounded-full"></div>
        </div>

        {/* Sub Copy */}
        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-zinc-300 mb-12 sm:mb-16 leading-relaxed">
          集客を、光で変える。<br className="sm:hidden" />
          LEDビジョンが、<br className="hidden sm:inline" />
          あなたの店舗を<br className="sm:hidden" />圧倒的な存在感に。
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <button 
            onClick={scrollToContact}
            className="group w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-yellow-500 rounded-lg font-bold text-lg sm:text-xl hover:shadow-xl hover:shadow-fuchsia-500/50 transition-all flex items-center justify-center gap-3"
          >
            無料相談・見積もり
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
          </button>
          <button 
            onClick={() => {
              const element = document.getElementById('products');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 border-2 border-zinc-600 rounded-lg font-bold text-lg sm:text-xl hover:border-cyan-500 hover:bg-zinc-900 transition-all"
          >
            製品を見る
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 sm:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-transparent blur-xl"></div>
            <div className="relative">
              <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent mb-2">
                最短3日
              </div>
              <div className="text-sm sm:text-base font-bold text-zinc-400">納品可能</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/20 to-transparent blur-xl"></div>
            <div className="relative">
              <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-fuchsia-400 to-fuchsia-300 bg-clip-text text-transparent mb-2">
                24時間
              </div>
              <div className="text-sm sm:text-base font-bold text-zinc-400">サポート対応</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-transparent blur-xl"></div>
            <div className="relative">
              <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent mb-2">
                全国対応
              </div>
              <div className="text-sm sm:text-base font-bold text-zinc-400">設置・メンテナンス</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
