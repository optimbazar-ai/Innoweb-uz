import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Xizmatlar - Innoweb.uz",
  description: "Veb-saytlar yaratish, Telegram botlar, biznesni avtomatlashtirish va AI integratsiyasi xizmatlari. Professional web development yechimlari.",
  keywords: "xizmatlar, veb sayt yaratish, telegram bot, biznes avtomatlashtirish, AI integratsiyasi, web development",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Veb-saytlar Yaratish",
      description: "Biznesingiz uchun zamonaviy, tezkor va mobil qurilmalarga moslashuvchan veb-saytlar yaratamiz.",
      icon: "🌐",
      features: [
        "Responsive dizayn",
        "SEO optimizatsiya",
        "Tez yuklanish",
        "Admin panel"
      ]
    },
    {
      title: "Telegram Botlar",
      description: "Mijozlar bilan aloqani avtomatlashtirish, sotuvlarni oshirish uchun aqlli Telegram botlar.",
      icon: "🤖",
      features: [
        "Avtomatik javoblar",
        "Buyurtma qabul",
        "To'lov integratsiyasi",
        "Statistika"
      ]
    },
    {
      title: "Biznesni Avtomatlashtirish",
      description: "CRM, ERP va boshqa tizimlar yordamida biznes jarayonlaringizni to'liq avtomatlashtiramiz.",
      icon: "⚙️",
      features: [
        "CRM tizimlar",
        "Inventarizatsiya",
        "Hisobot generatsiyasi",
        "API integratsiya"
      ]
    },
    {
      title: "AI Integratsiyasi",
      description: "Mahsulotlaringizga sun'iy intellekt yechimlarini integratsiya qilib, raqobatbardoshlikni oshiramiz.",
      icon: "🧠",
      features: [
        "Chatbot AI",
        "Tavsiya tizimlari",
        "Matn tahlili",
        "Prognozlash"
      ]
    },
  ];

  return (
    <div className="py-12 px-4">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Bizning Xizmatlarimiz
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Biznesingizni raqamlashtirish va rivojlantirish uchun professional yechimlar
        </p>
      </header>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-xl dark:hover:shadow-gray-700/50 transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-500"
          >
            <div className="pb-4">
              <div className="flex items-center gap-4 text-2xl font-bold text-gray-900 dark:text-white mb-3">
                <span className="text-5xl">{service.icon}</span>
                {service.title}
              </div>
            </div>
            <div>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 max-w-4xl mx-auto text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-4">
            Loyihangizni boshlashga tayyormisiz?
          </h2>
          <p className="text-lg mb-6 text-blue-50">
            Bepul konsultatsiya oling va loyihangiz uchun eng yaxshi yechimni toping
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            Bog'lanish
          </a>
        </div>
      </div>
    </div>
  );
}
