'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to error reporting service
    console.error('Global error:', error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        {/* Error Illustration */}
        <div className="mb-8">
          <div className="text-8xl mb-4">⚠️</div>
        </div>

        {/* Message */}
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Xatolik Yuz Berdi
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
          Kechirasiz, nimadir noto'g'ri ketdi.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
          Agar muammo davom etsa, biz bilan bog'laning.
        </p>

        {/* Error Details (Development only) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mb-8 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-left">
            <p className="text-sm font-mono text-red-900 dark:text-red-300 break-words">
              {error.message}
            </p>
            {error.digest && (
              <p className="text-xs text-red-700 dark:text-red-400 mt-2">
                Error ID: {error.digest}
              </p>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="space-y-3">
          <button
            onClick={reset}
            className="block w-full bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors font-semibold"
          >
            🔄 Qayta Urinish
          </button>

          <a
            href="/"
            className="block w-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 px-6 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium"
          >
            🏠 Bosh Sahifa
          </a>

          <a
            href="/contact"
            className="block w-full text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 py-2 text-sm font-medium"
          >
            📧 Muammo haqida xabar berish
          </a>
        </div>
      </div>
    </div>
  );
}
