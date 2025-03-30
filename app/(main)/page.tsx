'use client'
import Overview from "@/components/pages/overview";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TopBar from "@/components/ui/top-bar";

export default function Page() {
    return <div className="w-full">
        <TopBar/>
        <header className="my-8">
            <h1 className="text-2xl font-semibold">Overview</h1>
            <p className="text-sm text-muted-foreground">Summary of your income and expenses.</p>
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
                <TabsContent value="7d"><Overview range="7d"/></TabsContent>
                <TabsContent value="1m"><Overview range="1m"/></TabsContent>
                <TabsContent value="3m"><Overview range="3m"/></TabsContent>
                <TabsContent value="6m"><Overview range="6m"/></TabsContent>
                <TabsContent value="1y"><Overview range="1y"/></TabsContent>
            </Tabs>
        </main>
    </div>
}