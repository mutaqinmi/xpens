'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GenerateReport from "@/components/pages/generate-report";
import RecentReport from "@/components/pages/recent-report";
import Header from "@/components/ui/header";
import FakeAuthWrapper from "@/components/ui/fake-auth-wrapper";

export default function Page() {
    return <FakeAuthWrapper>
        <Header title="Reports" subtitle="Generate and view your reports.">
            <Tabs defaultValue="generate">
                <TabsList className="mb-4">
                    <TabsTrigger className="px-3" value="generate">Generate</TabsTrigger>
                    <TabsTrigger className="px-3" value="recent">Recent</TabsTrigger>
                </TabsList>
                <TabsContent value="generate"><GenerateReport/></TabsContent>
                <TabsContent value="recent"><RecentReport/></TabsContent>
            </Tabs>
        </Header>
    </FakeAuthWrapper>
}