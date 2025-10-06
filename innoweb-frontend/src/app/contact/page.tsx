'use client';

import { useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

export default function ContactPage() {
  const [status, setStatus] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("Yuborilmoqda...");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus("✅ Xabaringiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog'lanamiz.");
        event.currentTarget.reset();
      } else {
        setStatus("❌ Xatolik yuz berdi. Iltimos, qayta urunib ko'ring.");
      }
    } catch (error) {
      console.error("Kontakt formasini yuborishda xatolik", error);
      setStatus("❌ Server bilan bog'lanishda muammo. Internet aloqasini tekshiring.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Biz Bilan Bog'laning
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Savollaringiz bormi? Loyihangizni muhokama qilmoqchimisiz? Biz bilan bog'laning!
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg p-6">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Ismingiz *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Ism Familiya"
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Email manzilingiz *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="email@example.com"
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Telefon raqamingiz
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+998 90 123 45 67"
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Xabar *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Xabaringizni yozing..."
                      rows={6}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors resize-none"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Yuborilmoqda..." : "Yuborish"}
                  </button>
                  
                  {status && (
                    <div className={`text-center p-3 rounded-lg ${
                      status.includes("✅") 
                        ? "bg-green-50 text-green-700" 
                        : "bg-red-50 text-red-700"
                    }`}>
                      {status}
                    </div>
                  )}
                </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📧</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Email</h3>
                    <a 
                      href="mailto:akbarjon201309@gmail.com" 
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline"
                    >
                      akbarjon201309@gmail.com
                    </a>
                  </div>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📱</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Telefon</h3>
                    <a 
                      href="tel:+998996448444" 
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline"
                    >
                      +998 99 644 84 44
                    </a>
                  </div>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">💬</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Telegram</h3>
                    <a 
                      href="https://t.me/innowebuz" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline"
                    >
                      @innowebuz
                    </a>
                  </div>
                </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
                <h3 className="font-semibold text-lg mb-3 text-blue-900 dark:text-blue-300">
                  ⏰ Ish vaqti
                </h3>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>Dushanba - Juma: 9:00 - 18:00</p>
                  <p>Shanba: 10:00 - 15:00</p>
                  <p>Yakshanba: Dam olish</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
