'use client';

import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/about', label: 'Biz Haqimizda' },
    { href: '/services', label: 'Xizmatlar' },
    { href: '/blog', label: 'Blog' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Kontakt' },
  ];

  return (
    <header className="bg-gray-900 dark:bg-gray-950 text-white p-4 sticky top-0 z-50 shadow-lg border-b border-gray-800 dark:border-gray-700 transition-colors">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="font-bold text-xl hover:text-blue-400 transition-colors">
          Innoweb.uz
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-blue-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile: Theme Toggle + Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="flex flex-col justify-center items-center w-10 h-10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`bg-white dark:bg-gray-200 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
            }`} />
            <span className={`bg-white dark:bg-gray-200 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
              isMenuOpen ? 'opacity-0' : 'opacity-100'
            }`} />
            <span className={`bg-white dark:bg-gray-200 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
            }`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-gray-700 dark:border-gray-600">
          <div className="container mx-auto flex flex-col space-y-3 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-blue-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
