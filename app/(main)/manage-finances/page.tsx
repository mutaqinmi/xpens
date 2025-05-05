'use client'
import TopBar from "@/components/ui/top-bar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ManageIncome from "@/components/pages/manage-income";
import ManageExpense from "@/components/pages/manage-expense";

export default function Page() {
    return <div className="w-full">
        <TopBar/>
        <header className="my-8">
            <h1 className="text-2xl font-semibold">Manage Finances</h1>
            <p className="text-sm text-muted-foreground">Manage your finance activities.</p>
        </header>
        <main className="w-full">
            <Tabs defaultValue="income">
                <TabsList className="mb-4">
                    <TabsTrigger className="px-3" value="income">Income</TabsTrigger>
                    <TabsTrigger className="px-3" value="expense">Expense</TabsTrigger>
                </TabsList>
                <TabsContent value="income"><ManageIncome/></TabsContent>
                <TabsContent value="expense"><ManageExpense/></TabsContent>
            </Tabs>
        </main>
    </div>
}