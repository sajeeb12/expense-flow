import { Transaction } from "@/types/transaction";
import { Card } from "../ui/card";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { cn } from "@/lib/utils";

export interface transactionProps{
    transactions:Transaction[]
}

export default function TransactionTable({transactions}: transactionProps) {
  return (
    <Card>
        <Table>
            <TableCaption>Recent Transactions</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    transactions.map((transaction) => {
                        const isExpense = transaction.category.toLowerCase() !=='income';
                        return <TableRow key={transaction.id}>
                            <TableCell>{transaction.title}</TableCell>
                            <TableCell>{transaction.category}</TableCell>
                            <TableCell>{transaction.date}</TableCell>
                            <TableCell className={
                                cn(
                                    {' text-emerald-700' : !isExpense,
                                     'text-red-500': isExpense,
                                    }

                                )
                            } >
                                {transaction.amount} $
                            </TableCell>
                        </TableRow>
                    })
                }
            </TableBody>
        </Table>
    </Card>
  );
}