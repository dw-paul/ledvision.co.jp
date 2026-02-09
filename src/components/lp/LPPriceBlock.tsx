import React from 'react';
import { TrendingDown, CheckCircle2, Sparkles } from 'lucide-react';

export function LPPriceBlock() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="price" className="relative py-12 sm:py-16 px-4 bg-zinc-900 overflow-hidden">
      {/* Diagonal Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-fuchsia-950/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-tr from-cyan-950/30 to-transparent"></div>

      <div className="relative container mx-auto max-w-6xl">
        {/* Top Section */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full shadow-xl mb-6">
            <Sparkles size={20} className="text-white" strokeWidth={3} />
            <span className="text-sm sm:text-base font-black text-white">業界トップクラスの低価格</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-5 leading-tight">
            <span className="text-white">価格が、</span>
            <span className="text-white">武器</span>
            <span className="text-white">です。</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed whitespace-nowrap">
            他社との相見積もり、大歓迎。比較していただければ、この価格の価値がわかります。
          </p>
        </div>

        {/* Price Cards - Staggered Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10">
          {/* 120inch */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
            <div className="relative bg-gradient-to-br from-white to-zinc-50 rounded-2xl p-7 sm:p-8 border-2 border-white shadow-2xl transform hover:-translate-y-2 transition-all">
              <div className="text-sm font-black text-cyan-600 mb-2 tracking-wide">ENTRY</div>
              <div className="text-2xl sm:text-3xl font-black text-zinc-900 mb-1">120インチ</div>
              <div className="text-xs text-zinc-500 mb-6">約2.7m × 1.5m</div>
              
              <div className="mb-6 pb-6 border-b-2 border-zinc-200">
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-6xl sm:text-7xl font-black text-cyan-600 leading-none">69.8</span>
                  <span className="text-2xl font-black text-cyan-600">万円</span>
                </div>
                <div className="text-xs text-zinc-600 font-bold">税別価格</div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2 text-sm text-zinc-700">
                  <CheckCircle2 size={18} className="text-cyan-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="font-bold">2.6mmピッチ高精細</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-zinc-700">
                  <CheckCircle2 size={18} className="text-cyan-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="font-bold">1か月サポート付</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-zinc-700">
                  <CheckCircle2 size={18} className="text-cyan-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="font-bold">全国配送対応</span>
                </div>
              </div>

              <button 
                onClick={scrollToContact}
                className="w-full py-3.5 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-xl font-black text-sm hover:shadow-xl hover:shadow-cyan-500/30 transition-all"
              >
                この価格で見積もり
              </button>
            </div>
          </div>

          {/* 150inch - Popular */}
          <div className="relative group md:-mt-4">
            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/30 to-fuchsia-600/30 rounded-2xl blur-2xl group-hover:blur-3xl transition-all"></div>
            <div className="relative bg-gradient-to-br from-white to-zinc-50 rounded-2xl p-7 sm:p-8 border-4 border-fuchsia-500 shadow-2xl transform hover:-translate-y-2 transition-all">
              <div className="absolute -top-4 right-6 bg-gradient-to-r from-fuchsia-500 to-fuchsia-600 text-white text-xs font-black px-4 py-2 rounded-full shadow-lg">
                人気No.1
              </div>
              
              <div className="text-sm font-black text-fuchsia-600 mb-2 tracking-wide">STANDARD</div>
              <div className="text-2xl sm:text-3xl font-black text-zinc-900 mb-1">150インチ</div>
              <div className="text-xs text-zinc-500 mb-6">約3.3m × 1.9m</div>
              
              <div className="mb-6 pb-6 border-b-2 border-zinc-200">
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-6xl sm:text-7xl font-black text-fuchsia-600 leading-none">120</span>
                  <span className="text-2xl font-black text-fuchsia-600">万円</span>
                </div>
                <div className="text-xs text-zinc-600 font-bold">税別価格</div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2 text-sm text-zinc-700">
                  <CheckCircle2 size={18} className="text-fuchsia-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="font-bold">2.6mmピッチ高精細</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-zinc-700">
                  <CheckCircle2 size={18} className="text-fuchsia-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="font-bold">1か月サポート付</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-zinc-700">
                  <CheckCircle2 size={18} className="text-fuchsia-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="font-bold">全国配送対応</span>
                </div>
              </div>

              <button 
                onClick={scrollToContact}
                className="w-full py-3.5 bg-gradient-to-r from-fuchsia-500 to-fuchsia-600 text-white rounded-xl font-black text-sm hover:shadow-xl hover:shadow-fuchsia-500/30 transition-all"
              >
                この価格で見積もり
              </button>
            </div>
          </div>

          {/* 180inch */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
            <div className="relative bg-gradient-to-br from-white to-zinc-50 rounded-2xl p-7 sm:p-8 border-2 border-white shadow-2xl transform hover:-translate-y-2 transition-all">
              <div className="text-sm font-black text-yellow-600 mb-2 tracking-wide">PREMIUM</div>
              <div className="text-2xl sm:text-3xl font-black text-zinc-900 mb-1">180インチ</div>
              <div className="text-xs text-zinc-500 mb-6">約4.0m × 2.3m</div>
              
              <div className="mb-6 pb-6 border-b-2 border-zinc-200">
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-6xl sm:text-7xl font-black text-yellow-600 leading-none">180</span>
                  <span className="text-2xl font-black text-yellow-600">万円</span>
                </div>
                <div className="text-xs text-zinc-600 font-bold">税別価格</div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2 text-sm text-zinc-700">
                  <CheckCircle2 size={18} className="text-yellow-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="font-bold">2.6mmピッチ高精細</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-zinc-700">
                  <CheckCircle2 size={18} className="text-yellow-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="font-bold">1か月サポート付</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-zinc-700">
                  <CheckCircle2 size={18} className="text-yellow-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="font-bold">全国配送対応</span>
                </div>
              </div>

              <button 
                onClick={scrollToContact}
                className="w-full py-3.5 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-xl font-black text-sm hover:shadow-xl hover:shadow-yellow-500/30 transition-all"
              >
                この価格で見積もり
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-fuchsia-500/5 to-yellow-500/5 rounded-xl blur-lg"></div>
          <div className="relative bg-zinc-800/80 backdrop-blur-sm border border-white/10 rounded-xl p-6 sm:p-7">
            <p className="text-sm sm:text-base text-zinc-300 text-center leading-relaxed">
              <span className="font-black text-white text-lg">カスタムサイズも対応可能。</span><br />
              設置環境に応じた最適プランをご提案します。まずはお気軽にご相談ください。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}