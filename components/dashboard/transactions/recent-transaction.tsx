import { getRecentTransaction } from "@/lib/services/dashboard.service";
import TransactionTable from "./transaction-table";

export default async function RecentTransactionsSection(){
    const transactions = await getRecentTransaction();
    return(
        <TransactionTable transactions={transactions} />
    )
}