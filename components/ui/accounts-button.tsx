import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useAccounts } from "@/hooks/use-accounts";
import { AccountsState } from "@/types/accounts";

export default function AccountButton(props: {className?: string}){
    const accounts = useAccounts((state: AccountsState) => state.accounts);
    const account = useAccounts((state: AccountsState) => state.account);
    const setAccount = useAccounts((state: AccountsState) => state.setAccount);
    const accountName = accounts.find((item) => item.value === account)!.name;

    return <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant={"ghost"} className={`${props.className} flex justify-center items-center gap-2`}>
                <span>{accountName}</span>
                <ChevronDown/>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>Accounts</DropdownMenuLabel>
            <DropdownMenuSeparator/>
            <DropdownMenuRadioGroup value={account} onValueChange={(value) => setAccount(value)}>
                {accounts.map((item) => (
                    <DropdownMenuRadioItem key={item.value} value={item.value}>
                        {item.name}
                    </DropdownMenuRadioItem>
                ))}
            </DropdownMenuRadioGroup>
        </DropdownMenuContent>
    </DropdownMenu>
}