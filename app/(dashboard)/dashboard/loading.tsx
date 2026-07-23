import ChartSkeleton from "@/components/dashboard/skeleton/chart-skeleton";
import DashboardStatsSkeleton from "@/components/dashboard/skeleton/stat-skeleton";
import { PageContainer } from "@/components/layout/pageContainer";

export default function Loading(){
    return(
        <PageContainer>
            <DashboardStatsSkeleton/>
            <ChartSkeleton/>
        </PageContainer>
    )
}