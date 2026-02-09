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
    const element = document.getElementById('formPanel');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-4xl space-y-4">
          <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <b className="text-lg">LED VISION</b>
                <p className="text-xs text-white/70">LED施工・レンタル・販売</p>
              </div>
              <div className="text-xs text-white/70">近日公開</div>
            </div>

            <div className="py-12 flex justify-center">
              <img src="/ledvisionlogo.png" alt="LED Vision" className="w-full max-w-md" />
            </div>

            <p className="text-white/70 text-sm mb-6">
              LEDビジョンの施工・レンタル・販売を行っています。
            </p>

            <div className="flex gap-3 flex-wrap">
              <button onClick={scrollToForm} className="px-4 py-2 bg-white/10 border border-white/20 rounded-xl font-bold text-sm">
                お問い合わせ
              </button>
              <button onClick={handleCopyEmail} className="px-4 py-2 bg-white/10 border border-white/20 rounded-xl font-bold text-sm">
                {copied ? 'コピーしました' : 'メールをコピー'}
              </button>
              <a href="/lp" className="px-4 py-2 bg-white/10 border border-white/20 rounded-xl font-bold text-sm">
                LPを見る
              </a>
            </div>
          </div>

          <div id="formPanel" className="bg-black/40 border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-4">お問い合わせ</h2>
            
            <form name="contact" method="POST" data-netlify="true" action="/thanks.html" className="space-y-4">
              <input type="hidden" name="form-name" value="contact" />

              <div>
                <label className="block text-sm font-bold mb-2">お名前</label>
                <input type="text" name="name" required className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white" />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">メールアドレス</label>
                <input type="email" name="email" required className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white" />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">内容</label>
                <textarea name="message" required rows={4} className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white resize-none"></textarea>
              </div>

              <button type="submit" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl font-bold">
                送信
              </button>
            </form>
          </div>
        </div>
      </div>

      <footer className="fixed bottom-0 left-0 right-0 p-3 flex justify-between text-white/60 text-xs">
        <span>© {new Date().getFullYear()} LED Vision</span>
        <span>Contact: {EMAIL}</span>
      </footer>
    </div>
  );
}