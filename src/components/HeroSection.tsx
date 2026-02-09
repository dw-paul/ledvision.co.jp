import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Zap, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1671628122094-519c919e0b8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMRUQlMjBiaWxsYm9hcmQlMjBuaWdodHxlbnwxfHx8fDE3Njg4MDI5MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="LED Vision"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--neon-red)]/20 via-transparent to-[var(--neon-purple)]/20" />
      </div>

      {/* Animated Grid */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(var(--neon-blue) 1px, transparent 1px), linear-gradient(90deg, var(--neon-blue) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          animation: 'pulse-glow 3s infinite'
        }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-[var(--neon-red)]/20 border-2 border-[var(--neon-red)] px-6 py-3 rounded-full mb-8"
            style={{ boxShadow: 'var(--glow-red)' }}
          >
            <Sparkles className="w-5 h-5 text-[var(--neon-yellow)]" />
            <span className="font-black text-xl text-[var(--neon-yellow)]">業界最安値保証</span>
            <TrendingUp className="w-5 h-5 text-[var(--neon-yellow)]" />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
            className="mb-6"
          >
            <span className="block neon-text-red" style={{ WebkitTextStroke: '3px var(--neon-red)' }}>
              光らせろ、
            </span>
            <span className="block neon-text-yellow mt-2" style={{ WebkitTextStroke: '3px var(--neon-yellow)' }}>
              売り場を。
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-4"
          >
            <h2 className="neon-text-blue tracking-wider">
              視線を奪うLEDビジョン
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-xl md:text-3xl font-bold text-white mb-12 leading-relaxed"
            style={{ textShadow: '0 0 10px rgba(255,255,255,0.5)' }}
          >
            <span className="text-[var(--neon-yellow)]">デカい。光る。売れる。</span><br />
            <span className="text-[var(--neon-purple)]">あなたの店舗が変わる瞬間。</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-12 py-6 bg-[var(--neon-red)] text-white font-black text-2xl rounded-lg overflow-hidden btn-glow"
              style={{ boxShadow: 'var(--glow-red)' }}
            >
              <span className="relative z-10 flex items-center gap-3">
                今すぐ問い合わせ
                <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--neon-red)] via-[var(--neon-yellow)] to-[var(--neon-red)] opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundSize: '200% 100%', animation: 'rotate-gradient 3s linear infinite' }} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 border-4 border-[var(--neon-yellow)] text-[var(--neon-yellow)] font-black text-2xl rounded-lg btn-glow bg-black/50"
              style={{ boxShadow: 'var(--glow-yellow)' }}
            >
              資料請求
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto"
          >
            {[
              { num: '10,000+', label: '導入実績', icon: Zap, color: 'red' },
              { num: '98%', label: '満足度', icon: Sparkles, color: 'yellow' },
              { num: '365日', label: 'サポート', icon: TrendingUp, color: 'purple' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, rotate: 2 }}
                className={`relative p-4 md:p-6 bg-black/70 border-3 rounded-lg neon-border-${stat.color}`}
              >
                <stat.icon className={`w-8 h-8 md:w-12 md:h-12 mx-auto mb-2 text-[var(--neon-${stat.color})]`} />
                <div className={`text-3xl md:text-5xl font-black neon-text-${stat.color} mb-1`}>
                  {stat.num}
                </div>
                <div className="text-sm md:text-lg font-bold text-white">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-1 h-20 bg-gradient-to-b from-[var(--neon-red)] via-[var(--neon-yellow)] to-[var(--neon-purple)]"
          style={{ boxShadow: '0 0 20px var(--neon-yellow)' }}
        />
      </motion.div>
    </section>
  );
}
