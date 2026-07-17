import { LAYOUT } from "@/lib/constant";

export function PageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col gap-6 p-(--layout-page-padding)">
      {children}
    </main>
  );
}