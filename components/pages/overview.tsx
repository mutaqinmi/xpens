import { ExchangeRatesChart } from "@/components/charts/exchange-rates";
import { Expenses } from "@/components/charts/expenses";
import Balance from "@/components/ui/balance";
import { Card } from "@/components/ui/card";
import { Banknote, BanknoteArrowDown, TrendingUp, WalletCards } from "lucide-react";

export default function Overview(props: {range: string}){
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
            </div>
        </div>
        <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-3 mt-4">
            <div className="w-full col-span-1">
                <Card></Card>
                <Card className="mt-4"></Card>
            </div>
            <div className="w-full col-span-2">
                <Card></Card>
            </div>
        </div>
    </>
}