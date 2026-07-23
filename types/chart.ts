export interface SpendingChartItem {
    month: string;
    income: number;
    expenses: number;
}

export interface SpendingChartData{
    items:SpendingChartItem[]
}