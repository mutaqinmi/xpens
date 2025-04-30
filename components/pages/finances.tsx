'use client'
import TopBar from "@/components/ui/top-bar";
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
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/currency-formatter";
import { useGlobalCurrencies } from "@/hooks/use-global-currencies";
import { GlobalCurrenciesState } from "@/types/global-currencies";
import { Button } from "../ui/button";
import { FileDown } from "lucide-react";

const recentTransaction = [
    {
        date: "April 3rd, 2025",
        detail: "Transportation",
        status: true,
        account: "GoPay",
        amount: 12000
    },
    {
        date: "April 3rd, 2025",
        detail: "Transportation",
        status: true,
        account: "GoPay",
        amount: 12000
    },
    {
        date: "April 3rd, 2025",
        detail: "Transportation",
        status: false,
        account: "GoPay",
        amount: 12000
    },
    {
        date: "April 3rd, 2025",
        detail: "Transportation",
        status: true,
        account: "GoPay",
        amount: 12000
    },
    {
        date: "April 3rd, 2025",
        detail: "Transportation",
        status: true,
        account: "GoPay",
        amount: 12000
    },
    {
        date: "April 3rd, 2025",
        detail: "Transportation",
        status: true,
        account: "GoPay",
        amount: 12000
    },
    {
        date: "April 3rd, 2025",
        detail: "Transportation",
        status: true,
        account: "GoPay",
        amount: 12000
    },
    {
        date: "April 3rd, 2025",
        detail: "Transportation",
        status: false,
        account: "GoPay",
        amount: 12000
    },
    {
        date: "April 3rd, 2025",
        detail: "Transportation",
        status: true,
        account: "GoPay",
        amount: 12000
    },
    {
        date: "April 3rd, 2025",
        detail: "Transportation",
        status: true,
        account: "GoPay",
        amount: 12000
    },
    {
        date: "April 3rd, 2025",
        detail: "Transportation",
        status: true,
        account: "GoPay",
        amount: 12000
    },
    {
        date: "April 3rd, 2025",
        detail: "Transportation",
        status: true,
        account: "GoPay",
        amount: 12000
    },
    {
        date: "April 3rd, 2025",
        detail: "Transportation",
        status: false,
        account: "GoPay",
        amount: 12000
    },
    {
        date: "April 3rd, 2025",
        detail: "Transportation",
        status: true,
        account: "GoPay",
        amount: 12000
    },
    {
        date: "April 3rd, 2025",
        detail: "Transportation",
        status: true,
        account: "GoPay",
        amount: 12000
    },
    {
        date: "April 3rd, 2025",
        detail: "Transportation",
        status: true,
        account: "GoPay",
        amount: 12000
    },
    {
        date: "April 3rd, 2025",
        detail: "Transportation",
        status: true,
        account: "GoPay",
        amount: 12000
    },
    {
        date: "April 3rd, 2025",
        detail: "Transportation",
        status: false,
        account: "GoPay",
        amount: 12000
    },
    {
        date: "April 3rd, 2025",
        detail: "Transportation",
        status: true,
        account: "GoPay",
        amount: 12000
    },
    {
        date: "April 3rd, 2025",
        detail: "Transportation",
        status: true,
        account: "GoPay",
        amount: 12000
    },
    {
        date: "April 3rd, 2025",
        detail: "Transportation",
        status: true,
        account: "GoPay",
        amount: 12000
    },
    {
        date: "April 3rd, 2025",
        detail: "Transportation",
        status: true,
        account: "GoPay",
        amount: 12000
    },
    {
        date: "April 3rd, 2025",
        detail: "Transportation",
        status: false,
        account: "GoPay",
        amount: 12000
    },
    {
        date: "April 3rd, 2025",
        detail: "Transportation",
        status: true,
        account: "GoPay",
        amount: 12000
    },
    {
        date: "April 3rd, 2025",
        detail: "Transportation",
        status: true,
        account: "GoPay",
        amount: 12000
    },
]

export default function Finances(props: {range: string}) {
    const globalCurrencies = useGlobalCurrencies((state: GlobalCurrenciesState) => state.globalCurrencies);
    const globalCurrency = useGlobalCurrencies((state: GlobalCurrenciesState) => state.globalCurrency);
    const getLocale = (globalCurrency: string) => globalCurrencies.find((currency) => currency.value === globalCurrency)!.locale

    return <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
            <Card>
                <CardHeader>
                    <CardTitle>Recent Transaction</CardTitle>
                    <CardDescription>Shows your transaction history based on the specified time.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Date</TableHead>
                                <TableHead>Detail</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Account</TableHead>
                                <TableHead className="text-right">Amount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {recentTransaction.map((item, index) => {
                                return <TableRow key={index}>
                                    <TableCell>{item.date}</TableCell>
                                    <TableCell>{item.detail}</TableCell>
                                    <TableCell>{item.status ? <Badge>Paid</Badge> : <Badge variant={"destructive"}>Unpaid</Badge>}</TableCell>
                                    <TableCell>{item.account}</TableCell>
                                    <TableCell className="text-right">{formatCurrency(item.amount, globalCurrency, getLocale(globalCurrency))}</TableCell>
                                </TableRow>
                            })}
                        </TableBody>
                    </Table>
                </CardContent>
                <CardFooter>
                    <Pagination>
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
                </CardFooter>
            </Card>
        </div>
        <div className="col-span-1">
            <Card className="sticky top-4">
                <CardHeader>
                    <CardTitle>E-Statement</CardTitle>
                    <CardDescription>Download your financial statements for the last month.</CardDescription>
                </CardHeader>
                <CardContent className="w-full">
                    <Button className="w-full">
                        <FileDown/>
                        <span>Download</span>
                    </Button>
                </CardContent>
            </Card>
        </div>
    </div>
}