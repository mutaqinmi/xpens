'use client'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";
import { FileDown } from "lucide-react";
import RecentTransactionTable from "../tables/recent-transaction-table";

export default function GenerateReport(){
    return <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
            <RecentTransactionTable/>
        </div>
        <div className="col-span-1">
            <Card className="sticky top-4">
                <CardHeader>
                    <CardTitle>E-Statement</CardTitle>
                    <CardDescription>Download your financial statements for the last month.</CardDescription>
                </CardHeader>
                <CardContent className="w-full">
                    <Button className="w-full">
                        <FileDown/>
                        <span>Download</span>
                    </Button>
                </CardContent>
            </Card>
        </div>
    </div>
}