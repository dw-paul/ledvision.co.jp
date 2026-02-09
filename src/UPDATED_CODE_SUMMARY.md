# 修正済みコード一覧

## 修正内容サマリー

### 1. LPHero.tsx

- 「69.8万円」のグラデーションを削除し、単色（fuchsia-600 + yellow-600）に変更
- 「衝撃価格!!」の文字サイズを xl〜2xl に拡大
- 「税別」を「万円」の隣に配置し xs〜sm サイズに縮小
- 「導入後も1か月オンラインサポートで安心。」に`whitespace-nowrap`追加で一行表示

### 2. LPPriceBlock.tsx

- 「価格が、武器です。」の「武器」を白色に変更
- 「他社との相見積もり、大歓迎。比較していただければ、この価格の価値がわかります。」に`whitespace-nowrap`追加で一行表示

### 3. LPStrengths.tsx

- 「選ばれる3つの強み」を単色白（text-white）に変更
- アンダーバーとの距離を `mb-6` に変更して間隔を広げました

---

## /components/lp/LPHero.tsx

```tsx
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
```

---

## /components/lp/LPPriceBlock.tsx

```tsx
import React from "react";
import {
  TrendingDown,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export function LPPriceBlock() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="price"
      className="relative py-12 sm:py-16 px-4 bg-zinc-900 overflow-hidden"
    >
      {/* Diagonal Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-fuchsia-950/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-tr from-cyan-950/30 to-transparent"></div>

      <div className="relative container mx-auto max-w-6xl">
        {/* Top Section */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full shadow-xl mb-6">
            <Sparkles
              size={20}
              className="text-white"
              strokeWidth={3}
            />
            <span className="text-sm sm:text-base font-black text-white">
              業界トップクラスの低価格
            </span>
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
              <div className="text-sm font-black text-cyan-600 mb-2 tracking-wide">
                ENTRY
              </div>
              <div className="text-2xl sm:text-3xl font-black text-zinc-900 mb-1">
                120インチ
              </div>
              <div className="text-xs text-zinc-500 mb-6">
                約2.7m × 1.5m
              </div>

              <div className="mb-6 pb-6 border-b-2 border-zinc-200">
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-6xl sm:text-7xl font-black text-cyan-600 leading-none">
                    69.8
                  </span>
                  <span className="text-2xl font-black text-cyan-600">
                    万円
                  </span>
                </div>
                <div className="text-xs text-zinc-600 font-bold">
                  税別価格
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2 text-sm text-zinc-700">
                  <CheckCircle2
                    size={18}
                    className="text-cyan-600 flex-shrink-0 mt-0.5"
                    strokeWidth={2.5}
                  />
                  <span className="font-bold">
                    2.6mmピッチ高精細
                  </span>
                </div>
                <div className="flex items-start gap-2 text-sm text-zinc-700">
                  <CheckCircle2
                    size={18}
                    className="text-cyan-600 flex-shrink-0 mt-0.5"
                    strokeWidth={2.5}
                  />
                  <span className="font-bold">
                    1か月サポート付
                  </span>
                </div>
                <div className="flex items-start gap-2 text-sm text-zinc-700">
                  <CheckCircle2
                    size={18}
                    className="text-cyan-600 flex-shrink-0 mt-0.5"
                    strokeWidth={2.5}
                  />
                  <span className="font-bold">
                    全国配送対応
                  </span>
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

              <div className="text-sm font-black text-fuchsia-600 mb-2 tracking-wide">
                STANDARD
              </div>
              <div className="text-2xl sm:text-3xl font-black text-zinc-900 mb-1">
                150インチ
              </div>
              <div className="text-xs text-zinc-500 mb-6">
                約3.3m × 1.9m
              </div>

              <div className="mb-6 pb-6 border-b-2 border-zinc-200">
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-6xl sm:text-7xl font-black text-fuchsia-600 leading-none">
                    120
                  </span>
                  <span className="text-2xl font-black text-fuchsia-600">
                    万円
                  </span>
                </div>
                <div className="text-xs text-zinc-600 font-bold">
                  税別価格
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2 text-sm text-zinc-700">
                  <CheckCircle2
                    size={18}
                    className="text-fuchsia-600 flex-shrink-0 mt-0.5"
                    strokeWidth={2.5}
                  />
                  <span className="font-bold">
                    2.6mmピッチ高精細
                  </span>
                </div>
                <div className="flex items-start gap-2 text-sm text-zinc-700">
                  <CheckCircle2
                    size={18}
                    className="text-fuchsia-600 flex-shrink-0 mt-0.5"
                    strokeWidth={2.5}
                  />
                  <span className="font-bold">
                    1か月サポート付
                  </span>
                </div>
                <div className="flex items-start gap-2 text-sm text-zinc-700">
                  <CheckCircle2
                    size={18}
                    className="text-fuchsia-600 flex-shrink-0 mt-0.5"
                    strokeWidth={2.5}
                  />
                  <span className="font-bold">
                    全国配送対応
                  </span>
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
              <div className="text-sm font-black text-yellow-600 mb-2 tracking-wide">
                PREMIUM
              </div>
              <div className="text-2xl sm:text-3xl font-black text-zinc-900 mb-1">
                180インチ
              </div>
              <div className="text-xs text-zinc-500 mb-6">
                約4.0m × 2.3m
              </div>

              <div className="mb-6 pb-6 border-b-2 border-zinc-200">
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-6xl sm:text-7xl font-black text-yellow-600 leading-none">
                    180
                  </span>
                  <span className="text-2xl font-black text-yellow-600">
                    万円
                  </span>
                </div>
                <div className="text-xs text-zinc-600 font-bold">
                  税別価格
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2 text-sm text-zinc-700">
                  <CheckCircle2
                    size={18}
                    className="text-yellow-600 flex-shrink-0 mt-0.5"
                    strokeWidth={2.5}
                  />
                  <span className="font-bold">
                    2.6mmピッチ高精細
                  </span>
                </div>
                <div className="flex items-start gap-2 text-sm text-zinc-700">
                  <CheckCircle2
                    size={18}
                    className="text-yellow-600 flex-shrink-0 mt-0.5"
                    strokeWidth={2.5}
                  />
                  <span className="font-bold">
                    1か月サポート付
                  </span>
                </div>
                <div className="flex items-start gap-2 text-sm text-zinc-700">
                  <CheckCircle2
                    size={18}
                    className="text-yellow-600 flex-shrink-0 mt-0.5"
                    strokeWidth={2.5}
                  />
                  <span className="font-bold">
                    全国配送対応
                  </span>
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
              <span className="font-black text-white text-lg">
                カスタムサイズも対応可能。
              </span>
              <br />
              設置環境に応じた最適プランをご提案します。まずはお気軽にご相談ください。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

## /components/lp/LPStrengths.tsx

```tsx
import React from "react";
import { DollarSign, Eye, Headphones } from "lucide-react";

export function LPStrengths() {
  const strengths = [
    {
      icon: DollarSign,
      number: "01",
      title: "業界トップクラスの低価格",
      lead: "比較して実感する、圧倒的なコストパフォーマンス",
      points: [
        "120inch：69.8万円（税別）",
        "150inch：120万円（税別）",
        "180inch：180万円（税別）",
        "他社比較歓迎・相見積もりOK",
      ],
      color: "yellow",
      gradient: "from-yellow-500 to-yellow-600",
      bgGradient: "from-yellow-500/10 to-yellow-600/5",
    },
    {
      icon: Eye,
      number: "02",
      title: "2.6mmピッチ高精細",
      lead: "近距離でも美しい、プロ仕様の映像品質",
      points: [
        "近距離でも美しい映像",
        "屋内用設計で鮮やか",
        "店舗・オフィス・展示会に最適",
        "視認性抜群",
      ],
      color: "cyan",
      gradient: "from-cyan-500 to-cyan-600",
      bgGradient: "from-cyan-500/10 to-cyan-600/5",
    },
    {
      icon: Headphones,
      number: "03",
      title: "導入後1か月サポート",
      lead: "安心のオンライン遠隔サポート体制",
      points: [
        "オンライン遠隔サポート対応",
        "接続・設定を丁寧に支援",
        "トラブル切り分けも安心",
        "専門スタッフが対応",
      ],
      color: "fuchsia",
      gradient: "from-fuchsia-500 to-fuchsia-600",
      bgGradient: "from-fuchsia-500/10 to-fuchsia-600/5",
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 px-4 bg-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255,255,255,0.1) 50px, rgba(255,255,255,0.1) 51px)",
          }}
        ></div>
      </div>

      <div className="relative container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            選ばれる3つの強み
          </h2>
          <div className="h-1.5 w-24 mx-auto bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-yellow-500 rounded-full"></div>
        </div>

        {/* Strengths Grid */}
        <div className="space-y-6 sm:space-y-8">
          {strengths.map((strength, index) => {
            const Icon = strength.icon;
            return (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${strength.bgGradient} backdrop-blur-sm border-2 border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all`}
              >
                {/* Number Watermark */}
                <div
                  className={`absolute top-0 right-0 text-[120px] sm:text-[180px] font-black text-white/5 leading-none pointer-events-none`}
                >
                  {strength.number}
                </div>

                <div className="relative p-6 sm:p-8 lg:p-10">
                  <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
                    {/* Icon & Number */}
                    <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                      <div
                        className={`p-4 rounded-2xl bg-gradient-to-br ${strength.gradient} shadow-xl`}
                      >
                        <Icon
                          size={40}
                          className="text-white"
                          strokeWidth={2.5}
                        />
                      </div>
                      <div
                        className={`text-5xl sm:text-6xl font-black bg-gradient-to-br ${strength.gradient} bg-clip-text text-transparent lg:hidden`}
                      >
                        {strength.number}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                        {strength.title}
                      </h3>
                      <p
                        className={`text-sm sm:text-base font-bold bg-gradient-to-r ${strength.gradient} bg-clip-text text-transparent mb-5`}
                      >
                        {strength.lead}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {strength.points.map(
                          (point, pIndex) => (
                            <div
                              key={pIndex}
                              className="flex items-start gap-3 bg-black/20 rounded-lg p-3"
                            >
                              <div
                                className={`w-2 h-2 rounded-full bg-gradient-to-r ${strength.gradient} mt-2 flex-shrink-0`}
                              ></div>
                              <span className="text-sm sm:text-base text-zinc-300 font-bold leading-relaxed">
                                {point}
                              </span>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div
                  className={`h-1 bg-gradient-to-r ${strength.gradient}`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
```