import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { getPostBySlug } from "@/app/lib/api";
import SocialShare from "@/components/SocialShare";

interface PageProps {
  params: Promise<{ id: string }>;
}

// SEO Metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id: slug } = await params;
  const post = await getPostBySlug(slug);

  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.content.substring(0, 160),
    keywords: post.tags.join(", "),
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription,
      images: [post.imageUrl || ""],
      type: "article",
      url: `https://innoweb.uz/blog/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle || post.title,
      description: post.seoDescription,
      images: [post.imageUrl || ""],
    },
  };
}

export default async function PostPage({ params }: PageProps) {
  const { id: slug } = await params;
  const post = await getPostBySlug(slug);

  return (
    <article className="py-8 px-4 w-full overflow-x-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-6 group"
        >
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="font-medium">Barcha maqolalar</span>
        </Link>

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 text-sm">
            <time dateTime={post.createdAt} className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {new Date(post.createdAt).toLocaleDateString("uz-UZ", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span>•</span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {Math.ceil(post.content.length / 1000)} daqiqa o'qish
            </span>
          </div>
        </header>

        {/* Featured Image */}
        {post.imageUrl ? (
          <div className="relative w-full h-64 md:h-96 mb-8 rounded-xl overflow-hidden shadow-lg dark:shadow-gray-700/50">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        ) : null}

        {/* Content */}
        <div
          className="prose prose-lg max-w-none overflow-x-hidden
            prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white
            prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
            prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-4 prose-p:break-words
            prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-a:break-words
            prose-strong:text-gray-900 dark:prose-strong:text-white prose-strong:font-semibold
            prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6
            prose-ol:my-4 prose-ol:list-decimal prose-ol:pl-6
            prose-code:text-pink-600 dark:prose-code:text-pink-400 prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-1 prose-code:rounded"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-4">
              Teglar
            </h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Social Share */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-4">
            Ulashish
          </h3>
          <SocialShare
            url={`https://innoweb.uz/blog/${post.slug}`}
            title={post.title}
            description={post.seoDescription}
          />
        </div>
      </div>
    </article>
  );
}
