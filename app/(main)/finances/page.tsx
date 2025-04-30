'use client'
import Finances from "@/components/pages/finances";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TopBar from "@/components/ui/top-bar";

export default function Page() {
    return <div className="w-full">
        <TopBar/>
        <header className="my-8">
            <h1 className="text-2xl font-semibold">Finances</h1>
            <p className="text-sm text-muted-foreground">Manage your finance activities.</p>
        </header>
        <main className="w-full flex flex-col gap-4">
            <Tabs defaultValue="1m">
                <TabsList className="mb-4">
                    <TabsTrigger className="px-3" value="7d">7 Days</TabsTrigger>
                    <TabsTrigger className="px-3" value="1m">1 Month</TabsTrigger>
                    <TabsTrigger className="px-3" value="3m">3 Months</TabsTrigger>
                    <TabsTrigger className="px-3" value="6m">6 Months</TabsTrigger>
                    <TabsTrigger className="px-3" value="1y">1 Year</TabsTrigger>
                </TabsList>
                <TabsContent value="7d"><Finances range="7d"/></TabsContent>
                <TabsContent value="1m"><Finances range="1m"/></TabsContent>
                <TabsContent value="3m"><Finances range="3m"/></TabsContent>
                <TabsContent value="6m"><Finances range="6m"/></TabsContent>
                <TabsContent value="1y"><Finances range="1y"/></TabsContent>
            </Tabs>
        </main>
    </div>
}