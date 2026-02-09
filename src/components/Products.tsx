import React from 'react';
import { Check } from 'lucide-react';

export function Products() {
  const products = [
    {
      category: '屋外用LEDビジョン',
      title: 'アウトドアシリーズ',
      features: [
        '高輝度5000cd/㎡以上',
        'IP65防水防塵規格',
        'ピッチ：2.6mm～10mm',
        '24時間連続稼働対応',
        '5年間保証'
      ],
      ideal: 'パチンコ店舗・商業施設・ビル外壁',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      category: '屋内用LEDビジョン',
      title: 'インドアシリーズ',
      features: [
        '高精細1.5mm～3.9mmピッチ',
        '広視野角160°以上',
        '省エネ設計',
        '軽量・薄型設計',
        '3年間保証'
      ],
      ideal: '店舗内・イベント会場・展示会',
      color: 'from-fuchsia-500 to-fuchsia-600'
    },
    {
      category: 'レンタルサービス',
      title: 'イベントパック',
      features: [
        '1日¥15,000～',
        '設置・撤去込み',
        'オンライン接続対応',
        '最短即日納品',
        '全国対応可能'
      ],
      ideal: '展示会・イベント・短期プロモーション',
      color: 'from-yellow-500 to-yellow-600'
    }
  ];

  return (
    <section id="products" className="relative py-20 sm:py-32 px-4 bg-zinc-950">
      {/* Section Header */}
      <div className="container mx-auto max-w-6xl mb-16 sm:mb-20">
        <div className="text-center mb-4">
          <div className="inline-block px-4 py-2 border border-zinc-700 rounded-full text-sm font-bold text-zinc-400 mb-6">
            PRODUCTS & SERVICES
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-yellow-400 bg-clip-text text-transparent">
              製品・サービス
            </span>
          </h2>
          <div className="h-1 w-24 sm:w-32 mx-auto bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-yellow-500 rounded-full"></div>
        </div>
        <p className="text-center text-lg sm:text-xl text-zinc-400 max-w-3xl mx-auto mt-8">
          用途に応じた最適なLEDビジョンをご提案。購入からレンタルまで、<br className="hidden sm:inline" />
          あらゆるニーズに対応します。
        </p>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="relative bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-all group"
            >
              {/* Top Color Bar */}
              <div className={`h-2 bg-gradient-to-r ${product.color}`}></div>

              <div className="p-6 sm:p-8">
                {/* Category */}
                <div className="text-sm font-bold text-zinc-500 mb-2">
                  {product.category}
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-black mb-6 text-white">
                  {product.title}
                </h3>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {product.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${product.color} flex items-center justify-center mt-0.5`}>
                        <Check size={14} className="text-black" strokeWidth={3} />
                      </div>
                      <span className="text-zinc-300 text-sm sm:text-base">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Ideal For */}
                <div className="pt-6 border-t border-zinc-800">
                  <div className="text-xs font-bold text-zinc-500 mb-2">
                    最適な用途
                  </div>
                  <div className="text-sm font-bold text-zinc-300">
                    {product.ideal}
                  </div>
                </div>

                {/* CTA Button */}
                <button className={`w-full mt-6 px-6 py-3 bg-gradient-to-r ${product.color} rounded-lg font-bold hover:opacity-90 transition-opacity`}>
                  詳しく見る
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
