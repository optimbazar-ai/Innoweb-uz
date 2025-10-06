import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biz Haqimizda - Innoweb.uz",
  description: "Innoweb.uz - zamonaviy veb yechimlari va biznes avtomatlashtiruvi sohasida faoliyat yurituvchi professional jamoa. Bizning maqsadimiz va qadriyatlarimiz.",
  keywords: "biz haqimizda, innoweb, jamoa, kompaniya tarixi, maqsad, mission",
};

export default function AboutPage() {
  const team = [
    {
      name: "Akbarjon Abdusamatov",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      description: "Web development va biznes avtomatlashtirish sohasida tajribali mutaxassis",
    },
    {
      name: "Senior Developer",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      description: "Full-stack developer, React va Python mutaxassisi",
    },
    {
      name: "UI/UX Designer",
      role: "Designer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      description: "Zamonaviy va user-friendly dizaynlar yaratish",
    },
    {
      name: "Backend Developer",
      role: "Backend Specialist",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      description: "API development va database architecture",
    },
  ];

  const stats = [
    { number: "20+", label: "Muvaffaqiyatli Loyihalar" },
    { number: "15+", label: "Baxtli Mijozlar" },
    { number: "2+", label: "Yillik Tajriba" },
    { number: "4", label: "Jamoa A'zolari" },
  ];

  const values = [
    {
      icon: "🎯",
      title: "Sifat",
      description: "Har bir loyihada yuqori sifat va professional yondashuv",
    },
    {
      icon: "⚡",
      title: "Tezkorlik",
      description: "Loyihalarni belgilangan muddatlarda topshirish",
    },
    {
      icon: "🤝",
      title: "Hamkorlik",
      description: "Mijozlar bilan yaqin hamkorlik va fikr-mulohazalarni e'tiborga olish",
    },
    {
      icon: "💡",
      title: "Innovatsiya",
      description: "Zamonaviy texnologiyalar va eng yaxshi amaliyotlarni qo'llash",
    },
  ];

  return (
    <div className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Biz Haqimizda
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Innoweb.uz - bu zamonaviy veb yechimlari, Telegram botlar va biznes 
            jarayonlarini avtomatlashtirishga ixtisoslashgan professional jamoa. 
            Biz mijozlarimizning biznesini raqamlashtirish va rivojlantirishga yordam beramiz.
          </p>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </section>

        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-8 rounded-2xl border border-blue-200 dark:border-blue-800">
            <div className="text-4xl mb-4">🎯</div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Bizning Maqsadimiz</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              O'zbekiston bizneslarini zamonaviy texnologiyalar bilan ta'minlash va 
              ularning raqamli transformatsiyasiga hissa qo'shish. Har bir mijoz uchun 
              individual yechimlar ishlab chiqish va ularning muvaffaqiyatiga erishishda 
              ishonchli hamkor bo'lish.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-8 rounded-2xl border border-purple-200 dark:border-purple-800">
            <div className="text-4xl mb-4">🚀</div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Bizning Qadriyatlarimiz</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Biz sifat, tezkorlik va innovatsiyaga e'tibor qaratamiz. Mijozlarimiz bilan 
              ochiq va halol munosabatda bo'lamiz. Doimiy o'sish va rivojlanishga 
              intilamiz. Jamoa a'zolarimizning professional o'sishini qo'llab-quvvatlaymiz.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Bizning Qadriyatlarimiz
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 p-6 rounded-xl hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-lg dark:hover:shadow-gray-700/50 transition-all text-center"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Bizning Jamoa
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Professional va tajribali mutaxassislar jamoasi sizning loyihalaringizni 
            yuqori sifatda amalga oshiradi
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:shadow-xl dark:hover:shadow-gray-700/50 transition-all group"
              >
                <div className="relative h-64 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">{member.role}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Nega Aynan Bizni Tanlash Kerak?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Professional Yondashuv
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Har bir loyihaga professional va individual yondashuvda bo'lamiz
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🛠️</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Zamonaviy Texnologiyalar
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Eng so'nggi texnologiyalar va amaliyotlardan foydalanamiz
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                24/7 Qo'llab-quvvatlash
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Loyiha yakunlangandan keyin ham to'liq qo'llab-quvvatlash
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Keling, Birgalikda Ishlaylik!
          </h2>
          <p className="text-xl mb-8 text-blue-50">
            Sizning loyihangizni hayotga tatbiq etishda yordam beramiz
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white dark:bg-white text-blue-600 dark:text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors font-semibold inline-block"
            >
              Biz Bilan Bog'lanish
            </Link>
            <Link
              href="/portfolio"
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 dark:hover:bg-white/20 transition-colors font-semibold inline-block"
            >
              Bizning Ishlarimiz
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
