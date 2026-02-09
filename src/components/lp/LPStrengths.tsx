import React from 'react';
import { DollarSign, Eye, Headphones } from 'lucide-react';

export function LPStrengths() {
  const strengths = [
    {
      icon: DollarSign,
      number: '01',
      title: '業界トップクラスの低価格',
      lead: '比較して実感する、圧倒的なコストパフォーマンス',
      points: [
        '120inch：69.8万円（税別）',
        '150inch：120万円（税別）',
        '180inch：180万円（税別）',
        '他社比較歓迎・相見積もりOK'
      ],
      color: 'yellow',
      gradient: 'from-yellow-500 to-yellow-600',
      bgGradient: 'from-yellow-500/10 to-yellow-600/5'
    },
    {
      icon: Eye,
      number: '02',
      title: '2.6mmピッチ高精細',
      lead: '近距離でも美しい、プロ仕様の映像品質',
      points: [
        '近距離でも美しい映像',
        '屋内用設計で鮮やか',
        '店舗・オフィス・展示会に最適',
        '視認性抜群'
      ],
      color: 'cyan',
      gradient: 'from-cyan-500 to-cyan-600',
      bgGradient: 'from-cyan-500/10 to-cyan-600/5'
    },
    {
      icon: Headphones,
      number: '03',
      title: '導入後1か月サポート',
      lead: '安心のオンライン遠隔サポート体制',
      points: [
        'オンライン遠隔サポート対応',
        '接続・設定を丁寧に支援',
        'トラブル切り分けも安心',
        '専門スタッフが対応'
      ],
      color: 'fuchsia',
      gradient: 'from-fuchsia-500 to-fuchsia-600',
      bgGradient: 'from-fuchsia-500/10 to-fuchsia-600/5'
    }
  ];

  return (
    <section className="relative py-12 sm:py-16 px-4 bg-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255,255,255,0.1) 50px, rgba(255,255,255,0.1) 51px)',
        }}></div>
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
                <div className={`absolute top-0 right-0 text-[120px] sm:text-[180px] font-black text-white/5 leading-none pointer-events-none`}>
                  {strength.number}
                </div>

                <div className="relative p-6 sm:p-8 lg:p-10">
                  <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
                    {/* Icon & Number */}
                    <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${strength.gradient} shadow-xl`}>
                        <Icon size={40} className="text-white" strokeWidth={2.5} />
                      </div>
                      <div className={`text-5xl sm:text-6xl font-black bg-gradient-to-br ${strength.gradient} bg-clip-text text-transparent lg:hidden`}>
                        {strength.number}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                        {strength.title}
                      </h3>
                      <p className={`text-sm sm:text-base font-bold bg-gradient-to-r ${strength.gradient} bg-clip-text text-transparent mb-5`}>
                        {strength.lead}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {strength.points.map((point, pIndex) => (
                          <div key={pIndex} className="flex items-start gap-3 bg-black/20 rounded-lg p-3">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${strength.gradient} mt-2 flex-shrink-0`}></div>
                            <span className="text-sm sm:text-base text-zinc-300 font-bold leading-relaxed">
                              {point}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className={`h-1 bg-gradient-to-r ${strength.gradient}`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}