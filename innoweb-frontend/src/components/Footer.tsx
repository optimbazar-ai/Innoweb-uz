// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-gray-950 text-white p-6 mt-auto border-t border-gray-700 dark:border-gray-800 transition-colors">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="font-bold text-lg">Innoweb.uz</h3>
            <p className="text-gray-400 dark:text-gray-500">Raqamli yechimlar va web dasturlash</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="mailto:akbarjon201309@gmail.com" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors">
              Email
            </a>
            <a href="tel:+998996448444" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors">
              Telefon
            </a>
            <a href="https://t.me/innowebuz" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors" target="_blank" rel="noopener noreferrer">
              Telegram
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 dark:border-gray-800 mt-4 pt-4 text-center text-gray-400 dark:text-gray-500">
          &copy; {new Date().getFullYear()} Innoweb.uz. Barcha huquqlar himoyalangan.
        </div>
      </div>
    </footer>
  );
}
