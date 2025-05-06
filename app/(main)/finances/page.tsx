'use client'
import Finances from "@/components/pages/finances";
import FakeAuthWrapper from "@/components/ui/fake-auth-wrapper";
import Header from "@/components/ui/header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Page() {
    return <FakeAuthWrapper>
        <Header title="Finances" subtitle="Summary of your income and expenses.">
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
        </Header>
    </FakeAuthWrapper>
}