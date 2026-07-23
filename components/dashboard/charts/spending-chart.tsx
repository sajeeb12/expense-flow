"use client";
import { SpendingChartItem } from "@/types/chart"
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface ChartDataProps{
    chartData:SpendingChartItem[];
}
export default function SpendingChart({chartData} :ChartDataProps ){
    console.log("chart data",chartData)
    return(
        <div className="w-full h-75">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    data={chartData}
                    margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
                >
                    <XAxis
                        dataKey="month"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                    />
                
                    <YAxis
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        tickFormatter={(value) => `$${value / 1000}k`}
                    />
                    <Tooltip/>
                    <Area
                        name="expenses"
                        dataKey="expenses"
                        type="monotone"
                        fill="#2563eb"
                        fillOpacity={0.2}
                        stroke="#2563eb"
                        strokeWidth={2}
                    />
                    <Area
                        name="income"
                        dataKey="income"
                        type="monotone"
                        fill="#ef4444"
                        fillOpacity={0.2}
                        stroke="#ef4444"
                        strokeWidth={2}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
        
        
    )
}