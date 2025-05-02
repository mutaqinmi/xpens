'use client'
import { AccountUsage } from "@/components/charts/account-usage";
import Balance from "@/components/ui/balance";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import HideBalanceButton from "@/components/ui/hide-balance-button";
import TopBar from "@/components/ui/top-bar";
import { DropdownMenuLabel } from "@radix-ui/react-dropdown-menu";
import { MoreVerticalIcon, PlusCircle } from "lucide-react";

export default function Page() {
    const wallets = [
        {
            number: "081234567899",
            account: "Bank Jago",
            balance: 1289300,
        },
        {
            number: "081234567899",
            account: "GoPay",
            balance: 1289300,
        },
        {
            number: "081234567899",
            account: "PayPal",
            balance: 1289300,
        },
        {
            number: "081234567899",
            account: "BCA",
            balance: 1289300,
        },
    ]
    
    return <div className="w-full">
        <TopBar/>
        <header className="my-8">
            <h1 className="text-2xl font-semibold">Wallets</h1>
            <p className="text-sm text-muted-foreground">List of all your wallets account.</p>
        </header>
        <main className="w-full flex flex-col gap-4">
            <div className="w-full grid grid-cols-3 gap-4">
                <div className="col-span-2">
                    <Card className="p-2 px-3">
                        <CardContent className="flex p-0 items-center justify-between">
                            <span>Total balance</span>
                            <div className="flex items-center gap-2">
                                <Balance className="font-semibold">10000</Balance>
                                <HideBalanceButton/>
                            </div>
                        </CardContent>
                    </Card>
                    <div className="w-full grid grid-cols-3 gap-4 mt-4">
                        {wallets.map((wallet, index) => {
                            return <Card key={index} className="p-0 cursor-pointer">
                                <CardContent className="flex flex-col p-3 gap-6">
                                    <div className="flex items-start justify-between">
                                        <div className="flex flex-col gap-2 items-start justify-start">
                                            <span className="text-xs leading-none text-muted-foreground">{wallet.number}</span>
                                            <span className="font-semibold leading-none">{wallet.account}</span>
                                        </div>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button size={null} variant={"ghost"}><MoreVerticalIcon size={20}/></Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent>
                                                <DropdownMenuLabel>
                                                    <span className="p-2 font-semibold">{wallet.account}</span>
                                                </DropdownMenuLabel>
                                                <DropdownMenuSeparator/> 
                                                <DropdownMenuItem>Top up</DropdownMenuItem>
                                                <DropdownMenuItem>Out</DropdownMenuItem>
                                                <DropdownMenuItem>Move/Transfer</DropdownMenuItem>
                                                <DropdownMenuSeparator/>
                                                <DropdownMenuItem>Edit Wallet</DropdownMenuItem>
                                                <DropdownMenuItem><span className="text-red-500">Delete Wallet</span></DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                    <div className="flex flex-col gap-2 mt-2">
                                        <p className="text-xs text-muted-foreground leading-0">Balance</p>
                                        <Balance className="text-2xl font-semibold">{wallet.balance.toString()}</Balance>
                                    </div>
                                </CardContent>
                            </Card>
                        })}
                        <Card className="group h-full bg-transparent cursor-pointer border-dashed border-2">
                            <CardContent className="flex flex-col p-3 gap-2 items-center justify-center">
                                <PlusCircle className="text-muted-foreground group-hover:text-foreground transition-all ease-in-out duration-300"/>
                                <span className="text-muted-foreground group-hover:text-foreground transition-all ease-in-out duration-300">Add new wallet</span>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                <div className="col-span-1">
                    {/* <Card>
                        <CardHeader>
                            <CardTitle>Recent Transactions</CardTitle>
                            <CardDescription>Shows your transaction history based on the specified time.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            recent transactions
                        </CardContent>
                    </Card> */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Account Usage</CardTitle>
                            <CardDescription>Displays the usage of each account.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <AccountUsage/>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </main>
    </div>
}