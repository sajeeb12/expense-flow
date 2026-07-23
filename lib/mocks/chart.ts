import { SpendingChartData, SpendingChartItem } from "@/types/chart";

export const MOCK_SPENDING_DATA: SpendingChartData = {
  items :[
    { month: 'Jan', income: 4200, expenses: 2800 },
    { month: 'Feb', income: 4200, expenses: 2650 },
    { month: 'Mar', income: 4200, expenses: 3100 },
    { month: 'Apr', income: 4500, expenses: 2900 },
    { month: 'May', income: 4200, expenses: 2750 },
    { month: 'Jun', income: 5200, expenses: 3400 }, // Mid-year bonus / vacation
    { month: 'Jul', income: 4200, expenses: 2950 },
    { month: 'Aug', income: 4200, expenses: 3100 },
    { month: 'Sep', income: 4600, expenses: 2800 },
    { month: 'Oct', income: 4200, expenses: 2900 },
    { month: 'Nov', income: 4200, expenses: 3300 }, // Black Friday / pre-holiday
    { month: 'Dec', income: 5500, expenses: 4100 }, // Year-end bonus & holiday spending
  ]
};