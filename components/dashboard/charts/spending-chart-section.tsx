import { getChartData } from "@/lib/services/dashboard.service"
import SpendingChart from "./spending-chart"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default async function SpendingChartSection(){
    const data = await getChartData()
    return(
        <Card>
            <CardHeader>
                <CardTitle>
                    Spending Overview
                </CardTitle>
            </CardHeader>
            <CardContent>
                <SpendingChart chartData={data.items}/>
            </CardContent>
        </Card>
    )
}