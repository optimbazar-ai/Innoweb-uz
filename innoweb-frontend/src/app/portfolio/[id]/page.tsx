import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { getPortfolioBySlug } from "@/app/lib/api";

interface PageProps {
  params: Promise<{ id: string }>;
}

// SEO Metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id: slug } = await params;
  const portfolio = await getPortfolioBySlug(slug);

  return {
    title: `${portfolio.title} - Portfolio | Innoweb.uz`,
    description: portfolio.description,
    keywords: portfolio.technologies.join(", "),
    openGraph: {
      title: portfolio.title,
      description: portfolio.description,
      images: [portfolio.imageUrl],
      type: "website",
      url: `https://innoweb.uz/portfolio/${portfolio.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: portfolio.title,
      description: portfolio.description,
      images: [portfolio.imageUrl],
    },
  };
}

export default async function PortfolioDetailPage({ params }: PageProps) {
  const { id: slug } = await params;
  const portfolio = await getPortfolioBySlug(slug);

  return (
    <article className="py-8 px-4 w-full overflow-x-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <Link 
          href="/portfolio"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6 group"
        >
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="font-medium">Barcha loyihalar</span>
        </Link>

        {/* Header */}
        <header className="mb-8">
          {/* Category Badge */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide bg-gray-100 px-3 py-1 rounded-full">
              {portfolio.category}
            </span>
            {portfolio.featured && (
              <span className="text-xs font-semibold bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full flex items-center gap-1">
                ⭐ Featured
              </span>
            )}
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 leading-tight">
            {portfolio.title}
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed">
            {portfolio.description}
          </p>
        </header>

        {/* Hero Image */}
        <div className="relative w-full h-64 md:h-96 lg:h-[500px] mb-12 rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={portfolio.imageUrl}
            alt={portfolio.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            {/* Technologies */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                💻 Texnologiyalar
              </h2>
              <div className="flex flex-wrap gap-3">
                {portfolio.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-medium text-sm hover:bg-blue-100 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Project Details (if we had more fields) */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                📋 Loyiha Haqida
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  {portfolio.description}
                </p>
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Sizga ham shunday loyiha kerakmi?
              </h3>
              <p className="text-gray-700 mb-6">
                Biz sizning biznesingiz uchun professional yechimlar yaratamiz. Bepul konsultatsiya oling!
              </p>
              <Link
                href="/contact"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Bog'lanish
              </Link>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Project Info Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 sticky top-4">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                📊 Loyiha Ma'lumotlari
              </h3>
              
              <div className="space-y-4">
                {/* Category */}
                <div>
                  <div className="text-sm text-gray-500 mb-1">Kategoriya</div>
                  <div className="font-semibold text-gray-900 capitalize">
                    {portfolio.category === 'web' && '🌐 Web Sayt'}
                    {portfolio.category === 'bot' && '🤖 Telegram Bot'}
                    {portfolio.category === 'mobile' && '📱 Mobil Ilova'}
                    {portfolio.category === 'desktop' && '💻 Desktop'}
                  </div>
                </div>

                {/* Date */}
                <div>
                  <div className="text-sm text-gray-500 mb-1">Yaratilgan</div>
                  <div className="font-semibold text-gray-900">
                    {new Date(portfolio.createdAt).toLocaleDateString("uz-UZ", {
                      year: "numeric",
                      month: "long",
                    })}
                  </div>
                </div>

                {/* Technologies Count */}
                <div>
                  <div className="text-sm text-gray-500 mb-1">Texnologiyalar</div>
                  <div className="font-semibold text-gray-900">
                    {portfolio.technologies.length} ta
                  </div>
                </div>

                {/* Links */}
                {(portfolio.liveUrl || portfolio.githubUrl) && (
                  <div className="pt-4 border-t border-gray-200 space-y-3">
                    {portfolio.liveUrl && (
                      <a
                        href={portfolio.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        <span>Live Demo</span>
                      </a>
                    )}
                    {portfolio.githubUrl && (
                      <a
                        href={portfolio.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Share Card (Future) */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                🔗 Ulashish
              </h3>
              <div className="flex gap-3">
                <button className="flex-1 bg-white border border-gray-300 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium">
                  Facebook
                </button>
                <button className="flex-1 bg-white border border-gray-300 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium">
                  Twitter
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
