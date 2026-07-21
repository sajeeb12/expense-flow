import RecentTransactionsSection from "@/components/dashboard/recent-transaction";
import TransactionSkleton from "@/components/dashboard/skeleton/transaction-table-skeleton";
import DashboardStats from "@/components/dashboard/statCardList";
import { PageContainer } from "@/components/layout/pageContainer";
import { getDashboardSummary } from "@/lib/services/dashboard.service";
import { Suspense } from "react";

export default async function DashboardPage(){
    const summary = await getDashboardSummary();
    console.log("summary",summary)
    return(
        <PageContainer>
            <div>
                <DashboardStats stats={summary.stats} />
            </div>
            <Suspense fallback={<TransactionSkleton/>}>
                <RecentTransactionsSection/>
            </Suspense>
        </PageContainer>
    )
}