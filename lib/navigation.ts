import { ArrowLeftRight, BarChart3, LayoutDashboard, LucideIcon, PiggyBank, Settings } from "lucide-react";

type NavigationItem = {
    label:string,
    href:string,
    icon:LucideIcon
}

export const navigation:NavigationItem[] = [
    {
        label:"Dashboard",
        href:"/dashboard",
        icon:LayoutDashboard
    },
    {
        label:"Transactions",
        href:"/transactions",
        icon:ArrowLeftRight
    },
    {
        label:"Analytics",
        href:"/analytics",
        icon:BarChart3
    },
    {
        label:"Budgets",
        href:"/budgets",
        icon:PiggyBank
    },
]
