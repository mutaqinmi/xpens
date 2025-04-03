import { ExchangeRatesChart } from "@/components/charts/exchange-rates";
import { Expenses } from "@/components/charts/expenses";
import Balance from "@/components/ui/balance";
import { Card } from "@/components/ui/card";
import { Banknote, BanknoteArrowDown, FileDown, TrendingUp, WalletCards } from "lucide-react";
import { Button } from "../ui/button";
import { AccountUsage } from "../charts/account-usage";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { formatCurrency } from "@/lib/currency-formatter";
import { useGlobalCurrencies } from "@/hooks/use-global-currencies";
import { GlobalCurrenciesState } from "@/types/global-currencies";
import { Badge } from "../ui/badge";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "../ui/pagination"
  

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

export default function Overview(props: {range: string}){
    const globalCurrencies = useGlobalCurrencies((state: GlobalCurrenciesState) => state.globalCurrencies);
    const globalCurrency = useGlobalCurrencies((state: GlobalCurrenciesState) => state.globalCurrency);
    const getLocale = (globalCurrency: string) => globalCurrencies.find((currency) => currency.value === globalCurrency)!.locale

    return <>
        <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-3">
            <div className="w-full col-span-2">
                <div className="w-full flex gap-4">
                    <Card className="bg-primary text-primary-foreground flex flex-col px-3 py-2">
                        <div className="flex gap-2 items-center justify-start">
                            <div className="p-2 bg-primary-foreground rounded-full text-primary">
                                <WalletCards size={18}/>
                            </div>
                            <span className="text-sm">Total Balance</span>
                        </div>
                        <div className="flex flex-col gap-2 mt-2">
                            <p className="text-xs opacity-80 leading-0">Balance</p>
                            <Balance className="text-2xl font-semibold">1289300</Balance>
                        </div>
                    </Card>
                    <Card className="flex flex-col px-3 py-2">
                        <div className="flex gap-2 items-center justify-start">
                            <div className="p-2 bg-primary rounded-full text-primary-foreground">
                                <BanknoteArrowDown size={18}/>
                            </div>
                            <span className="text-sm">Total Income</span>
                        </div>
                        <div className="flex flex-col gap-2 mt-2">
                            <p className="text-xs opacity-80 leading-0">Money In</p>
                            <Balance className="text-2xl font-semibold">267000</Balance>
                        </div>
                    </Card>
                    <Card className="flex flex-col px-3 py-2">
                        <div className="flex gap-2 items-center justify-start">
                            <div className="p-2 bg-primary rounded-full text-primary-foreground">
                                <Banknote size={18}/>
                            </div>
                            <span className="text-sm">Total Outcome</span>
                        </div>
                        <div className="flex flex-col gap-2 mt-2">
                            <p className="text-xs opacity-80 leading-0">Money Out</p>
                            <Balance className="text-2xl font-semibold">32800</Balance>
                        </div>
                    </Card>
                </div>
                <Card className="mt-4 px-3 py-3">
                    <div>
                        <h2 className="text-lg font-semibold">Overview</h2>
                        <p className="text-xs text-muted-foreground">Displays your income and expenditure data in diagram form.</p>    
                    </div>
                    <Expenses/>
                </Card>
                <Card className="mt-4 px-3 py-3">
                    <div>
                        <h2 className="text-lg font-semibold">Recent Transaction</h2>
                        <p className="text-xs text-muted-foreground">Shows your transaction history based on the specified time.</p>    
                    </div>
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
                </Card>
            </div>
            <div className="w-full col-span-1">
                <Card className="px-3 py-3">
                    <div>
                        <h2 className="text-lg font-semibold">Exchange Rates</h2>
                        <p className="text-xs text-muted-foreground">Display exchange rate data by currency.</p>    
                    </div>
                    <div className="flex flex-row gap-4 items-center mt-2">
                        <TrendingUp size={50}/>
                        <div className="flex flex-col w-full">
                            <p className="font-medium">USD/IDR</p>
                            <p className="text-sm">16,560</p>
                        </div>
                        <div className="flex flex-col text-end">
                            <p className="font-medium">+0.36%</p>
                            <p className="text-sm">+988.60</p>
                        </div>
                    </div>
                    <ExchangeRatesChart/>
                </Card>
                <Card className="mt-4 px-3 py-3">
                    <div>
                        <h2 className="text-lg font-semibold">Important Notice</h2>
                        <p className="text-xs text-muted-foreground">Shows a list of transactions that you have not paid for.</p>    
                    </div>
                </Card>
                <Card className="mt-4 px-3 py-3">
                    <div>
                        <h2 className="text-lg font-semibold">Accounts</h2>
                        <p className="text-xs text-muted-foreground">Displays frequently used accounts.</p>    
                    </div>
                    <AccountUsage/>
                </Card>
                <Card className="mt-4 px-3 py-3">
                    <div>
                        <h2 className="text-lg font-semibold">E-Statement</h2>
                        <p className="text-xs text-muted-foreground">Download your financial statements for the last month.</p>    
                    </div>
                    <Button>
                        <FileDown/>
                        <span>Download</span>
                    </Button>
                </Card>
            </div>
        </div>
        
    </>
}