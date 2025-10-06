import Link from "next/link";
import { getAllPortfolio } from "@/app/lib/api";
import type { Portfolio } from "@/types";
import { PortfolioActions } from "./portfolio-actions";

export default async function AdminPortfolioDashboard() {
  const portfolios = await getAllPortfolio();

  return (
    <div className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Portfolio Loyihalarni Boshqarish</h2>
          <Link 
            href="/admin/portfolio/new"
            className="inline-flex items-center px-6 py-3 bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
          >
            ➕ Yangi Portfolio Yaratish
          </Link>
        </div>

        <div className="rounded-lg bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Nomi
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Kategoriya
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Texnologiyalar
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Sana
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Amallar
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {portfolios.length > 0 ? (
                  portfolios.map((portfolio: Portfolio) => (
                    <tr key={portfolio.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                        {portfolio.title}
                        {portfolio.featured && (
                          <span className="ml-2 rounded bg-yellow-100 dark:bg-yellow-900 px-2 py-1 text-xs text-yellow-800 dark:text-yellow-200">
                            ⭐ Featured
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 capitalize text-gray-600 dark:text-gray-300">{portfolio.category}</td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-1">
                          {portfolio.technologies.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="rounded bg-blue-100 dark:bg-blue-900 px-2 py-1 text-xs text-blue-800 dark:text-blue-200"
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
                      </td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                        {new Date(portfolio.createdAt).toLocaleDateString("uz-UZ")}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <PortfolioActions portfolioId={portfolio.id} />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-6 py-8 text-center text-gray-500 dark:text-gray-400">
                      Hozircha portfolio loyihalari mavjud emas.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
