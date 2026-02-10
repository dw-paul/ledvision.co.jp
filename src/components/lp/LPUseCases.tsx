import React from 'react';

export function LPUseCases() {
  const cases = [
    {
      image: '/RETAIL.png',
      title: '店舗内サイネージ',
      description: '商品情報・セール告知',
      tag: 'RETAIL'
    },
    {
      image: 'OFFICE.png',
      title: '受付・待合',
      description: '企業情報・案内表示',
      tag: 'OFFICE'
    },
    {
      image: 'https://images.unsplash.com/photo-1769284012089-14765f328786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGhpYml0aW9uJTIwYm9vdGglMjBpbmRvb3IlMjBkaXNwbGF5fGVufDF8fHx8MTc3MDA5MzEyNXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: '展示会ブース',
      description: '製品紹介・動画訴求',
      tag: 'EVENT'
    },
    {
      image: '/meeting.png',
      title: '会議室',
      description: 'プレゼン・大画面表示',
      tag: 'MEETING'
    },
    {
      image: '/showroom.jpg',
      title: 'ショールーム',
      description: 'ブランド演出',
      tag: 'SHOWROOM'
    },
    {
      image: '/LIVE.png',
      title: 'イベント室内',
      description: 'ライブ・演出効果',
      tag: 'LIVE'
    }
  ];

  return (
    <section className="relative py-12 sm:py-16 px-4 bg-zinc-900 overflow-hidden">
      {/* Diagonal Accent */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-cyan-950/40 via-transparent to-transparent"></div>

      <div className="relative container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            <span className="text-white bg-clip-text text-transparent">
              活用イメージ
            </span>
          </h2>
          <div className="h-1.5 w-24 mx-auto bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-yellow-500 rounded-full mb-5 mt-4"></div>
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto">
            屋内のあらゆるシーンで活躍するLEDビジョン
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {cases.map((caseItem, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
                <img 
                  src={caseItem.image} 
                  alt={caseItem.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                {/* Tag Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 bg-black/80 backdrop-blur-sm rounded-full border border-white/20">
                  <span className="text-xs font-black text-white tracking-wider">{caseItem.tag}</span>
                </div>
              </div>

              {/* Content */}
              <div className="relative p-5 bg-gradient-to-br from-white to-zinc-50">
                {/* Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-yellow-500"></div>
                
                <h3 className="text-lg sm:text-xl font-black text-zinc-900 mb-2">
                  {caseItem.title}
                </h3>
                <p className="text-sm text-zinc-600 font-medium">
                  {caseItem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-10 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-fuchsia-500/5 to-yellow-500/5 rounded-xl blur"></div>
          <div className="relative bg-zinc-800/80 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <p className="text-sm text-zinc-400 text-center leading-relaxed">
              <span className="font-bold text-white">※</span> 活用シーンの一例です。設置環境に応じて最適なサイズ・仕様をご提案します。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
