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
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "../ui/button";
import { Download  } from "lucide-react";

const recentReports = [
    {
        detail: "February 2025",
        lastGenerate: "March 3rd, 2025",
    },
    {
        detail: "January 2025",
        lastGenerate: "February 9th, 2025",
    },
    {
        detail: "December 2024",
        lastGenerate: "January 11th, 2025",
    }
]

export default function RecentReport(){
    // return <Card>
    //     <CardContent>
    //         <Table>
    //             <TableHeader>
    //                 <TableRow>
    //                     <TableHead>Detail</TableHead>
    //                     <TableHead>Last Generate</TableHead>
    //                 </TableRow>
    //             </TableHeader>
    //             <TableBody>
    //                 {recentReports.map((item, index) => {
    //                     return <TableRow key={index}>
    //                         <TableCell className="w-full">{item.detail}</TableCell>
    //                         <TableCell>{item.lastGenerate}</TableCell>
    //                         <TableCell className="text-right">
    //                             <Button variant={"ghost"}><Download/></Button>
    //                         </TableCell>
    //                     </TableRow>
    //                 })}
    //             </TableBody>
    //         </Table>
    //     </CardContent>
    //     <CardFooter>
    //         <Pagination>
    //             <PaginationContent>
    //                 <PaginationItem>
    //                     <PaginationPrevious href="#" />
    //                 </PaginationItem>
    //                 <PaginationItem>
    //                     <PaginationLink href="#">1</PaginationLink>
    //                 </PaginationItem>
    //                 <PaginationItem>
    //                     <PaginationLink href="#">2</PaginationLink>
    //                 </PaginationItem>
    //                 <PaginationItem>
    //                     <PaginationEllipsis />
    //                 </PaginationItem>
    //                 <PaginationItem>
    //                     <PaginationNext href="#" />
    //                 </PaginationItem>
    //             </PaginationContent>
    //         </Pagination>
    //     </CardFooter>
    // </Card>
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
                {recentReports.map((item, index) => {
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