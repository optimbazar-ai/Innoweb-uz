'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";

export function PostActions({ postId }: { postId: string }) {
  const router = useRouter();

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Haqiqatan ham ushbu postni o'chirmoqchimisiz?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/posts/delete`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: postId }),
      });

      if (response.ok) {
        window.alert("Post muvaffaqiyatli o'chirildi!");
        router.refresh();
      } else {
        const data = await response.json().catch(() => ({}));
        window.alert(data?.error ?? "Postni o'chirishda xatolik yuz berdi.");
      }
    } catch (error) {
      console.error("Postni o'chirishda xatolik", error);
      window.alert("Server bilan bog'lanishda xatolik yuz berdi.");
    }
  };

  return (
    <div className="inline-flex gap-2">
      <Link 
        href={`/admin/posts/edit/${postId}`}
        className="px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium"
      >
        ✏️ Tahrirlash
      </Link>
      <button
        onClick={handleDelete}
        className="px-3 py-1.5 text-sm bg-red-600 dark:bg-red-500 hover:bg-red-700 dark:hover:bg-red-600 text-white rounded-md transition-colors font-medium"
      >
        🗑️ O'chirish
      </button>
    </div>
  );
}
