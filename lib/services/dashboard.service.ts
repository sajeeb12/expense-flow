import { dashboardSummaryMock } from "../mocks/dashboard"

export async function getDashboardSummary(){
    await new Promise((resolve) => setTimeout(resolve,800))
    return dashboardSummaryMock;
}