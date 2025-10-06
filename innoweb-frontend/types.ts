export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  imageUrl: string | null;
  tags: string[];
  seoTitle: string;
  seoDescription: string;
  createdAt: string;
}

export interface Portfolio {
  id: string;
  title: string;
  slug: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  liveUrl?: string | null;
  githubUrl?: string | null;
  category: string;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}
