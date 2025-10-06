import { getPortfolioById } from "@/app/lib/api";
import { PortfolioForm } from "../../_components/PortfolioForm";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditPortfolioPage({ params }: PageProps) {
  const { id } = await params;
  const portfolio = await getPortfolioById(id);

  return (
    <div>
      <h2 className="mb-6 text-3xl font-bold">Portfolioni Tahrirlash</h2>
      <PortfolioForm portfolio={portfolio} />
    </div>
  );
}
