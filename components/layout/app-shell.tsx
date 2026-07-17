import AppHeader from "./app-header";
import AppSidebar from "./app-sidebar";

export default function AppShell({children} : {children:React.ReactNode}){
    return(
        <div className="flex h-screen w-full bg-gray-50 overflow-hidden">
          {/* Sidebar manages its own layout now */}
          <AppSidebar />
    
          {/* Right side container (Header + Main Content) */}
          <div className="flex flex-col flex-1 w-full">
            
            {/* Header fixed to the top */}
            <header className="border-b bg-white">
              <AppHeader />
            </header>
            
            {/* Scrollable main content area */}
            <main className="flex-1 overflow-y-auto p-6">
              {children}
            </main>
            
          </div>
        </div>
    )
}