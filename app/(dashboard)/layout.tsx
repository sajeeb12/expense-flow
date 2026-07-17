import AppShell from "@/components/layout/app-shell";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({children} : {children : React.ReactNode}){
    return(
        <SidebarProvider>
            <AppShell>
            {children}
            </AppShell>
        </SidebarProvider>
       
    )
}