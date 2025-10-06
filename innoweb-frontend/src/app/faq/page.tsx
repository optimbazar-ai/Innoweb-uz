'use client';

import { useState } from 'react';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const faqs: FAQItem[] = [
    {
      category: 'general',
      question: 'Innoweb.uz qanday xizmatlar taqdim etadi?',
      answer: 'Biz zamonaviy veb-saytlar, Telegram botlar, mobil ilovalar yaratish va biznes jarayonlarini avtomatlashtirish xizmatlarini taqdim etamiz. Har bir loyihaga individual yondashuvda bo\'lamiz.',
    },
    {
      category: 'general',
      question: 'Loyihani yaratish qancha vaqt oladi?',
      answer: 'Loyihaning murakkabligiga qarab, oddiy veb-sayt 1-2 hafta, murakkab loyihalar esa 1-3 oy ichida tayyorlanadi. Aniq muddatlar shartnomada ko\'rsatiladi.',
    },
    {
      category: 'pricing',
      question: 'Xizmatlar narxi qancha?',
      answer: 'Narxlar loyihaning murakkabligiga bog\'liq. Oddiy landing page 500$ dan, korporativ veb-sayt 1500$ dan, Telegram bot 300$ dan boshlanadi. Aniq narx uchun biz bilan bog\'laning.',
    },
    {
      category: 'pricing',
      question: 'To\'lovni qanday amalga oshirish mumkin?',
      answer: 'Biz naqd pul, bank o\'tkazmasi va onlayn to\'lov tizimlarini qabul qilamiz. Odatda to\'lov ikki qismga bo\'linadi: 50% avans, 50% loyiha yakunida.',
    },
    {
      category: 'process',
      question: 'Loyiha qanday bosqichlardan iborat?',
      answer: '1) Talablarni yig\'ish va tahlil qilish, 2) Dizayn yaratish, 3) Dasturlash, 4) Test qilish, 5) Deploy va ishga tushirish, 6) Qo\'llab-quvvatlash. Har bir bosqichda mijoz bilan kelishib boramiz.',
    },
    {
      category: 'process',
      question: 'Loyihani qanday nazorat qilishim mumkin?',
      answer: 'Har bir bosqich yakunida sizga demo ko\'rsatamiz. GitHub/Trello orqali ish jarayonini kuzatib borish mumkin. Haftalik hisobotlar beramiz.',
    },
    {
      category: 'support',
      question: 'Loyiha yakunlangandan keyin qo\'llab-quvvatlash bormi?',
      answer: 'Ha, biz barcha loyihalarga 3 oylik bepul texnik qo\'llab-quvvatlash taqdim etamiz. Keyinchalik oylik yoki yillik qo\'llab-quvvatlash paketlarini tanlay olasiz.',
    },
    {
      category: 'support',
      question: 'Saytimga o\'zim o\'zgartirish kiritishim mumkinmi?',
      answer: 'Ha, biz admin paneli bilan sayt yaratamiz. Siz o\'zingiz kontent qo\'shish, tahrirlash va o\'chirish imkoniyatiga ega bo\'lasiz. Kerak bo\'lganda trening ham beramiz.',
    },
    {
      category: 'tech',
      question: 'Qanday texnologiyalardan foydalanasiz?',
      answer: 'Biz zamonaviy texnologiyalardan foydalanamiz: React, Next.js, Python, FastAPI, PostgreSQL, MongoDB, Docker va boshqalar. Har bir loyiha uchun eng mos texnologiyani tanlaymiz.',
    },
    {
      category: 'tech',
      question: 'Sayt SEO optimizatsiya qilinganmi?',
      answer: 'Ha, barcha saytlarimiz SEO standartlariga muvofiq yaratiladi: meta taglar, sitemap, robots.txt, semantic HTML, optimized images va boshqalar.',
    },
  ];

  const categories = [
    { id: 'all', name: 'Hammasi', icon: '📋' },
    { id: 'general', name: 'Umumiy', icon: '❓' },
    { id: 'pricing', name: 'Narxlar', icon: '💰' },
    { id: 'process', name: 'Jarayon', icon: '⚙️' },
    { id: 'support', name: 'Qo\'llab-quvvatlash', icon: '🛟' },
    { id: 'tech', name: 'Texnologiyalar', icon: '💻' },
  ];

  const filteredFaqs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Ko'p Beriladigan Savollar
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Mijozlarimiz tez-tez beriladigan savollar va ularga javoblar. 
            Javobni topa olmadingizmi? Biz bilan bog'laning!
          </p>
        </header>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setOpenIndex(null);
              }}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-blue-600 dark:bg-blue-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <span className="mr-2">{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:border-blue-300 dark:hover:border-blue-500 transition-colors"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <span className="font-semibold text-gray-900 dark:text-white pr-8">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform flex-shrink-0 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8 border border-blue-200 dark:border-blue-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            Javobni topa olmadingizmi?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Biz sizning barcha savollaringizga javob berishga tayyormiz!
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 dark:bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors font-semibold"
          >
            Biz Bilan Bog'laning
          </Link>
        </div>
      </div>
    </div>
  );
}
