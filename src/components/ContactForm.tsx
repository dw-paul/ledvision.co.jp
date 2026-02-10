import React from 'react';

interface ContactFormProps {
  formName?: string;
}

export function ContactForm({ formName = 'contact' }: ContactFormProps) {
  return (
    <form
      name={formName}
      method="POST"
      data-netlify="true"
      action="/thanks.html"
      className="space-y-4"
    >
      <input type="hidden" name="form-name" value={formName} />

      <div>
        <label className="block text-sm font-bold mb-2">お名前</label>
        <input
          type="text"
          name="name"
          required
          className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40"
          placeholder="山田 太郎"
        />
      </div>

      <div>
        <label className="block text-sm font-bold mb-2">メールアドレス</label>
        <input
          type="email"
          name="email"
          required
          className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40"
          placeholder="example@mail.com"
        />
      </div>

      <div>
        <label className="block text-sm font-bold mb-2">内容</label>
        <textarea
          name="message"
          required
          rows={4}
          className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white resize-none placeholder-white/40"
          placeholder="お気軽にご記入ください"
        />
      </div>

      <button
        type="submit"
        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl font-bold hover:bg-white/20 transition-colors"
      >
        送信
      </button>
    </form>
  );
}
