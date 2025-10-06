import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="text-8xl font-bold text-blue-600 dark:text-blue-400 mb-4">404</div>
          <div className="text-6xl mb-4">🔍</div>
        </div>

        {/* Message */}
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Sahifa Topilmadi
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Kechirasiz, siz qidirayotgan sahifa mavjud emas yoki ko'chirilgan bo'lishi mumkin.
        </p>

        {/* Actions */}
        <div className="space-y-4">
          <Link
            href="/"
            className="block w-full bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors font-semibold"
          >
            🏠 Bosh Sahifaga Qaytish
          </Link>

          <div className="flex gap-3">
            <Link
              href="/blog"
              className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium text-sm"
            >
              📝 Blog
            </Link>
            <Link
              href="/portfolio"
              className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium text-sm"
            >
              💼 Portfolio
            </Link>
            <Link
              href="/contact"
              className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium text-sm"
            >
              📞 Kontakt
            </Link>
          </div>
        </div>

        {/* Popular Pages */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Mashhur sahifalar:</p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/services" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                → Xizmatlarimiz
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                → Blog maqolalari
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                → Bizning ishlarimiz
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
