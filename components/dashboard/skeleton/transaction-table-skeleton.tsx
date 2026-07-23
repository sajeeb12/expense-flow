import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function TransactionSkleton(){
    return (
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead><Skeleton className="h-4 w-16" /></TableHead>
            <TableHead><Skeleton className="h-4 w-20" /></TableHead>
            <TableHead><Skeleton className="h-4 w-16" /></TableHead>
            <TableHead><Skeleton className="h-4 w-16" /></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 8 }).map((_, index) => (
            <TableRow key={index}>
              {/* Title */}
              <TableCell>
                <Skeleton className="h-4 w-32" />
              </TableCell>
              
              {/* Category */}
              <TableCell>
                <Skeleton className="h-4 w-24" />
              </TableCell>
              
              {/* Date */}
              <TableCell>
                <Skeleton className="h-4 w-20" />
              </TableCell>
              
              {/* Amount */}
              <TableCell>
                <Skeleton className="h-4 w-16" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}