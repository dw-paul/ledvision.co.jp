import React from "react";
import { ArrowRight } from "lucide-react";

export function LPHero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToPrice = () => {
    const element = document.getElementById("price");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-24 sm:pt-28 pb-14 sm:pb-20 px-4 overflow-hidden">
      {/* LED Laser Beam Background - Enhanced */}
      <div className="absolute inset-0">
        {/* Diagonal laser beams - Stronger */}
        <div className="absolute inset-0 opacity-50">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background: `
              linear-gradient(135deg, transparent 0%, transparent 46%, rgba(6, 182, 212, 0.5) 48%, rgba(6, 182, 212, 0.8) 50%, rgba(6, 182, 212, 0.5) 52%, transparent 54%, transparent 100%),
              linear-gradient(45deg, transparent 0%, transparent 46%, rgba(217, 70, 239, 0.5) 48%, rgba(217, 70, 239, 0.8) 50%, rgba(217, 70, 239, 0.5) 52%, transparent 54%, transparent 100%),
              linear-gradient(165deg, transparent 0%, transparent 46%, rgba(234, 179, 8, 0.4) 48%, rgba(234, 179, 8, 0.7) 50%, rgba(234, 179, 8, 0.4) 52%, transparent 54%, transparent 100%)
            `,
              backgroundSize:
                "180px 180px, 160px 160px, 200px 200px",
              backgroundPosition: "0 0, 80px 40px, 40px 80px",
            }}
          ></div>
        </div>

        {/* Radial glow spots - Stronger */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-yellow-500/25 rounded-full blur-3xl"></div>
      </div>

      {/* Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-zinc-950/75 to-zinc-950"></div>

      <div className="relative container mx-auto max-w-6xl text-center">
        {/* Main Headline (Fixed) */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-12 sm:mb-16 leading-tight">
          <span className="inline-block bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-yellow-400 bg-clip-text text-transparent">
            この価格で、
          </span>
          <br />
          <span className="inline-block text-white">
            LEDの大画面。
          </span>
        </h1>

        {/* Price Display - Flyer Style (Rectangle) */}
        <div className="relative mb-10 sm:mb-12 mt-10 inline-block">
          {/* Top Label - Angled */}
          <div className="absolute -top-8 left-0 transform -rotate-2 z-10">
            <div
              className="px-4 py-1.5 bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-2xl"
              style={{
                clipPath:
                  "polygon(3% 0%, 100% 0%, 97% 100%, 0% 100%)",
              }}
            >
              <span className="text-xs font-black text-black tracking-wider">
                業界トップクラスの低価格
              </span>
            </div>
          </div>

          {/* Main Price Container */}
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/40 via-fuchsia-500/40 to-yellow-500/40 blur-2xl"></div>

            {/* Price Box */}
            <div className="relative bg-white border-6 sm:border-8 border-yellow-400 shadow-2xl px-6 sm:px-8 py-4 sm:py-5 transform -rotate-1">
              {/* Size Badge - Right Side */}
              <div className="absolute -right-3 top-3 px-3 py-1 bg-cyan-400 border-3 border-white shadow-xl transform rotate-6">
                <span className="text-sm sm:text-base font-black text-white">
                  120inch
                </span>
              </div>

              {/* Giant Price */}
              <div className="flex flex-col items-center">
                <div className="flex items-baseline justify-center gap-1 sm:gap-2">
                  <span className="text-6xl sm:text-7xl md:text-8xl font-black text-fuchsia-600 leading-none">
                    69.8
                  </span>
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black text-yellow-600">
                    万円
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-zinc-500 ml-1">
                    税別
                  </span>
                </div>
              </div>

              {/* Corner Accent Marks */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-4 border-l-4 border-cyan-400"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-4 border-r-4 border-fuchsia-400"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-4 border-l-4 border-fuchsia-400"></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-4 border-r-4 border-yellow-400"></div>
            </div>

            {/* Bottom Badge - Bigger and More Prominent */}
            <div className="absolute -bottom-8 right-0 transform rotate-3 z-10">
              <div className="px-5 py-2 bg-gradient-to-r from-red-500 to-red-600 shadow-2xl border-3 border-white flex items-center justify-center">
                <span className="text-xl sm:text-2xl font-black text-white tracking-wider">
                  衝撃価格!!
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Support Text (Fixed) */}
        <p className="text-base sm:text-lg md:text-xl font-bold text-zinc-300 mb-10 sm:mb-12 leading-tight mt-14 sm:mt-16 whitespace-nowrap">
          導入後も1か月オンラインサポートで安心。
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToContact}
            className="group w-full sm:w-auto px-8 sm:px-10 py-4 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-yellow-500 text-white rounded-lg font-black text-lg hover:shadow-xl hover:shadow-fuchsia-500/50 transition-all flex items-center justify-center gap-2"
          >
            無料相談・見積もり
            <ArrowRight
              className="group-hover:translate-x-1 transition-transform"
              size={22}
            />
          </button>
          <button
            onClick={scrollToPrice}
            className="w-full sm:w-auto px-8 sm:px-10 py-4 border-2 border-white bg-zinc-900/80 rounded-lg font-black text-lg text-white hover:bg-zinc-800 transition-all"
          >
            詳しい価格を見る
          </button>
        </div>
      </div>
    </section>
  );
}