import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function LPFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'この価格は本当ですか？追加費用はありませんか？',
      answer: '表示価格は税別の製品価格です。設置工事や配送は別途お見積もりとなりますが、事前に明確にご提示いたします。隠れた追加費用は一切ございません。'
    },
    {
      question: 'カスタムサイズは対応していますか？',
      answer: 'はい、対応可能です。設置場所の寸法や用途に応じて最適なサイズをご提案いたします。まずはお気軽にご相談ください。'
    },
    {
      question: '1か月オンラインサポートの内容は？',
      answer: '納品後1か月間、オンライン（メール・電話・リモート接続）にて初期設定・コンテンツ設定・トラブル切り分けなどをサポートいたします。'
    },
    {
      question: '納期はどのくらいですか？',
      answer: '在庫状況により異なりますが、最短3日で納品可能です。カスタムサイズの場合は10日〜2週間程度を目安にしております。'
    },
    {
      question: '他社と比較したいのですが？',
      answer: '大歓迎です。相見積もりを推奨しております。比較していただければ、この価格とサポート体制の価値を実感いただけると自負しております。'
    }
  ];

  return (
    <section className="py-10 sm:py-14 px-4 bg-black border-b border-white/10">
      <div className="container mx-auto max-w-4xl">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-yellow-400 bg-clip-text text-transparent">
              よくある質問
            </span>
          </h2>
          <div className="h-1 w-20 mx-auto bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-yellow-500 rounded-full"></div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-white to-zinc-50 rounded-lg overflow-hidden border-2 border-white shadow-lg"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-5 sm:px-6 py-4 flex items-center justify-between text-left hover:bg-zinc-100 transition-colors"
              >
                <span className="font-black text-base sm:text-lg text-zinc-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown 
                  size={24} 
                  className={`flex-shrink-0 text-zinc-600 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 sm:px-6 pb-4">
                  <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}