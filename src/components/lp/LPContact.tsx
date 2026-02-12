import React, { useState } from 'react';
import { Send, Phone, Mail } from 'lucide-react';

export function LPContact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    useCase: '',
    size: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('お問い合わせありがとうございます。担当者より1営業日以内にご連絡いたします。');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-12 sm:py-16 px-4 bg-black">
      <div className="container mx-auto max-w-4xl">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-yellow-400 bg-clip-text text-transparent">
              お問い合わせ
            </span>
          </h2>
          <div className="h-1 w-20 mx-auto bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-yellow-500 rounded-full mb-4"></div>
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto">
            お見積もり・ご相談は無料。お気軽にどうぞ。
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 sm:mb-10">
          <div className="bg-gradient-to-br from-white to-zinc-50 rounded-lg p-5 sm:p-6 text-center border-2 border-white shadow-lg">
            <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600 mb-3">
              <Phone size={24} className="text-white" strokeWidth={2} />
            </div>
            <div className="text-sm font-bold text-zinc-600 mb-1">電話</div>
            <div className="text-xl sm:text-2xl font-black text-cyan-700">050-3593-7599</div>
            <div className="text-xs text-zinc-500 mt-1">9:00～18:00（平日）</div>
          </div>

          <div className="bg-gradient-to-br from-white to-zinc-50 rounded-lg p-5 sm:p-6 text-center border-2 border-white shadow-lg">
            <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-fuchsia-500 to-fuchsia-600 mb-3">
              <Mail size={24} className="text-white" strokeWidth={2} />
            </div>
            <div className="text-sm font-bold text-zinc-600 mb-1">メール</div>
            <div className="text-lg sm:text-xl font-black text-fuchsia-700 break-all">info@led-vision.co.jp</div>
            <div className="text-xs text-zinc-500 mt-1">24時間受付</div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gradient-to-br from-white to-zinc-50 rounded-xl p-6 sm:p-8 border-2 border-white shadow-xl">
          <h3 className="text-2xl font-black text-zinc-900 mb-6 text-center">
            お問い合わせフォーム
          </h3>
          
          <form name="lp-contact" method="POST" data-netlify="true" anetlify-honeypot="bot-field" className="space-y-5" action="/thanks.html">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-zinc-700 mb-2">
                  お名前 <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border-2 border-zinc-300 rounded-lg text-zinc-900 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 focus:outline-none transition-all"
                  placeholder="山田 太郎"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-bold text-zinc-700 mb-2">
                  会社名・店舗名
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border-2 border-zinc-300 rounded-lg text-zinc-900 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 focus:outline-none transition-all"
                  placeholder="株式会社〇〇"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-zinc-700 mb-2">
                  メールアドレス <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border-2 border-zinc-300 rounded-lg text-zinc-900 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 focus:outline-none transition-all"
                  placeholder="example@mail.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-zinc-700 mb-2">
                  電話番号
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border-2 border-zinc-300 rounded-lg text-zinc-900 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 focus:outline-none transition-all"
                  placeholder="090-1234-5678"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label htmlFor="useCase" className="block text-sm font-bold text-zinc-700 mb-2">
                  用途
                </label>
                <select
                  id="useCase"
                  name="useCase"
                  value={formData.useCase}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border-2 border-zinc-300 rounded-lg text-zinc-900 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 focus:outline-none transition-all"
                >
                  <option value="">選択してください</option>
                  <option value="store">店舗内サイネージ</option>
                  <option value="office">受付・待合</option>
                  <option value="exhibition">展示会ブース</option>
                  <option value="conference">会議室</option>
                  <option value="showroom">ショールーム</option>
                  <option value="event">イベント室内</option>
                  <option value="other">その他</option>
                </select>
              </div>

              <div>
                <label htmlFor="size" className="block text-sm font-bold text-zinc-700 mb-2">
                  希望サイズ
                </label>
                <select
                  id="size"
                  name="size"
                  value={formData.size}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border-2 border-zinc-300 rounded-lg text-zinc-900 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 focus:outline-none transition-all"
                >
                  <option value="">選択してください</option>
                  <option value="120">120インチ（69.8万円）</option>
                  <option value="150">150インチ（120万円）</option>
                  <option value="180">180インチ（180万円）</option>
                  <option value="custom">カスタムサイズ希望</option>
                  <option value="consult">相談したい</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-bold text-zinc-700 mb-2">
                ご質問・ご要望
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-white border-2 border-zinc-300 rounded-lg text-zinc-900 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 focus:outline-none transition-all resize-none"
                placeholder="設置場所、予算感、納期など、お気軽にご記入ください"
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-yellow-500 text-white rounded-lg font-black text-lg hover:shadow-xl hover:shadow-fuchsia-500/40 transition-all flex items-center justify-center gap-2"
            >
              送信する
              <Send size={20} />
            </button>
          </form>

          <p className="text-xs text-zinc-500 text-center mt-5">
            ※ お預かりした個人情報は、お問い合わせ対応のみに使用し、適切に管理いたします。
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto max-w-4xl mt-12 sm:mt-16 pt-8 border-t border-white/10">
        <div className="text-center text-sm text-zinc-600">
          <p>&copy; 2026 LED VISION. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}