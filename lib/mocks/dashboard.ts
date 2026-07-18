import { DashboardSummary } from "@/types/dashboard";

export const dashboardSummaryMock: DashboardSummary = {
  stats: [
    {
      id: "balance",
      title: "Total Balance",
      value: 8500,
      trend: 12,
      trendDirection: "up",
    },
    {
      id: "income",
      title: "Income",
      value: 12500,
      trend: 8,
      trendDirection: "up",
    },
    {
      id: "expenses",
      title: "Expenses",
      value: 4000,
      trend: 4, // Used absolute value since direction handles the negative state
      trendDirection: "down",
    },
    {
      id: "savings",
      title: "Savings",
      value: 8500,
      trend: 15,
      trendDirection: "up",
    },
  ],
};