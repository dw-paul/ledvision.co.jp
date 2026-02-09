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

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">LED VISION</h1>
        <div className="text-xl mb-8">Coming Soon</div>
        
        <div className="mb-6">
          <p className="text-zinc-400 mb-2">Contact: {EMAIL}</p>
          <button
            onClick={handleCopyEmail}
            className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded transition"
          >
            {copied ? 'コピーしました' : 'メールをコピー'}
          </button>
        </div>

        <div className="text-sm text-zinc-600">
          © {new Date().getFullYear()} LED Vision
        </div>
      </div>
    </div>
  );
}