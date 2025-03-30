import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import ThemeButton from "@/components/ui/theme-button";
import HideBalanceButton from "./hide-balance-button";
import GlobalCurrencyButton from "./global-currency-button";
import AccountButton from "./accounts-button";

export default function TopBar(){
    return <>
        <div className="flex justify-between items-center py-2">
            <div className="h-5 flex gap-2 items-center">
                <SidebarTrigger/>
                <Separator orientation="vertical"/>
                <p className="ml-2">Good Morning, <span className="font-bold">John Doe</span>!</p>
            </div>
            <div className="h-5 flex gap-2 items-center">
                <AccountButton/>
                <Separator orientation="vertical"/>
                <GlobalCurrencyButton/>
                <HideBalanceButton/>
                <ThemeButton/>
            </div>
        </div>
        <Separator className="mt-2"/>
    </>
}