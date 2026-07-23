import { MOCK_SPENDING_DATA } from "../mocks/chart";
import { dashboardSummaryMock } from "../mocks/dashboard"
import { MOCK_TRANSACTIONS } from "../mocks/transaction";

export async function getDashboardSummary(){
    await new Promise((resolve) => setTimeout(resolve,800))
    return dashboardSummaryMock;
}

export async function getRecentTransaction(){
    await new Promise((resolve) => setTimeout(resolve,3000))
    return MOCK_TRANSACTIONS;
}

export async function getChartData(){
    await new Promise((resolve) => setTimeout(resolve,900));
    return MOCK_SPENDING_DATA;
}