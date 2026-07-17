import { LAYOUT } from "@/lib/constant";
import HeaderTitle from "./header-title";
import { SidebarTrigger } from "../ui/sidebar";

export default function AppHeader(){
    return(
        <header
        className="flex items-center justify-between border-b px-6 h-(--layout-header-height)">
            <div className="flex items-center gap-1">
                <SidebarTrigger className="text-gray-700"/>
                <HeaderTitle/>
            </div>

            <div>
                Theme Toggle
            </div>
        </header>
    )
}