'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import type { Portfolio } from "@/types";

type PortfolioFormProps = {
  portfolio?: Portfolio | null;
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

export function PortfolioForm({ portfolio }: PortfolioFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [slug, setSlug] = useState(portfolio?.slug || '');
  const [title, setTitle] = useState(portfolio?.title || '');

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    if (!portfolio) { // Only auto-generate for new portfolios
      setSlug(generateSlug(newTitle));
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const rawTechnologies = formData.get("technologies") as string | null;

    const data = {
      title: formData.get("title"),
      slug: formData.get("slug"),
      description: formData.get("description"),
      imageUrl: formData.get("imageUrl") as string,
      technologies: rawTechnologies
        ? rawTechnologies
            .split(",")
            .map((tech) => tech.trim())
            .filter(Boolean)
        : [],
      liveUrl: formData.get("liveUrl") as string | null,
      githubUrl: formData.get("githubUrl") as string | null,
      category: formData.get("category"),
      featured: formData.get("featured") === "on",
    };

    const url = portfolio ? `/api/admin/portfolio/${portfolio.id}` : "/api/admin/portfolio";
    const method = portfolio ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert(portfolio ? "Portfolio muvaffaqiyatli yangilandi!" : "Portfolio muvaffaqiyatli yaratildi!");
        router.push("/admin/portfolio");
        router.refresh();
      } else {
        const errorData = await response.json().catch(() => ({}));
        alert(errorData?.error ?? "Xatolik yuz berdi!");
      }
    } catch (error) {
      console.error("Portfolioni yuborishda xatolik", error);
      alert("Server bilan bog'lanishda xatolik yuz berdi!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-lg bg-white p-8 shadow">
      <div>
        <Label htmlFor="title">Loyiha Nomi</Label>
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
          placeholder="telegram-bot-savdo-boti"
          required 
        />
        <p className="text-sm text-gray-500 mt-1">
          URL: innoweb.uz/portfolio/{slug || 'slug-here'}
        </p>
      </div>
      
      <div>
        <Label htmlFor="description">Tavsif</Label>
        <Textarea
          id="description"
          name="description"
          rows={5}
          defaultValue={portfolio?.description}
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
          defaultValue={portfolio?.imageUrl}
          required
        />
      </div>
      
      <div>
        <Label htmlFor="technologies">Texnologiyalar (vergul bilan ajrating)</Label>
        <Input
          id="technologies"
          name="technologies"
          placeholder="React, TypeScript, TailwindCSS"
          defaultValue={portfolio?.technologies?.join(", ") ?? ""}
          required
        />
      </div>
      
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <Label htmlFor="liveUrl">Demo URL (ixtiyoriy)</Label>
          <Input
            id="liveUrl"
            name="liveUrl"
            type="url"
            placeholder="https://demo.example.com"
            defaultValue={portfolio?.liveUrl ?? ""}
          />
        </div>
        
        <div>
          <Label htmlFor="githubUrl">GitHub URL (ixtiyoriy)</Label>
          <Input
            id="githubUrl"
            name="githubUrl"
            type="url"
            placeholder="https://github.com/..."
            defaultValue={portfolio?.githubUrl ?? ""}
          />
        </div>
      </div>
      
      <div>
        <Label htmlFor="category">Kategoriya</Label>
        <select
          id="category"
          name="category"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          defaultValue={portfolio?.category ?? "web"}
          required
        >
          <option value="web">Veb Sayt</option>
          <option value="mobile">Mobil Ilova</option>
          <option value="bot">Telegram Bot</option>
          <option value="desktop">Desktop Ilova</option>
          <option value="other">Boshqa</option>
        </select>
      </div>
      
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="featured"
          name="featured"
          className="h-4 w-4"
          defaultChecked={portfolio?.featured ?? false}
        />
        <Label htmlFor="featured" className="cursor-pointer">
          Asosiy portfoliolar ro'yxatida ko'rsatish
        </Label>
      </div>
      
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting
          ? "Saqlanmoqda..."
          : portfolio
          ? "O'zgarishlarni Saqlash"
          : "Portfolio Yaratish"}
      </Button>
    </form>
  );
}
