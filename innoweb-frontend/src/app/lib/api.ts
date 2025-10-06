import { Post, Portfolio } from '@/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';

export async function getAllPosts(): Promise<Post[]> {
  const res = await fetch(`${API_BASE_URL}/posts`, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Postlarni yuklab bo`lmadi');
  }

  const data = await res.json();

  if (Array.isArray(data.data)) {
    return data.data;
  }

  return data;
}

export async function getPostById(id: string): Promise<Post> {
  const res = await fetch(`${API_BASE_URL}/posts/${id}`, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Postni yuklab bo`lmadi');
  }

  const data = await res.json();

  if (data?.data) {
    return data.data;
  }

  return data;
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const res = await fetch(`${API_BASE_URL}/posts/slug/${slug}`, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Postni yuklab bo`lmadi');
  }

  const data = await res.json();

  if (data?.data) {
    return data.data;
  }

  return data;
}

// Portfolio API Functions
export async function getAllPortfolio(): Promise<Portfolio[]> {
  const res = await fetch(`${API_BASE_URL}/portfolio`, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Portfoliolarni yuklab bo`lmadi');
  }

  const data = await res.json();

  if (Array.isArray(data.data)) {
    return data.data;
  }

  return data;
}

export async function getPortfolioById(id: string): Promise<Portfolio> {
  const res = await fetch(`${API_BASE_URL}/portfolio/${id}`, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Portfolioni yuklab bo`lmadi');
  }

  const data = await res.json();

  if (data?.data) {
    return data.data;
  }

  return data;
}

export async function getPortfolioBySlug(slug: string): Promise<Portfolio> {
  const res = await fetch(`${API_BASE_URL}/portfolio/slug/${slug}`, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Portfolioni yuklab bo`lmadi');
  }

  const data = await res.json();

  if (data?.data) {
    return data.data;
  }

  return data;
}
