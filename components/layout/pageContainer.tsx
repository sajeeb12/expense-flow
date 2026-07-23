import { LAYOUT } from "@/lib/constant";

export function PageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col gap-6 max-md:p-(--layout-page-padding-res) md:p-(--layout-page-padding)">
      {children}
    </main>
  );
}