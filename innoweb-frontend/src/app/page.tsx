import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { getAllPortfolio } from "@/app/lib/api";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Innoweb.uz - Zamonaviy Web va Telegram Bot Yechimlari",
  description: "Professional veb-saytlar, Telegram botlar va biznes jarayonlarini avtomatlashtirish xizmatlari. FastAPI, Next.js, React texnologiyalari.",
  keywords: "web sayt yaratish, telegram bot, biznes avtomatlashtirish, FastAPI, Next.js, React, innoweb",
  openGraph: {
    title: "Innoweb.uz - Zamonaviy Web Yechimlari",
    description: "Professional veb-saytlar va Telegram botlar yaratish xizmatlari",
    type: "website",
  },
};

export default async function Home() {
  // Portfolio loyihalarini olish (featured yoki eng oxirgi 3 ta)
  const allPortfolios = await getAllPortfolio().catch(() => []);
  const featuredPortfolios = allPortfolios
    .filter((p) => p.featured)
    .slice(0, 3);
  const portfoliosToShow = featuredPortfolios.length > 0 
    ? featuredPortfolios 
    : allPortfolios.slice(0, 3);

  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Innoweb.uz
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Zamonaviy veb-saytlar, Telegram botlar va biznes jarayonlarini avtomatlashtirish xizmatlari
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-blue-600 dark:bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors font-medium"
          >
            Bepul Konsultatsiya
          </Link>
          <Link
            href="/services"
            className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 px-8 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium"
          >
            Xizmatlarimiz
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <section className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="text-center p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg dark:hover:shadow-gray-700/50 transition-shadow bg-white dark:bg-gray-800">
          <div className="text-4xl mb-4">🌐</div>
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Veb-saytlar</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Zamonaviy va responsive veb-saytlar yaratamiz
          </p>
        </div>
        
        <div className="text-center p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg dark:hover:shadow-gray-700/50 transition-shadow bg-white dark:bg-gray-800">
          <div className="text-4xl mb-4">🤖</div>
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Telegram Botlar</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Biznesingiz uchun maxsus Telegram botlar
          </p>
        </div>
        
        <div className="text-center p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg dark:hover:shadow-gray-700/50 transition-shadow bg-white dark:bg-gray-800">
          <div className="text-4xl mb-4">⚡</div>
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Avtomatlashtirish</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Biznes jarayonlarini avtomatlashtirish
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      {portfoliosToShow.length > 0 && (
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Bizning Ishlarimiz
            </h2>
            <Link
              href="/portfolio"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
            >
              Barchasini ko'rish →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {portfoliosToShow.map((portfolio) => (
              <div
                key={portfolio.id}
                className="group border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-xl dark:hover:shadow-gray-700/50 transition-all bg-white dark:bg-gray-800"
              >
                <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
                  <Image
                    src={portfolio.imageUrl}
                    alt={portfolio.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {portfolio.featured && (
                    <span className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-semibold">
                      ⭐ Featured
                    </span>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">
                      {portfolio.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {portfolio.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {portfolio.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {portfolio.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {portfolio.technologies.length > 3 && (
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        +{portfolio.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-3">
                    {portfolio.liveUrl && (
                      <a
                        href={portfolio.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                      >
                        Demo →
                      </a>
                    )}
                    {portfolio.githubUrl && (
                      <a
                        href={portfolio.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 font-medium"
                      >
                        GitHub →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 text-center mt-16 border border-gray-200 dark:border-gray-700">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Loyihangizni muhokama qilaylikmi?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Bepul konsultatsiya oling va loyihangiz uchun eng yaxshi yechimni toping
        </p>
        <Link
          href="/contact"
          className="bg-blue-600 dark:bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors font-medium inline-block"
        >
          Bog'lanish
        </Link>
      </section>
    </div>
  );
}
