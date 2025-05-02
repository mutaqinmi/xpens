'use client'
import TopBar from "@/components/ui/top-bar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ManageIncome from "@/components/pages/manage-income";
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
import { formatCurrency } from "@/lib/currency-formatter"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreVerticalIcon } from "lucide-react";
import { useGlobalCurrencies } from "@/hooks/use-global-currencies";
import { GlobalCurrenciesState } from "@/types/global-currencies";
import ManageExpense from "@/components/pages/manage-expense";

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
]

export default function Page() {
    const globalCurrencies = useGlobalCurrencies((state: GlobalCurrenciesState) => state.globalCurrencies);
    const globalCurrency = useGlobalCurrencies((state: GlobalCurrenciesState) => state.globalCurrency);
    const getLocale = (globalCurrency: string) => globalCurrencies.find((currency) => currency.value === globalCurrency)!.locale

    return <div className="w-full">
        <TopBar/>
        <header className="my-8">
            <h1 className="text-2xl font-semibold">Manage Finances</h1>
            <p className="text-sm text-muted-foreground">Manage your finance activities.</p>
        </header>
        <main className="w-full grid grid-cols-5 gap-4">
            <div className="col-span-3">
                <Tabs defaultValue="income">
                    <TabsList className="mb-4">
                        <TabsTrigger className="px-3" value="income">Income</TabsTrigger>
                        <TabsTrigger className="px-3" value="expense">Expense</TabsTrigger>
                    </TabsList>
                    <TabsContent value="income"><ManageIncome/></TabsContent>
                    <TabsContent value="expense"><ManageExpense/></TabsContent>
                </Tabs>
            </div>
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
                                        <TableCell>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant={"ghost"}><MoreVerticalIcon/></Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent>
                                                    <DropdownMenuItem>Mark as {item.status ? "unpaid" : "paid"}</DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
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
        </main>
    </div>
}