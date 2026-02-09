import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Send } from 'lucide-react';

export function FinalCTA() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('お問い合わせありがとうございます。担当者より折り返しご連絡いたします。');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="cta" className="relative py-20 sm:py-32 px-4">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black opacity-80"></div>

      <div className="relative container mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-yellow-400 bg-clip-text text-transparent">
              お問い合わせ
            </span>
          </h2>
          <div className="h-1 w-24 sm:w-32 mx-auto bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-yellow-500 rounded-full mb-8"></div>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto">
            LEDビジョンのことなら、何でもお気軽にご相談ください。<br className="hidden sm:inline" />
            専門スタッフが最適なプランをご提案いたします。
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 sm:mb-16">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center hover:border-cyan-500 transition-all">
            <div className="inline-flex p-4 rounded-lg bg-cyan-500/10 mb-4">
              <Phone size={28} className="text-cyan-400" strokeWidth={2} />
            </div>
            <div className="text-sm font-bold text-zinc-400 mb-2">電話でのお問い合わせ</div>
            <div className="text-xl font-black text-white">0120-XXX-XXX</div>
            <div className="text-xs text-zinc-500 mt-2">受付時間：9:00～21:00</div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center hover:border-fuchsia-500 transition-all">
            <div className="inline-flex p-4 rounded-lg bg-fuchsia-500/10 mb-4">
              <Mail size={28} className="text-fuchsia-400" strokeWidth={2} />
            </div>
            <div className="text-sm font-bold text-zinc-400 mb-2">メールでのお問い合わせ</div>
            <div className="text-lg font-black text-white break-all">info@led-vision.co.jp</div>
            <div className="text-xs text-zinc-500 mt-2">24時間受付</div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center hover:border-yellow-500 transition-all">
            <div className="inline-flex p-4 rounded-lg bg-yellow-500/10 mb-4">
              <MessageSquare size={28} className="text-yellow-400" strokeWidth={2} />
            </div>
            <div className="text-sm font-bold text-zinc-400 mb-2">LINEでのお問い合わせ</div>
            <div className="text-lg font-black text-white">@led-vision</div>
            <div className="text-xs text-zinc-500 mt-2">友だち追加で簡単相談</div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 sm:p-10">
          <h3 className="text-2xl sm:text-3xl font-black mb-8 text-center text-white">
            お問い合わせフォーム
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-zinc-300 mb-2">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="山田 太郎"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-bold text-zinc-300 mb-2">
                  会社名・店舗名
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="株式会社〇〇"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-zinc-300 mb-2">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="example@mail.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-zinc-300 mb-2">
                  電話番号
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="090-1234-5678"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-bold text-zinc-300 mb-2">
                お問い合わせ内容 <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                placeholder="導入を検討している施設の種類、設置場所、予算感など、お気軽にご記入ください"
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-yellow-500 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-3"
            >
              送信する
              <Send size={20} />
            </button>
          </form>

          <p className="text-xs text-zinc-500 text-center mt-6">
            ※ お預かりした個人情報は、お問い合わせ対応のみに使用し、適切に管理いたします。
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="relative container mx-auto max-w-5xl mt-16 sm:mt-20 pt-8 border-t border-zinc-800">
        <div className="text-center text-sm text-zinc-500">
          <p>&copy; 2026 LED VISION. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
