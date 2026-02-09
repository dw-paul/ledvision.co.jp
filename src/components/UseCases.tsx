import React from 'react';
import { Dices, Building2, Calendar, Store, Sparkles, Users } from 'lucide-react';

export function UseCases() {
  const useCases = [
    {
      icon: Dices,
      title: 'パチンコ・パチスロ店舗',
      description: '新台情報や出玉情報をリアルタイムで表示。店舗外観の存在感を圧倒的に高め、通行者の視線を集めます。',
      benefits: ['集客力30%向上', '新台告知の即時性', '夜間でも高視認性'],
      color: 'cyan'
    },
    {
      icon: Building2,
      title: '商業施設・ショッピングモール',
      description: 'セール情報やテナント案内を動的に表示。施設全体のブランディングと来店促進を同時に実現します。',
      benefits: ['売上15%増加', 'テナント満足度向上', 'イベント告知効果'],
      color: 'fuchsia'
    },
    {
      icon: Calendar,
      title: '展示会・イベント',
      description: 'ブースの注目度を最大化。製品紹介や動画コンテンツを大画面で訴求し、来場者の足を止めます。',
      benefits: ['ブース来場数2倍', '商談数増加', 'SNS拡散効果'],
      color: 'yellow'
    },
    {
      icon: Store,
      title: '飲食店・小売店',
      description: 'メニューや商品情報を鮮やかに表示。時間帯に応じた情報切り替えで効率的な販促が可能です。',
      benefits: ['客単価向上', 'オーダー数増加', '店舗認知拡大'],
      color: 'pink'
    },
    {
      icon: Sparkles,
      title: 'エンターテイメント施設',
      description: 'ライブ会場、カラオケ、アミューズメント施設での演出効果を劇的に向上させます。',
      benefits: ['来場者満足度向上', 'リピート率増加', 'SNS話題化'],
      color: 'purple'
    },
    {
      icon: Users,
      title: '企業・オフィス',
      description: '受付やロビーでの情報発信、社内イベントでの活用など、コーポレートブランディングに貢献します。',
      benefits: ['企業イメージ向上', '情報伝達効率化', '来訪者印象アップ'],
      color: 'emerald'
    }
  ];

  const colorMap: Record<string, string> = {
    cyan: 'from-cyan-500 to-cyan-600',
    fuchsia: 'from-fuchsia-500 to-fuchsia-600',
    yellow: 'from-yellow-500 to-yellow-600',
    pink: 'from-pink-500 to-pink-600',
    purple: 'from-purple-500 to-purple-600',
    emerald: 'from-emerald-500 to-emerald-600'
  };

  return (
    <section id="usecases" className="relative py-20 sm:py-32 px-4">
      {/* Section Header */}
      <div className="container mx-auto max-w-6xl mb-16 sm:mb-20">
        <div className="text-center mb-4">
          <div className="inline-block px-4 py-2 border border-zinc-700 rounded-full text-sm font-bold text-zinc-400 mb-6">
            USE CASES
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-yellow-400 bg-clip-text text-transparent">
              用途別提案
            </span>
          </h2>
          <div className="h-1 w-24 sm:w-32 mx-auto bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-yellow-500 rounded-full"></div>
        </div>
        <p className="text-center text-lg sm:text-xl text-zinc-400 max-w-3xl mx-auto mt-8">
          あらゆる業種・業態に対応。<br className="hidden sm:inline" />
          LEDビジョンが、あなたのビジネスを次のステージへ。
        </p>
      </div>

      {/* Use Cases Grid */}
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            const gradient = colorMap[useCase.color];
            
            return (
              <div 
                key={index}
                className="group relative bg-zinc-900 border border-zinc-800 rounded-xl p-6 sm:p-8 hover:border-zinc-700 transition-all"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className={`inline-flex p-4 rounded-lg bg-gradient-to-br ${gradient} bg-opacity-10`}>
                    <Icon size={32} className="text-white" strokeWidth={2} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-black mb-3 text-white">
                  {useCase.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-400 leading-relaxed mb-6 text-sm sm:text-base">
                  {useCase.description}
                </p>

                {/* Benefits */}
                <div className="space-y-2">
                  <div className="text-xs font-bold text-zinc-500 mb-3">
                    導入効果
                  </div>
                  {useCase.benefits.map((benefit, bIndex) => (
                    <div key={bIndex} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${gradient}`}></div>
                      <span className="text-xs sm:text-sm font-bold text-zinc-300">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Hover Effect Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity rounded-b-xl`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
