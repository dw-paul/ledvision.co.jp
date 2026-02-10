import React from 'react';
import { Check } from 'lucide-react';

export function LPPricing() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const plans = [
    {
      size: '120インチ',
      dimensions: '約2.7m × 1.5m',
      price: '69.8万円',
      features: [
        '2.5mmピッチ高精細',
        '屋内用設計',
        '設置サポート',
        '納品後1か月オンラインサポート',
        '全国配送対応'
      ],
      popular: false,
      color: 'cyan'
    },
    {
      size: '150インチ',
      dimensions: '約3.3m × 1.9m',
      price: '120万円',
      features: [
        '2.5mmピッチ高精細',
        '屋内用設計',
        '設置サポート',
        '納品後1か月オンラインサポート',
        '全国配送対応'
      ],
      popular: true,
      color: 'fuchsia'
    },
    {
      size: '180インチ',
      dimensions: '約4.0m × 2.3m',
      price: '180万円',
      features: [
        '2.5mmピッチ高精細',
        '屋内用設計',
        '設置サポート',
        '納品後1か月オンラインサポート',
        '全国配送対応'
      ],
      popular: false,
      color: 'yellow'
    }
  ];

  const colorMap: Record<string, { gradient: string; border: string; text: string }> = {
    cyan: {
      gradient: 'from-cyan-500 to-cyan-600',
      border: 'border-cyan-400',
      text: 'text-cyan-600'
    },
    fuchsia: {
      gradient: 'from-fuchsia-500 to-fuchsia-600',
      border: 'border-fuchsia-400',
      text: 'text-fuchsia-600'
    },
    yellow: {
      gradient: 'from-yellow-500 to-yellow-600',
      border: 'border-yellow-400',
      text: 'text-yellow-700'
    }
  };

  return (
    <section id="pricing" className="py-10 sm:py-14 px-4 bg-gradient-to-b from-zinc-50 to-white">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 mb-3">
            <span className="bg-gradient-to-r from-cyan-600 via-fuchsia-600 to-yellow-600 bg-clip-text text-transparent">
              価格表
            </span>
          </h2>
          <div className="h-1 w-20 mx-auto bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-yellow-500 rounded-full mb-4"></div>
          <p className="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto">
            代表的なサイズと価格。カスタムサイズもお気軽にご相談ください。
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {plans.map((plan, index) => {
            const colors = colorMap[plan.color];
            return (
              <div 
                key={index}
                className={`relative bg-white border-2 rounded-xl overflow-hidden hover:shadow-xl transition-all ${
                  plan.popular ? 'border-fuchsia-400 shadow-lg' : 'border-zinc-200'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-fuchsia-500 to-fuchsia-600 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                    人気
                  </div>
                )}

                <div className="p-6 sm:p-7">
                  {/* Size */}
                  <div className={`text-2xl sm:text-3xl font-black mb-2 ${colors.text}`}>
                    {plan.size}
                  </div>
                  <div className="text-sm text-zinc-500 mb-4">
                    {plan.dimensions}
                  </div>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-zinc-200">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-black text-zinc-900">
                        {plan.price}
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm text-zinc-500 mt-1">
                      税別価格
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-2">
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${colors.gradient} flex items-center justify-center mt-0.5`}>
                          <Check size={12} className="text-white" strokeWidth={3} />
                        </div>
                        <span className="text-sm text-zinc-700">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button 
                    onClick={scrollToContact}
                    className={`w-full py-3 bg-gradient-to-r ${colors.gradient} text-white rounded-lg font-bold hover:shadow-lg transition-all`}
                  >
                    見積もり依頼
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-zinc-500">
            ※ カスタムサイズ・特殊仕様もご相談ください。設置環境に応じて最適なプランをご提案いたします。
          </p>
        </div>
      </div>
    </section>
  );
}
