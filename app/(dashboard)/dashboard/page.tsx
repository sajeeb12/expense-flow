import SpendingChartSection from "@/components/dashboard/charts/spending-chart-section";
import TransactionSkleton from "@/components/dashboard/skeleton/transaction-table-skeleton";
import DashboardStats from "@/components/dashboard/stats/statCardList";
import RecentTransactionsSection from "@/components/dashboard/transactions/recent-transaction";
import { PageContainer } from "@/components/layout/pageContainer";
import { getDashboardSummary } from "@/lib/services/dashboard.service";
import { Suspense } from "react";

export default async function DashboardPage(){
    const summary = await getDashboardSummary();
    console.log("summary",summary)
    return(
        <PageContainer>
            <DashboardStats stats={summary.stats} />
            <SpendingChartSection />
            <Suspense fallback={<TransactionSkleton/>}>
                <RecentTransactionsSection/>
            </Suspense>
        </PageContainer>
    )
}