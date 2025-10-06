import { getPostById } from "@/app/lib/api";
import { PostForm } from "../../_components/PostForm";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditPostPage({ params }: PageProps) {
  const { id } = await params;
  const post = await getPostById(id);

  return (
    <div>
      <h2 className="mb-6 text-3xl font-bold">Postni Tahrirlash</h2>
      <PostForm post={post} />
    </div>
  );
}
