'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/app/lib/api";
import type { Post } from "@/types";

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await getAllPosts();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  // Get all unique tags
  const allTags = Array.from(
    new Set(posts.flatMap(post => post.tags))
  ).sort();

  // Filter posts based on search and tag
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.seoDescription.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  if (loading) {
    return (
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">Yuklanmoqda...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 px-4">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Bizning Blog
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Dasturlash, web development va zamonaviy texnologiyalar haqida foydali maqolalar
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Maqolalarni qidirish..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 pl-12 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-lg"
            />
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Tags Filter */}
        {allTags.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                !selectedTag
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Hammasi ({posts.length})
            </button>
            {allTags.map((tag) => {
              const count = posts.filter(p => p.tags.includes(tag)).length;
              return (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedTag === tag
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  #{tag} ({count})
                </button>
              );
            })}
          </div>
        )}

        {/* Results count */}
        <p className="text-sm text-gray-500 mt-4">
          {filteredPosts.length} ta maqola topildi
        </p>
      </header>

      {/* No Results */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Hech narsa topilmadi
          </h2>
          <p className="text-gray-600 mb-6">
            Qidiruv so'rovingizga mos maqola topilmadi. Boshqa so'z bilan qidiring.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedTag(null);
            }}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Filtrlarni tozalash
          </button>
        </div>
      )}

      {/* Posts Grid */}
      {filteredPosts.length > 0 && (
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
          <Link
            href={`/blog/${post.slug}`}
            key={post.id}
            className="group block"
          >
            <article className="h-full bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
              {/* Image */}
              {post.imageUrl && (
                <div className="relative h-48 bg-gray-200 overflow-hidden">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col">
                {/* Date */}
                <time className="text-sm text-gray-500 mb-2">
                  {new Date(post.createdAt).toLocaleDateString("uz-UZ", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>

                {/* Title */}
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 mb-4 flex-grow line-clamp-3">
                  {post.seoDescription}
                </p>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded-md font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                    {post.tags.length > 3 && (
                      <span className="text-xs text-gray-500">
                        +{post.tags.length - 3}
                      </span>
                    )}
                  </div>
                )}

                {/* Read More */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="text-blue-600 font-medium text-sm group-hover:gap-2 inline-flex items-center transition-all">
                    O'qish
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </article>
          </Link>
        ))}
        </div>
      )}
    </div>
  );
}
