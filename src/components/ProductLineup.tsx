import { motion } from 'motion/react';
import { Maximize2, Building2, TrendingUp, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const products = [
  {
    name: '超大型LEDビジョン',
    size: '10m × 5m',
    price: '¥8,800,000',
    tag: '圧倒的存在感',
    color: 'red',
    icon: Maximize2,
    image: 'https://images.unsplash.com/photo-1632008649281-0846891f76bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwTEVEJTIwc2NyZWVufGVufDF8fHx8MTc2ODgwMjkxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: ['4K対応', '防水仕様', '遠隔操作']
  },
  {
    name: '店舗用LEDディスプレイ',
    size: '3m × 2m',
    price: '¥2,980,000',
    tag: '売上UP確実',
    color: 'yellow',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1764795850238-7a024db5e3ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBzdG9yZSUyMGRpc3BsYXl8ZW58MXx8fHwxNzY4Nzc2ODY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: ['省エネ設計', '簡単設置', '24時間稼働']
  },
  {
    name: '屋外広告用LED',
    size: '5m × 3m',
    price: '¥4,500,000',
    tag: '集客力MAX',
    color: 'purple',
    icon: TrendingUp,
    image: 'https://images.unsplash.com/photo-1759388105240-6d169c2929cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwYWR2ZXJ0aXNpbmclMjBzY3JlZW58ZW58MXx8fHwxNzY4ODAyOTExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: ['耐久性抜群', '高輝度', '自動調光']
  },
  {
    name: 'イベント用移動式LED',
    size: '4m × 2.5m',
    price: '¥3,800,000',
    tag: 'どこでも設置',
    color: 'blue',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1675752521573-fe6fe0433ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwZGlzcGxheSUyMHNjcmVlbnxlbnwxfHx8fDE3Njg4MDI5MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: ['軽量設計', 'ワイヤレス', 'レンタルOK']
  }
];

export function ProductLineup() {
  return (
    <section id="製品" className="relative py-20 md:py-32 bg-gradient-to-b from-black via-[var(--bg-navy)] to-black">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-8 py-3 bg-[var(--neon-yellow)]/20 border-2 border-[var(--neon-yellow)] rounded-full">
            <span className="font-black text-2xl neon-text-yellow">製品ラインナップ</span>
          </div>
          <h2 className="gradient-text mb-6">
            選べる4つの破壊力
          </h2>
          <p className="text-xl md:text-2xl font-bold text-white">
            どのサイズでも<span className="text-[var(--neon-red)]">圧倒的な存在感</span>
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03, rotate: 1 }}
              className={`relative group overflow-hidden rounded-xl neon-border-${product.color} bg-black/80`}
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                
                {/* Tag */}
                <div className={`absolute top-4 right-4 px-6 py-2 bg-[var(--neon-${product.color})] text-black font-black text-lg rotate-3`}
                  style={{ boxShadow: `var(--glow-${product.color})` }}
                >
                  {product.tag}
                </div>

                {/* Icon */}
                <product.icon 
                  className={`absolute top-4 left-4 w-12 h-12 text-[var(--neon-${product.color})]`}
                  style={{ filter: `drop-shadow(0 0 10px var(--neon-${product.color}))` }}
                />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className={`neon-text-${product.color} mb-3 text-3xl`}>
                  {product.name}
                </h3>
                
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-5xl font-black text-white">{product.size}</span>
                </div>

                <div className="mb-4 flex flex-wrap gap-2">
                  {product.features.map((feature, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-white/10 border border-white/30 rounded-full text-sm font-bold text-white"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-400 font-bold mb-1">特別価格</div>
                    <div className={`text-4xl font-black neon-text-${product.color}`}>
                      {product.price}
                    </div>
                    <div className="text-sm text-gray-400 font-bold">税込・工事費別</div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`px-8 py-4 bg-[var(--neon-${product.color})] text-black font-black text-xl rounded-lg btn-glow`}
                  >
                    詳細
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-2xl md:text-3xl font-black text-white mb-6">
            <span className="neon-text-red">今なら</span>
            <span className="text-white"> / </span>
            <span className="neon-text-yellow">設置工事費30%OFF</span>
            <span className="text-white"> / </span>
            <span className="neon-text-purple">先着50社限定</span>
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-12 py-6 bg-gradient-to-r from-[var(--neon-red)] via-[var(--neon-yellow)] to-[var(--neon-purple)] text-black font-black text-2xl rounded-xl"
            style={{ boxShadow: '0 0 40px rgba(255, 8, 68, 0.8)' }}
          >
            見積もり依頼（無料）
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
