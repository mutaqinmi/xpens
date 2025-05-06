'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ManageIncome from "@/components/pages/manage-income";
import ManageExpense from "@/components/pages/manage-expense";
import Header from "@/components/ui/header";
import FakeAuthWrapper from "@/components/ui/fake-auth-wrapper";

export default function Page() {
    return <FakeAuthWrapper>
        <Header title="Manage Finances" subtitle="Manage your finance activities.">
            <Tabs defaultValue="income">
                <TabsList className="mb-4">
                    <TabsTrigger className="px-3" value="income">Income</TabsTrigger>
                    <TabsTrigger className="px-3" value="expense">Expense</TabsTrigger>
                </TabsList>
                <TabsContent value="income"><ManageIncome/></TabsContent>
                <TabsContent value="expense"><ManageExpense/></TabsContent>
            </Tabs>
        </Header>
    </FakeAuthWrapper>
}