import { Sidebar, SidebarContent, SidebarGroup, SidebarHeader, SidebarTrigger } from "../ui/sidebar";
import SideBarNav from "./sidebar-nav";
import { LAYOUT } from "@/lib/constant";

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="h-(--layout-header-height) flex items-start justify-center border-b px-4">
        {/* Placeholder logo space */}
        <span className="font-bold text-lg text-gray-900 ">Expense Flow</span>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          {/* Your custom navigation component drops right in */}
          <SideBarNav />
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}