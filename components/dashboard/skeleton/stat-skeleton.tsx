import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardStatsSkeleton() {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            {/* Title Placeholder */}
            <Skeleton className="h-4 w-24" />
            {/* Icon Placeholder */}
            <Skeleton className="h-5 w-5 rounded-md" />
          </CardHeader>
          <CardContent className="space-y-3">
            {/* Main Metric Value Placeholder */}
            <Skeleton className="h-8 w-28" />
            
            {/* Trend Indicator Line */}
            <div className="flex items-center gap-2 pt-1">
              <Skeleton className="h-4 w-12 rounded-full" /> {/* Trend percentage badge */}
              <Skeleton className="h-3 w-28" />              {/* "from last month" text */}
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}