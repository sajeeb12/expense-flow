export type TrendDirection = "up" | "down"

export type StatId =
  | "balance"
  | "income"
  | "expenses"
  | "savings";

export interface DashboardStat{
    id: StatId;
    title: string;
    value: number;
    trend: number;
    trendDirection: TrendDirection;
}


// export interface DashboardSummary{
//     balance:number;
//     income:number;
//     expenses:number;
//     savings:number;
//     stats:StatCardData[]
// }

export interface DashboardSummary {
  stats: DashboardStat[];
}

