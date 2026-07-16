"use client";
import { navigation } from "@/lib/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideBarNav(){
    const pathname = usePathname()
    return(
        <div>
            {navigation.map(navItem => {
                const Icon = navItem.icon
                const isActive = pathname === navItem.href
                return <Link
                    key={navItem.href}
                    href={navItem.href}
                    className={`flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors ${isActive ? 'bg-gray-100 text-gray-900':'text-gray-700 hover:bg-gray-100 hover:text-gray-900'}`}
                    >
                    <Icon className="w-5 h-5 mr-2" />
                    {navItem.label}
                </Link>
            })}
        </div>
    )
}