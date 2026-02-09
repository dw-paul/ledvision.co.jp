import React from 'react';
import { Zap, Shield, Headphones, TrendingUp, Settings, Truck } from 'lucide-react';

export function Strengths() {
  const strengths = [
    {
      icon: Zap,
      title: '圧倒的な輝度',
      description: '業界最高水準の高輝度LEDを採用。昼夜を問わず、どんな環境でも鮮明に映像を表示します。',
      color: 'from-yellow-500 to-yellow-400'
    },
    {
      icon: Shield,
      title: '堅牢性と耐久性',
      description: '防水・防塵規格対応。過酷な環境下でも長期間安定稼働を実現する業務用設計です。',
      color: 'from-cyan-500 to-cyan-400'
    },
    {
      icon: Headphones,
      title: '24時間サポート',
      description: '専門スタッフが24時間365日対応。トラブル時も迅速に駆けつけます。',
      color: 'from-fuchsia-500 to-fuchsia-400'
    },
    {
      icon: TrendingUp,
      title: '集客力向上',
      description: '動的なコンテンツで通行者の視線を釘付けに。売上アップに直結する訴求力を実現します。',
      color: 'from-pink-500 to-pink-400'
    },
    {
      icon: Settings,
      title: '簡単コンテンツ管理',
      description: 'クラウド対応の専用システムで、スマホからでもコンテンツ更新が可能です。',
      color: 'from-purple-500 to-purple-400'
    },
    {
      icon: Truck,
      title: 'スピード納品',
      description: '全国に配置された拠点網で最短3日納品を実現。レンタルも即日対応可能です。',
      color: 'from-emerald-500 to-emerald-400'
    }
  ];

  return (
    <section id="strengths" className="relative py-20 sm:py-32 px-4">
      {/* Section Header */}
      <div className="container mx-auto max-w-6xl mb-16 sm:mb-20">
        <div className="text-center mb-4">
          <div className="inline-block px-4 py-2 border border-zinc-700 rounded-full text-sm font-bold text-zinc-400 mb-6">
            STRENGTHS
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-yellow-400 bg-clip-text text-transparent">
              選ばれる理由
            </span>
          </h2>
          <div className="h-1 w-24 sm:w-32 mx-auto bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-yellow-500 rounded-full"></div>
        </div>
      </div>

      {/* Strengths Grid */}
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {strengths.map((strength, index) => {
            const Icon = strength.icon;
            return (
              <div 
                key={index}
                className="group relative bg-zinc-900 border border-zinc-800 rounded-xl p-6 sm:p-8 hover:border-zinc-700 transition-all"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className={`inline-flex p-4 rounded-lg bg-gradient-to-br ${strength.color} bg-opacity-10`}>
                    <Icon size={32} className={`bg-gradient-to-br ${strength.color} bg-clip-text text-transparent`} strokeWidth={2.5} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-black mb-3 text-white">
                  {strength.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {strength.description}
                </p>

                {/* Hover Effect Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${strength.color} opacity-0 group-hover:opacity-100 transition-opacity rounded-b-xl`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
