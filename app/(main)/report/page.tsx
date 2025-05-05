'use client'
import TopBar from "@/components/ui/top-bar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GenerateReport from "@/components/pages/generate-report";
import RecentReport from "@/components/pages/recent-report";

export default function Page() {
    return <div className="w-full">
        <TopBar/>
        <header className="my-8">
            <h1 className="text-2xl font-semibold">Manage Reports</h1>
            <p className="text-sm text-muted-foreground">Manage your e-statement reports.</p>
        </header>
        <main className="w-full flex flex-col gap-4">
            <Tabs defaultValue="generate">
                <TabsList className="mb-4">
                    <TabsTrigger className="px-3" value="generate">Generate</TabsTrigger>
                    <TabsTrigger className="px-3" value="recent">Recent</TabsTrigger>
                </TabsList>
                <TabsContent value="generate"><GenerateReport/></TabsContent>
                <TabsContent value="recent"><RecentReport/></TabsContent>
            </Tabs>
        </main>
    </div>
}