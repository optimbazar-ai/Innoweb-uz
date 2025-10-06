'use client';

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import type { ReactNode } from "react";

const navItems = [
  { 
    section: "Boshqaruv",
    items: [
      { href: "/admin", label: "Dashboard", icon: "📊" },
    ]
  },
  { 
    section: "Blog Postlar",
    items: [
      { href: "/admin", label: "Postlar ro'yxati", icon: "📝" },
      { href: "/admin/posts/new", label: "Yangi post", icon: "➕" },
    ]
  },
  { 
    section: "Portfolio",
    items: [
      { href: "/admin/portfolio", label: "Portfolio ro'yxati", icon: "💼" },
      { href: "/admin/portfolio/new", label: "Yangi portfolio", icon: "🆕" },
    ]
  },
];

const authlessRoutes = ["/admin/login", "/admin/logout", "/admin/api"];

export default function AdminLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const hideChrome = authlessRoutes.includes(pathname ?? "");

  if (hideChrome) {
    return <div className="min-h-screen">{children}</div>;
  }

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login?status=logout");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className={`${
        sidebarOpen ? 'w-64' : 'w-20'
      } bg-gray-900 text-white transition-all duration-300 flex flex-col`}>
        <div className="p-4 border-b border-gray-700">
          <Link href="/admin" className="flex items-center gap-3">
            <span className="text-2xl">🚀</span>
            {sidebarOpen && (
              <span className="font-bold text-lg">Innoweb Admin</span>
            )}
          </Link>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-6">
          {navItems.map((section) => (
            <div key={section.section}>
              {sidebarOpen && (
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  {section.section}
                </h3>
              )}
              <ul className="space-y-1">
                {section.items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                          isActive
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                        }`}
                      >
                        <span className="text-lg">{item.icon}</span>
                        {sidebarOpen && (
                          <span className="text-sm font-medium">{item.label}</span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-700">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-red-600 hover:text-white transition-colors w-full"
          >
            <span className="text-lg">🚪</span>
            {sidebarOpen && <span className="text-sm font-medium">Chiqish</span>}
          </button>
        </div>

        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 m-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
        >
          <span className="text-lg">{sidebarOpen ? '◀' : '▶'}</span>
        </button>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b shadow-sm p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">
              {pathname === "/admin" && "Dashboard"}
              {pathname?.includes("/posts/new") && "Yangi Post Yaratish"}
              {pathname?.includes("/posts/edit") && "Postni Tahrirlash"}
              {pathname?.includes("/portfolio/new") && "Yangi Portfolio Yaratish"}
              {pathname?.includes("/portfolio/edit") && "Portfolioni Tahrirlash"}
              {pathname === "/admin/portfolio" && "Portfolio Boshqaruvi"}
            </h1>
            <div className="flex items-center gap-4">
              <Link 
                href="/"
                target="_blank"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                🌐 Saytni ko'rish
              </Link>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
