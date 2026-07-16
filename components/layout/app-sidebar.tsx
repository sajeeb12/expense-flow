import Link from "next/link";
import SideBarNav from "./sidebar-nav";

export default function AppSidebar() {
  return (
    <aside className="flex h-full w-70 flex-col border-r border-gray-200 bg-white">
      {/* Brand / Logo Section */}
      <div className="border-b border-gray-200 py-4.5 px-4">
        <h1 className="text-xl font-extrabold tracking-tight text-gray-900">
          ExpenseFlow
        </h1>
      </div>

      {/* Navigation Section */}
      <nav className="flex flex-1 flex-col gap-1.5 overflow-y-auto p-4">
        <SideBarNav/>
      </nav>
    </aside>
  );
}