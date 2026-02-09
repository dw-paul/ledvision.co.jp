import React, { useState } from 'react';

export function ComingSoon() {
  const EMAIL = "info@ledvision.co.jp";
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch (e) {
      alert('コピーに失敗しました');
    }
  };

  const scrollToForm = () => {
    document.getElementById('formPanel')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="relative min-h-screen bg-[#0B0E14] text-white overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/60"></div>
      <div className="absolute inset-0"></div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-[860px] space-y-4">
          <div className="bg-black/35 border border-white/12 rounded-[18px] p-6">
            <div className="flex items-center justify-between gap-4 flex-wrap mb-4">
              <div className="flex flex-col gap-1">
                <b className="text-[15px] tracking-wider">LED VISION</b>
                <span className="text-xs text-white/72">LED施工・レンタル・販売</span>
              </div>
              <div className="text-xs text-white/72">近日公開</div>
            </div>

            <div className="flex items-center justify-center py-12">
              <img src="/ledvisionlogo.png" alt="LED Vision Logo" className="w-full max-w-md" />
            </div>

            <p className="text-white/72 text-sm leading-relaxed mb-6">
              LEDビジョンの施工・レンタル・販売を行っています。
              <br />
              高品質な映像表現で、あなたのビジネスをサポートします。
            </p>

            <div className="flex flex-wrap gap-3 items-center">
              <button
                onClick={scrollToForm}
                className="px-4 py-2.5 bg-white/14 border border-white/22 rounded-xl font-bold text-sm transition-all"
              >
                お問い合わせ
              </button>
              <button
                onClick={handleCopyEmail}
                className="px-4 py-2.5 bg-white/6 border border-white/12 rounded-xl font-bold text-sm transition-all"
              >
                {copied ? 'コピーしました' : 'メールをコピー'}
              </button>
              
                href="/lp"
                className="px-4 py-2.5 bg-white/14 border border-white/22 rounded-xl font-bold text-sm transition-all"
              >
                LPを見る
              </a>
            </div>
          </div>

          <div id="formPanel" className="bg-black/35 border border-white/12 rounded-[18px] p-6">
            <h2 className="text-xl font-bold mb-4">お問い合わせ</h2>
            
            <form name="contact" method="POST" data-netlify="true" action="/thanks.html" className="space-y-4">
              <input type="hidden" name="form-name" value="contact" />

              <div>
                <label className="block text-sm font-bold mb-2">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-white/6 border border-white/12 rounded-xl text-white focus:outline-none"
                  placeholder="山田 太郎"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white/6 border border-white/12 rounded-xl text-white focus:outline-none"
                  placeholder="example@mail.com"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">
                  内容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white/6 border border-white/12 rounded-xl text-white focus:outline-none resize-none"
                  placeholder="例：設置場所、サイズ、希望時期、予算など"
                />
              </div>

              <button
                type="submit"
                className="w-full px-4 py-3 bg-white/14 border border-white/22 rounded-xl font-bold transition-all"
              >
                送信
              </button>
              
              <div className="text-xs text-white/60 text-center">
                送信内容は管理画面に保存されます
              </div>
            </form>
          </div>
        </div>
      </div>

      <footer className="fixed bottom-0 left-0 right-0 p-3 flex justify-between text-white/60 text-xs z-20">
        <span>© {new Date().getFullYear()} LED Vision</span>
        <span>Contact: {EMAIL}</span>
      </footer>
    </div>
  );
}