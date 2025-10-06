'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  text: string;
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Abbos Karimov',
      role: 'CEO',
      company: 'TechStart LLC',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
      rating: 5,
      text: 'Innoweb.uz jamoasi bilan ishlash juda yoqimli edi. Bizning veb-saytimizni professional darajada yaratishdi. Mijozlar soni 3 barobarga oshdi!',
    },
    {
      id: 2,
      name: 'Malika Rahimova',
      role: 'Direktor',
      company: 'Fashion Boutique',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
      rating: 5,
      text: 'E-commerce saytimiz va Telegram botimiz ajoyib ishlayapti. Buyurtmalar avtomatik keladi va biz vaqt tejayapmiz. Juda minnatdormiz!',
    },
    {
      id: 3,
      name: 'Sardor Ahmadov',
      role: 'Asos',
      company: 'Digital Agency',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200',
      rating: 5,
      text: 'Professional yondashuv, zamonaviy texnologiyalar va o\'z vaqtida topshirish. Innoweb bilan ishlashni barchaga tavsiya qilaman!',
    },
    {
      id: 4,
      name: 'Nigora Tursunova',
      role: 'Marketing Manager',
      company: 'BeautyPro',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
      rating: 5,
      text: 'Landing page va admin panelimiz juda chiroyli va qulay bo\'ldi. Innoweb jamoasi har bir tafsilotga e\'tibor berdi. Rahmat!',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mijozlarimiz Fikrlari
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Bizning ishimiz haqida mijozlarimizning fikr-mulohazalari
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl dark:shadow-gray-700/50 p-8 md:p-12 max-w-4xl mx-auto border border-gray-200 dark:border-gray-700">
            {/* Quote Icon */}
            <div className="text-blue-600 dark:text-blue-400 text-6xl leading-none mb-4">"</div>

            {/* Rating */}
            <div className="flex gap-1 mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <svg
                  key={i}
                  className="w-6 h-6 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              {currentTestimonial.text}
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-bold text-gray-900 dark:text-white text-lg">
                  {currentTestimonial.name}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {currentTestimonial.role} • {currentTestimonial.company}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg dark:shadow-gray-700/50 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-600"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg dark:shadow-gray-700/50 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-600"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-blue-600 w-8'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
