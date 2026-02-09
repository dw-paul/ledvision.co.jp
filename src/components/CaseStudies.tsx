import { motion } from 'motion/react';
import { TrendingUp, Users, DollarSign, Star } from 'lucide-react';

const cases = [
  {
    client: '渋谷某パチンコ店',
    industry: 'パチンコ・娯楽',
    result: '来店数',
    increase: '+347%',
    period: '3ヶ月',
    quote: '設置した瞬間から人が集まる。もう手放せない。',
    color: 'red',
    icon: Users
  },
  {
    client: '新宿某ドラッグストア',
    industry: 'リテール',
    result: '売上',
    increase: '+289%',
    period: '2ヶ月',
    quote: '商品が勝手に売れていく。LED効果がヤバい。',
    color: 'yellow',
    icon: DollarSign
  },
  {
    client: '某大型イベント会場',
    industry: 'イベント',
    result: '認知度',
    increase: '+412%',
    period: '1ヶ月',
    quote: 'SNS拡散が止まらない。想像以上の効果。',
    color: 'purple',
    icon: TrendingUp
  },
  {
    client: '某ファッションビル',
    industry: 'ショッピングモール',
    result: '客単価',
    increase: '+198%',
    period: '3ヶ月',
    quote: '高級感が出て客層が変わった。投資回収済み。',
    color: 'blue',
    icon: Star
  }
];

export function CaseStudies() {
  return (
    <section id="事例" className="relative py-20 md:py-32 bg-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div style={{
          backgroundImage: 'repeating-linear-gradient(45deg, var(--neon-red) 0, var(--neon-red) 1px, transparent 0, transparent 50%)',
          backgroundSize: '10px 10px'
        }} className="w-full h-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-8 py-3 bg-[var(--neon-red)]/20 border-2 border-[var(--neon-red)] rounded-full">
            <span className="font-black text-2xl neon-text-red">導入事例</span>
          </div>
          <h2 className="gradient-text mb-6">
            数字が証明する効果
          </h2>
          <p className="text-xl md:text-3xl font-black text-white">
            <span className="neon-text-yellow">圧倒的な実績</span>
            <span className="text-white"> × </span>
            <span className="neon-text-purple">リアルな声</span>
          </p>
        </motion.div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
          {cases.map((caseItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`relative p-8 bg-gradient-to-br from-black via-[var(--bg-navy)] to-black border-3 neon-border-${caseItem.color} rounded-xl`}
            >
              {/* Icon */}
              <div className="absolute top-6 right-6">
                <caseItem.icon 
                  className={`w-16 h-16 text-[var(--neon-${caseItem.color})]`}
                  style={{ filter: `drop-shadow(0 0 15px var(--neon-${caseItem.color}))` }}
                />
              </div>

              {/* Client Info */}
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                  {caseItem.client}
                </h3>
                <span className="inline-block px-4 py-1 bg-white/10 border border-white/30 rounded-full text-sm font-bold text-white">
                  {caseItem.industry}
                </span>
              </div>

              {/* Results */}
              <div className="mb-6 p-6 bg-black/50 rounded-lg border-2 border-[var(--neon-${caseItem.color}]/30">
                <div className="text-sm text-gray-400 font-bold mb-2">{caseItem.result}</div>
                <div className={`text-6xl md:text-7xl font-black neon-text-${caseItem.color} mb-2`}>
                  {caseItem.increase}
                </div>
                <div className="text-lg font-bold text-white">
                  導入後 {caseItem.period}
                </div>
              </div>

              {/* Quote */}
              <div className="relative pl-6 border-l-4 border-[var(--neon-${caseItem.color}]">
                <p className="text-lg md:text-xl font-bold text-white italic">
                  "{caseItem.quote}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Big Numbers Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-12 bg-gradient-to-r from-[var(--neon-red)]/10 via-[var(--neon-yellow)]/10 to-[var(--neon-purple)]/10 rounded-2xl border-4 border-[var(--neon-yellow)]"
          style={{ boxShadow: 'var(--glow-yellow)' }}
        >
          <h3 className="text-center text-3xl md:text-4xl font-black text-white mb-12">
            全導入企業の<span className="neon-text-yellow">平均データ</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-7xl md:text-8xl font-black neon-text-red mb-2">
                +280%
              </div>
              <div className="text-xl md:text-2xl font-bold text-white">
                売上増加率
              </div>
            </div>
            <div className="text-center">
              <div className="text-7xl md:text-8xl font-black neon-text-yellow mb-2">
                3.2ヶ月
              </div>
              <div className="text-xl md:text-2xl font-bold text-white">
                投資回収期間
              </div>
            </div>
            <div className="text-center">
              <div className="text-7xl md:text-8xl font-black neon-text-purple mb-2">
                100%
              </div>
              <div className="text-xl md:text-2xl font-bold text-white">
                顧客満足度
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 bg-[var(--neon-yellow)] text-black font-black text-2xl rounded-xl"
              style={{ boxShadow: 'var(--glow-yellow)' }}
            >
              もっと事例を見る
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
