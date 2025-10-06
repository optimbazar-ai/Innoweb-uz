import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { getAllPortfolio } from "@/app/lib/api";

export const metadata: Metadata = {
  title: "Portfolio - Innoweb.uz",
  description: "Bizning bajargan loyihalarimiz: veb-saytlar, Telegram botlar, mobil ilovalar va biznes avtomatlashtirish yechimlari.",
  keywords: "portfolio, loyihalar, veb saytlar, telegram botlar, mobil ilovalar, innoweb",
};

export default async function PortfolioPage() {
  const portfolios = await getAllPortfolio().catch(() => []);

  // Kategoriyalar bo'yicha filter
  const categories = [
    { id: "all", name: "Hammasi", count: portfolios.length },
    { id: "web", name: "Veb Saytlar", count: portfolios.filter(p => p.category === "web").length },
    { id: "bot", name: "Telegram Botlar", count: portfolios.filter(p => p.category === "bot").length },
    { id: "mobile", name: "Mobil Ilovalar", count: portfolios.filter(p => p.category === "mobile").length },
    { id: "desktop", name: "Desktop", count: portfolios.filter(p => p.category === "desktop").length },
  ].filter(cat => cat.count > 0);

  if (portfolios.length === 0) {
    return (
      <div className="py-12 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Bizning Ishlarimiz</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Hozirda portfolio loyihalari yuklanmoqda. Tez orada bu yerda eng yaxshi loyihalarimizni ko'rishingiz mumkin bo'ladi!
        </p>
      </div>
    );
  }

  return (
    <div className="py-12 px-4">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Bizning Ishlarimiz
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Mijozlarimiz uchun yaratgan professional yechimlarimiz bilan tanishing
        </p>
      </header>

      {/* Categories Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 text-gray-700 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
          >
            {cat.name} <span className="text-gray-500 dark:text-gray-400">({cat.count})</span>
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {portfolios.map((portfolio) => (
          <Link
            href={`/portfolio/${portfolio.slug}`}
            key={portfolio.id}
            className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:shadow-2xl dark:hover:shadow-gray-700/50 transition-all duration-300 flex flex-col"
          >
            {/* Image */}
            <div className="relative h-56 bg-gray-200 dark:bg-gray-700 overflow-hidden">
              <Image
                src={portfolio.imageUrl}
                alt={portfolio.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {portfolio.featured && (
                <span className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  ⭐ Featured
                </span>
              )}
              <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase">
                  {portfolio.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {portfolio.title}
              </h2>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                {portfolio.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {portfolio.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-md font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                {portfolio.liveUrl && (
                  <a
                    href={portfolio.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors text-sm font-medium"
                  >
                    Ko'rish →
                  </a>
                )}
                {portfolio.githubUrl && (
                  <a
                    href={portfolio.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm font-medium"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
