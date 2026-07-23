import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDownRight, ArrowUpRight, LucideIcon } from "lucide-react";


interface StatCardProps {
  title: string;
  value: string;
  trend: number;
  trendDirection: "up" | "down";
  icon: LucideIcon;
}
export default function StatCard({
    title, 
    value, 
    trend, 
    trendDirection, 
    icon: Icon
}:StatCardProps){
    const TrendIcon =
    trendDirection === "up" ? ArrowUpRight : ArrowDownRight;
    return(
        <Card>
            <CardHeader className="flex items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                    {title}
                </CardTitle>
                <Icon className="h-5 w-5 text-muted-foreground"/>
            </CardHeader>
            <CardContent>
                <p className="text-3xl font-bold tracking-tight">
                    {value}
                </p>
                <div className="mt-2 flex items-center gap-1 text-sm">
                    <TrendIcon
                        className={`h-4 w-4 ${
                        trendDirection === "up"
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                    />

                    <span
                        className={
                        trendDirection === "up"
                            ? "text-green-500"
                            : "text-red-500"
                        }
                    >
                        {trend}%
                    </span>

                    <span className="text-muted-foreground">
                        from last month
                    </span>
                </div>

            </CardContent>
        </Card>
    )
}