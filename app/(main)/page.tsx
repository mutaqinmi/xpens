'use client'

import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import ThemeButton from "@/components/ui/theme-button";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();

    return <div className="w-full">
        <div className="flex justify-between items-center">
            <div className="h-5 flex gap-2 items-center">
                <SidebarTrigger/>
                <Separator orientation="vertical"/>
                <p className="ml-2">Good Morning, <span className="font-bold">John Doe</span>!</p>
            </div>
            <ThemeButton/>
        </div>
    </div>
}