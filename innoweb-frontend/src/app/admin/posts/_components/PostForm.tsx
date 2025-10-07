'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import type { Post } from "@/types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const ADMIN_API_KEY = process.env.NEXT_PUBLIC_ADMIN_API_KEY;

type PostFormProps = {
  post?: Post | null;
};

// Slug generator function
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[ʻʼ'']/g, '')
    .replace(/o'/g, 'o')
    .replace(/g'/g, 'g')
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')
    .trim()
    .replace(/^-+|-+$/g, '');
}

export function PostForm({ post }: PostFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [slug, setSlug] = useState(post?.slug || '');
  const [title, setTitle] = useState(post?.title || '');

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    if (!post) { // Only auto-generate for new posts
      setSlug(generateSlug(newTitle));
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const rawTags = formData.get("tags") as string | null;

    const data = {
      title: formData.get("title"),
      slug: formData.get("slug"),
      content: formData.get("content"),
      imageUrl: (formData.get("imageUrl") as string | null) ?? "",
      tags: rawTags
        ? rawTags
            .split(",")
            .map((tag) => tag.trim())
            .filter(Boolean)
        : [],
      seoTitle: formData.get("seoTitle"),
      seoDescription: formData.get("seoDescription"),
    };

    if (!API_BASE_URL || !ADMIN_API_KEY) {
      alert("Server sozlamalari topilmadi. Administratorga murojaat qiling.");
      setIsSubmitting(false);
      return;
    }

    const url = post ? `${API_BASE_URL}/posts/${post.id}` : `${API_BASE_URL}/posts`;
    const method = post ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": ADMIN_API_KEY,
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert(post ? "Post muvaffaqiyatli yangilandi!" : "Post muvaffaqiyatli yaratildi!");
        router.push("/admin");
        router.refresh();
      } else {
        const errorData = await response.json().catch(() => ({}));
        alert(errorData?.error ?? "Xatolik yuz berdi!");
      }
    } catch (error) {
      console.error("Postni yuborishda xatolik", error);
      alert("Server bilan bog'lanishda xatolik yuz berdi!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-lg bg-white p-8 shadow">
      <div>
        <Label htmlFor="title">Sarlavha</Label>
        <Input 
          id="title" 
          name="title" 
          value={title}
          onChange={handleTitleChange}
          required 
        />
      </div>
      <div>
        <Label htmlFor="slug">URL Slug (SEO uchun)</Label>
        <Input 
          id="slug" 
          name="slug" 
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          placeholder="prisma-orm-malumotlar-bazasi"
          required 
        />
        <p className="text-sm text-gray-500 mt-1">
          URL: innoweb.uz/blog/{slug || 'slug-here'}
        </p>
      </div>
      <div>
        <Label htmlFor="content">Mazmuni (HTML formatda)</Label>
        <Textarea
          id="content"
          name="content"
          rows={10}
          defaultValue={post?.content}
          required
        />
      </div>
      <div>
        <Label htmlFor="imageUrl">Rasm URL</Label>
        <Input
          id="imageUrl"
          name="imageUrl"
          type="url"
          placeholder="https://..."
          defaultValue={post?.imageUrl ?? ""}
        />
      </div>
      <div>
        <Label htmlFor="tags">Teglar (vergul bilan ajrating)</Label>
        <Input
          id="tags"
          name="tags"
          defaultValue={post?.tags?.join(", ") ?? ""}
        />
      </div>
      <hr className="border-t" />
      <h3 className="text-xl font-semibold">SEO Ma'lumotlari</h3>
      <div>
        <Label htmlFor="seoTitle">SEO Sarlavha</Label>
        <Input
          id="seoTitle"
          name="seoTitle"
          defaultValue={post?.seoTitle}
          required
        />
      </div>
      <div>
        <Label htmlFor="seoDescription">SEO Tavsifi</Label>
        <Textarea
          id="seoDescription"
          name="seoDescription"
          rows={3}
          defaultValue={post?.seoDescription}
          required
        />
      </div>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting
          ? "Saqlanmoqda..."
          : post
          ? "O'zgarishlarni Saqlash"
          : "Post Yaratish"}
      </Button>
    </form>
  );
}
