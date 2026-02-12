import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function Thanks() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-black/40 border border-white/10 rounded-2xl p-8 text-center">
        <div className="text-6xl mb-6">✓</div>
        <h1 className="text-3xl font-bold mb-4">送信完了しました</h1>
        <p className="text-white/70 mb-6">
          お問い合わせありがとうございます。<br />
          内容を確認の上、担当者よりご連絡いたします。
        </p>
        <a href="/"
          className="inline-block px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-bold hover:bg-white/20 transition-all"
        >
          トップへ戻る
        </a>
        <p className="text-xs text-white/50 mt-4">
          5秒後に自動的にトップページへ移動します
        </p>
      </div>
    </div>
  );
}