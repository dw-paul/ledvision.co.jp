import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { ContactForm } from '../ContactForm';

export function LPContact() {
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
        <div className="bg-black/40 border border-white/10 rounded-2xl p-6 sm:p-8">
          <h3 className="text-2xl font-black text-white mb-6 text-center">
            お問い合わせフォーム
          </h3>
          <ContactForm formName="lp-contact" />
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
