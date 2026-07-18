import DashboardStats from "@/components/dashboard/statCardList";
import { PageContainer } from "@/components/layout/pageContainer";
import { getDashboardSummary } from "@/lib/services/dashboard.service";

export default async function DashboardPage(){
    const summary = await getDashboardSummary();
    console.log("summary",summary)
    return(
        <PageContainer>
            <div>
                <DashboardStats stats={summary.stats} />
            </div>
        </PageContainer>
    )
}