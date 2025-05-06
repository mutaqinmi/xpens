'use client'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "../ui/button";
import { Download  } from "lucide-react";
import { recentReportData } from "@/sandbox/dummy";

export default function RecentReportTable(){
    return <>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Detail</TableHead>
                    <TableHead>Last Generate</TableHead>
                    <TableHead></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {recentReportData.map((item, index) => {
                    return <TableRow key={index}>
                        <TableCell>{item.detail}</TableCell>
                        <TableCell>{item.lastGenerate}</TableCell>
                        <TableCell className="text-right">
                            <Button variant={"ghost"}><Download/></Button>
                        </TableCell>
                    </TableRow>
                })}
            </TableBody>
        </Table>
        <Pagination className="mt-8">
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext href="#" />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    </>
}