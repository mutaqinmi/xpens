import { useGlobalCurrencies } from "@/hooks/use-global-currencies";
import { Button } from "./button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./dropdown-menu";
import { GlobalCurrenciesState } from "@/types/global-currencies";

export default function GlobalCurrencyButton(props: {className?: string}) {
    const globalCurrencies = useGlobalCurrencies((state: GlobalCurrenciesState) => state.globalCurrencies);
    const globalCurrency = useGlobalCurrencies((state: GlobalCurrenciesState) => state.globalCurrency);
    const setGlobalCurrency = useGlobalCurrencies((state: GlobalCurrenciesState) => state.setGlobalCurrency);

    return <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant={"ghost"} {...props}>
                <p>{globalCurrency.toUpperCase()}</p>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>Currency</DropdownMenuLabel>
            <DropdownMenuSeparator/>
            <DropdownMenuRadioGroup value={globalCurrency} onValueChange={(value) => setGlobalCurrency(value)}>
                {globalCurrencies.map((item) => (
                    <DropdownMenuRadioItem key={item.value} value={item.value}>
                        {item.name}
                    </DropdownMenuRadioItem>
                ))}
            </DropdownMenuRadioGroup>
        </DropdownMenuContent>
    </DropdownMenu>
}