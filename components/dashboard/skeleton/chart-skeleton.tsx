import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ChartSkeleton() {
  return (
    <Card className="p-6 w-full">
      {/* Chart Title / Header Loading Placeholder */}
      <div className="flex items-center justify-between mb-6">
        <div className="space-y-2">
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-4 w-48" />
        </div>
        <Skeleton className="h-8 w-24 rounded-md" /> {/* e.g., Filter dropdown */}
      </div>

      {/* Main Chart Body */}
      <div className="h-75 w-full flex flex-col justify-between">
        {/* Plot Area with Y-Axis */}
        <div className="flex gap-4 h-full items-stretch">
          {/* Y-Axis Labels */}
          <div className="flex flex-col justify-between py-2 text-right">
            <Skeleton className="h-3 w-8" />
            <Skeleton className="h-3 w-8" />
            <Skeleton className="h-3 w-8" />
            <Skeleton className="h-3 w-8" />
          </div>

          {/* Canvas Area with subtle Grid lines */}
          <div className="relative flex-1 border-b border-l border-border/50 flex items-end justify-between px-2 pt-4">
            {/* Pulsing bar shapes to mimic chart wave heights */}
            <Skeleton className="h-[40%] w-[6%] rounded-t-sm opacity-60" />
            <Skeleton className="h-[65%] w-[6%] rounded-t-sm opacity-60" />
            <Skeleton className="h-[50%] w-[6%] rounded-t-sm opacity-60" />
            <Skeleton className="h-[80%] w-[6%] rounded-t-sm opacity-60" />
            <Skeleton className="h-[55%] w-[6%] rounded-t-sm opacity-60" />
            <Skeleton className="h-[90%] w-[6%] rounded-t-sm opacity-60" />
            <Skeleton className="h-[70%] w-[6%] rounded-t-sm opacity-60" />
            <Skeleton className="h-[60%] w-[6%] rounded-t-sm opacity-60" />
            <Skeleton className="h-[75%] w-[6%] rounded-t-sm opacity-60" />
            <Skeleton className="h-[45%] w-[6%] rounded-t-sm opacity-60" />
            <Skeleton className="h-[85%] w-[6%] rounded-t-sm opacity-60" />
            <Skeleton className="h-[100%] w-[6%] rounded-t-sm opacity-60" />
          </div>
        </div>

        {/* X-Axis Labels */}
        <div className="flex justify-between pl-12 pt-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-3 w-8" />
          ))}
        </div>
      </div>
    </Card>
  );
}