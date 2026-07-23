import { Transaction } from "@/types/transaction";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from "@/components/ui/table";

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