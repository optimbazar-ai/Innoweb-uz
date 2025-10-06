'use client';

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function AdminLoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<string | null>(searchParams.get("status"));
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        setPassword("");
        router.push("/admin");
      } else {
        const data = await response.json().catch(() => ({}));
        setStatus(data?.message ?? "Parol noto'g'ri. Qayta urinib ko'ring.");
      }
    } catch (error) {
      console.error("Admin login xatosi", error);
      setStatus("Server bilan bog'lanishda muammo yuz berdi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <Card className="w-full max-w-md shadow-lg border border-slate-200">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Innoweb Admin - Kirish</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-1" htmlFor="password">
                Maxfiy parol
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Parolni kiriting"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Tekshirilmoqda..." : "Kirish"}
            </Button>
            {status && <p className="text-center text-sm text-red-500">{status}</p>}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
