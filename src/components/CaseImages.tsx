import React from 'react';

export function CaseImages() {
  const cases = [
    {
      image: 'https://images.unsplash.com/photo-1766324488354-a189b706d3e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMRUQlMjBkaXNwbGF5JTIwYmlsbGJvYXJkJTIwbmlnaHR8ZW58MXx8fHwxNzY5Mzc3NDExfDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'パチンコ店舗',
      title: '外壁大型ビジョン',
      specs: '3m×2m・屋外用・3.9mmピッチ'
    },
    {
      image: 'https://images.unsplash.com/photo-1741243413398-2e5e407da204?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXJnZSUyMExFRCUyMHNjcmVlbiUyMGNvbW1lcmNpYWx8ZW58MXx8fHwxNzY5Mzc3NDEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: '商業施設',
      title: 'エントランスディスプレイ',
      specs: '5m×3m・屋内用・2.6mmピッチ'
    },
    {
      image: 'https://images.unsplash.com/photo-1764795850248-97a5e986b242?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwZGlzcGxheSUyMHN0b3JlfGVufDF8fHx8MTc2OTM3NzQxMnww&ixlib=rb-4.1.0&q=80&w=1080',
      category: '店舗',
      title: 'ショーウィンドウビジョン',
      specs: '2m×1.5m・屋内用・1.9mmピッチ'
    },
    {
      image: 'https://images.unsplash.com/photo-1561348613-6d08019ace21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBzdG9yZSUyMGxpZ2h0c3xlbnwxfHx8fDE3NjkzNzc0MTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: '小売',
      title: '店内マルチディスプレイ',
      specs: '1.5m×1m×3面・屋内用・2.6mmピッチ'
    },
    {
      image: 'https://images.unsplash.com/photo-1762028892701-692dc360db08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMGV4aGliaXRpb24lMjBib290aHxlbnwxfHx8fDE3NjkzNzc0MTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: '展示会',
      title: 'ブースバックパネル',
      specs: '4m×2.5m・レンタル・3.9mmピッチ'
    },
    {
      image: 'https://images.unsplash.com/photo-1743947197440-4229beaf716c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMG1hbGwlMjBhZHZlcnRpc2luZ3xlbnwxfHx8fDE3NjkzNzc0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'ショッピングモール',
      title: 'センターコートビジョン',
      specs: '6m×4m・屋内用・3.9mmピッチ'
    }
  ];

  return (
    <section id="cases" className="relative py-20 sm:py-32 px-4 bg-zinc-950">
      {/* Section Header */}
      <div className="container mx-auto max-w-6xl mb-16 sm:mb-20">
        <div className="text-center mb-4">
          <div className="inline-block px-4 py-2 border border-zinc-700 rounded-full text-sm font-bold text-zinc-400 mb-6">
            CASE IMAGES
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-yellow-400 bg-clip-text text-transparent">
              活用イメージ
            </span>
          </h2>
          <div className="h-1 w-24 sm:w-32 mx-auto bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-yellow-500 rounded-full"></div>
        </div>
        <p className="text-center text-lg sm:text-xl text-zinc-400 max-w-3xl mx-auto mt-8">
          さまざまな業態での活用シーンをご紹介。<br className="hidden sm:inline" />
          あなたのビジネスに最適なサイズ・仕様をご提案します。
        </p>
      </div>

      {/* Cases Grid */}
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cases.map((caseItem, index) => (
            <div 
              key={index}
              className="group relative bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-all"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={caseItem.image} 
                  alt={caseItem.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/80 backdrop-blur-sm rounded-full text-xs font-bold text-white border border-zinc-700">
                  {caseItem.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-black mb-2 text-white">
                  {caseItem.title}
                </h3>
                <p className="text-sm text-zinc-400">
                  {caseItem.specs}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Note */}
      <div className="container mx-auto max-w-6xl mt-12">
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 sm:p-8">
          <p className="text-sm sm:text-base text-zinc-400 text-center leading-relaxed">
            ※ 上記は活用シーンのイメージです。実際の設置環境や仕様により、最適なサイズ・ピッチをご提案いたします。<br className="hidden sm:inline" />
            詳しくはお気軽にお問い合わせください。
          </p>
        </div>
      </div>
    </section>
  );
}
