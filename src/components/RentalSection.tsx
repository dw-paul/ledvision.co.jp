import { motion } from 'motion/react';
import { Calendar, Wifi, HeadphonesIcon, Truck, Zap, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const rentalPlans = [
  {
    name: '展示会スペシャルパック',
    size: '1000mm × 500mm',
    price: '¥15,000',
    unit: '/ 1枚・1日',
    pitch: '2.6mmピッチ',
    tag: '展示会に最適',
    color: 'red',
    image: 'https://images.unsplash.com/photo-1762028892701-692dc360db08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGhpYml0aW9uJTIwYm9vdGglMjBkaXNwbGF5fGVufDF8fHx8MTc2ODgwODM4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: [
      'オンライン常時接続サポート',
      '設置・撤去作業込み',
      '当日現地対応スタッフ常駐',
      '複数枚組み合わせ自由',
      '展示会前日リハーサル可'
    ],
    recommended: true
  },
  {
    name: 'イベント短期レンタル',
    size: '2000mm × 1000mm',
    price: '¥45,000',
    unit: '/ 1日',
    pitch: '3.9mmピッチ',
    tag: '1週間以内',
    color: 'yellow',
    image: 'https://images.unsplash.com/photo-1761618291331-535983ae4296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHN0YWdlJTIwc2NyZWVufGVufDF8fHx8MTc2ODgwODM4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: [
      '遠隔操作システム',
      '24時間サポート',
      '運搬・設置無料',
      '予備機器完備',
      '延長料金30%OFF'
    ],
    recommended: false
  },
  {
    name: '店舗長期レンタル',
    size: '3000mm × 2000mm',
    price: '¥280,000',
    unit: '/ 月額',
    pitch: '2.6mmピッチ',
    tag: '月額制で安心',
    color: 'purple',
    image: 'https://images.unsplash.com/photo-1542211183455-2afe6f173cdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwc2lnbmFnZXxlbnwxfHx8fDE3Njg4MDgzODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: [
      '月1回の定期メンテナンス',
      'コンテンツ制作サポート',
      '故障時即日交換',
      '購入時全額値引き可',
      '最低契約3ヶ月〜'
    ],
    recommended: false
  }
];

const rentalBenefits = [
  {
    icon: Calendar,
    title: '1日から可能',
    description: '展示会・イベント単発OK',
    color: 'red'
  },
  {
    icon: Wifi,
    title: 'オンライン接続',
    description: '遠隔操作・サポート対応',
    color: 'yellow'
  },
  {
    icon: HeadphonesIcon,
    title: '24時間サポート',
    description: 'トラブル即対応',
    color: 'purple'
  },
  {
    icon: Truck,
    title: '全国配送',
    description: '設置・撤去も対応',
    color: 'blue'
  }
];

export function RentalSection() {
  return (
    <section id="レンタル" className="relative py-20 md:py-32 bg-gradient-to-b from-black via-[var(--bg-navy)] to-black overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-[var(--neon-yellow)] to-transparent"
            style={{ top: `${i * 10}%` }}
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 0.2
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-8 py-3 bg-[var(--neon-yellow)]/20 border-2 border-[var(--neon-yellow)] rounded-full">
            <span className="font-black text-2xl neon-text-yellow">🎪 レンタルサービス</span>
          </div>
          <h2 className="gradient-text mb-6">
            買う前に試せ！
          </h2>
          <p className="text-xl md:text-3xl font-black text-white mb-4">
            <span className="neon-text-red">1日¥15,000〜</span>
            <span className="text-white"> で </span>
            <span className="neon-text-yellow">展示会を制覇</span>
          </p>
          <p className="text-lg md:text-xl font-bold text-white">
            展示会向けレンタル → 気に入ったら<span className="neon-text-purple">そのまま購入OK</span>
          </p>
        </motion.div>

        {/* Rental Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {rentalBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className={`p-6 bg-black/80 border-2 neon-border-${benefit.color} rounded-xl text-center`}
            >
              <benefit.icon 
                className={`w-12 h-12 mx-auto mb-3 text-[var(--neon-${benefit.color})]`}
                style={{ filter: `drop-shadow(0 0 10px var(--neon-${benefit.color}))` }}
              />
              <h3 className={`text-xl font-black neon-text-${benefit.color} mb-2`}>
                {benefit.title}
              </h3>
              <p className="text-sm font-bold text-white">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Rental Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {rentalPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: plan.recommended ? 0 : 2 }}
              className={`relative group overflow-hidden rounded-xl neon-border-${plan.color} bg-black/80 ${
                plan.recommended ? 'ring-4 ring-[var(--neon-yellow)] scale-105' : ''
              }`}
            >
              {/* Recommended Badge */}
              {plan.recommended && (
                <motion.div
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute -top-3 -right-3 z-20 px-6 py-3 bg-[var(--neon-yellow)] text-black font-black text-lg rounded-full"
                  style={{ boxShadow: 'var(--glow-yellow)' }}
                >
                  ⭐ 展示会イチオシ
                </motion.div>
              )}

              {/* Plan Image */}
              <div className="relative h-56 overflow-hidden">
                <ImageWithFallback
                  src={plan.image}
                  alt={plan.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                
                {/* Tag */}
                <div className={`absolute top-4 left-4 px-4 py-2 bg-[var(--neon-${plan.color})] text-black font-black text-base`}
                  style={{ boxShadow: `var(--glow-${plan.color})` }}
                >
                  {plan.tag}
                </div>
              </div>

              {/* Plan Info */}
              <div className="p-6">
                <h3 className={`neon-text-${plan.color} mb-3 text-2xl`}>
                  {plan.name}
                </h3>
                
                <div className="mb-4">
                  <div className="text-3xl font-black text-white mb-1">{plan.size}</div>
                  <div className={`inline-block px-3 py-1 bg-[var(--neon-${plan.color})]/20 border border-[var(--neon-${plan.color})] rounded-full text-sm font-bold text-white`}>
                    {plan.pitch}
                  </div>
                </div>

                <div className="mb-6 p-4 bg-gradient-to-r from-[var(--neon-${plan.color})]/20 to-transparent border-l-4 border-[var(--neon-${plan.color})] rounded">
                  <div className={`text-5xl font-black neon-text-${plan.color}`}>
                    {plan.price}
                  </div>
                  <div className="text-lg font-bold text-white">{plan.unit}</div>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className={`w-5 h-5 mt-0.5 flex-shrink-0 text-[var(--neon-${plan.color})]`} />
                      <span className="text-sm font-bold text-white">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full px-6 py-4 ${
                    plan.recommended 
                      ? `bg-[var(--neon-${plan.color})] text-black`
                      : `border-2 border-[var(--neon-${plan.color})] text-[var(--neon-${plan.color})] bg-black/50`
                  } font-black text-lg rounded-lg btn-glow`}
                >
                  {plan.recommended ? '今すぐレンタル予約' : 'レンタル詳細'}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Exhibition Special Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative p-8 md:p-12 bg-gradient-to-br from-black via-[var(--bg-navy)] to-black border-4 border-[var(--neon-red)] rounded-2xl mb-16"
          style={{ boxShadow: 'var(--glow-red)' }}
        >
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 px-8 py-3 bg-[var(--neon-red)] text-white font-black text-2xl rounded-full whitespace-nowrap"
            style={{ boxShadow: 'var(--glow-red)' }}
          >
            🎯 展示会必勝プラン
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {/* Left: Image Gallery */}
            <div className="grid grid-cols-2 gap-4">
              {[
                'https://images.unsplash.com/photo-1712903276048-6da8d45bd9fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkZSUyMHNob3clMjBMRUR8ZW58MXx8fHwxNzY4ODA4Mzg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                'https://images.unsplash.com/photo-1727785616640-79c85a68660d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvb3IlMjBMRUQlMjBkaXNwbGF5fGVufDF8fHx8MTc2ODgwODM4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                'https://images.unsplash.com/photo-1545628070-28a0851cdd10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHdhbGx8ZW58MXx8fHwxNzY4ODA4Mzg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                'https://images.unsplash.com/photo-1675752521573-fe6fe0433ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwZGlzcGxheSUyMHNjcmVlbnxlbnwxfHx8fDE3Njg4MDI5MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
              ].map((img, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1, zIndex: 10 }}
                  className="relative overflow-hidden rounded-lg border-2 border-[var(--neon-yellow)]"
                >
                  <ImageWithFallback
                    src={img}
                    alt={`Exhibition ${i + 1}`}
                    className="w-full h-32 object-cover"
                  />
                </motion.div>
              ))}
            </div>

            {/* Right: Details */}
            <div>
              <h3 className="text-3xl md:text-4xl font-black neon-text-red mb-4">
                展示会で圧倒的な集客力
              </h3>
              <p className="text-xl font-bold text-white mb-6">
                レンタル → 気に入ったらそのまま購入で<span className="neon-text-yellow">レンタル料金全額キャッシュバック</span>
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-[var(--neon-yellow)] flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-black text-lg text-white">2.6mmピッチの高精細</div>
                    <div className="text-sm text-gray-400">近くで見ても綺麗。商品の細部まで表現</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Wifi className="w-6 h-6 text-[var(--neon-blue)] flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-black text-lg text-white">オンライン常時接続サポート</div>
                    <div className="text-sm text-gray-400">遠隔でコンテンツ変更・トラブル即対応</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Truck className="w-6 h-6 text-[var(--neon-purple)] flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-black text-lg text-white">設置・撤去すべて込み</div>
                    <div className="text-sm text-gray-400">展示会前日搬入・当日朝セッティング完了</div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-[var(--neon-yellow)]/10 border-2 border-[var(--neon-yellow)] rounded-lg mb-6">
                <div className="text-sm text-gray-400 mb-2">展示会スペシャルパック</div>
                <div className="text-5xl font-black neon-text-yellow mb-2">¥15,000</div>
                <div className="text-lg font-bold text-white">1000mm × 500mm / 1枚・1日</div>
                <div className="text-sm text-gray-400 mt-2">※複数枚組み合わせで大画面も対応可能</div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-6 bg-[var(--neon-red)] text-white font-black text-2xl rounded-xl"
                style={{ boxShadow: 'var(--glow-red)' }}
              >
                展示会レンタルを予約する
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Rental to Purchase Flow */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl md:text-4xl font-black text-white mb-12">
            <span className="neon-text-purple">レンタル</span>
            <span className="text-white"> → </span>
            <span className="neon-text-yellow">購入</span>
            <span className="text-white"> の流れ</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: 'STEP 1', title: 'レンタル予約', description: '展示会の1週間前までに予約', color: 'red' },
              { step: 'STEP 2', title: '展示会で使用', description: '効果を実際に体験', color: 'yellow' },
              { step: 'STEP 3', title: '気に入ったら購入', description: 'レンタル料金全額キャッシュバック', color: 'purple' },
              { step: 'STEP 4', title: '即日納品', description: 'そのまま持ち帰りOK', color: 'blue' }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className={`p-6 bg-black/80 border-3 neon-border-${step.color} rounded-xl`}
              >
                <div className={`text-6xl font-black neon-text-${step.color} mb-3`}>
                  {index + 1}
                </div>
                <div className="font-black text-xl text-white mb-2">{step.step}</div>
                <div className={`font-black text-2xl neon-text-${step.color} mb-3`}>
                  {step.title}
                </div>
                <div className="text-sm font-bold text-white">
                  {step.description}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="mt-12 inline-block px-12 py-6 bg-gradient-to-r from-[var(--neon-red)] via-[var(--neon-yellow)] to-[var(--neon-purple)] text-black font-black text-2xl rounded-xl cursor-pointer"
            style={{ boxShadow: '0 0 40px var(--neon-yellow)' }}
          >
            まずはレンタルで試してみる
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}