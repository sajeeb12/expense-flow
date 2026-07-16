"use client";
import { navigation } from "@/lib/navigation";
import { usePathname } from "next/navigation";

export default function HeaderTitle(){
    const pathname = usePathname();
    const title =
        navigation.find(({ href }) => pathname === href)?.label ??
        "ExpenseFlow";
    return(
        <h2 className="text-2xl font-semibold">{title}</h2>
    )
}