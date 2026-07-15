import Link from "next/link";

export default function AppSidebar() {
  return (
    <aside className="flex h-full w-64 flex-col border-r border-gray-200 bg-white">
      {/* Brand / Logo Section */}
      <div className="border-b border-gray-200 px-6 py-5">
        <h1 className="text-xl font-extrabold tracking-tight text-gray-900">
          ExpenseFlow
        </h1>
      </div>

      {/* Navigation Section */}
      <nav className="flex flex-1 flex-col gap-1.5 overflow-y-auto p-4">
        <Link 
          href="/dashboard"
          className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
        >
          Dashboard
        </Link>
        <Link 
          href="/transactions"
          className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
        >
          Transactions
        </Link>
        <Link 
          href="/analytics"
          className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
        >
          Analytics
        </Link>
        <Link 
          href="/budgets"
          className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
        >
          Budgets
        </Link>

        {/* Bottom Section (Settings) */}
        <div className="mt-auto pt-4">
          <Link 
            href="/settings"
            className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
          >
            Settings
          </Link>
        </div>
      </nav>
    </aside>
  );
}