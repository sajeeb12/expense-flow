
import StatCard from "./statCard";
import { STAT_CONFIG } from "@/lib/dashboard/stat-config";
import { formatCurrency } from "@/lib/utils/currency";
import { DashboardStat } from "@/types/dashboard";

interface DashboardStatsProps{
    stats: DashboardStat[]
}

export default function DashboardStats({stats}:DashboardStatsProps){
    return(
        <div>
            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {stats.map((stat) => {
                   const {icon} = STAT_CONFIG[stat.id];
                   return <StatCard 
                            key={stat.id} 
                            title={stat.title}
                            value={formatCurrency(stat.value)}
                            icon={icon}
                            trend={stat.trend}
                            trendDirection={stat.trendDirection}
                        />
                })}
            </section>
        </div>
    )
}