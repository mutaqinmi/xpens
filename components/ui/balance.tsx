import { useGlobalCurrencies } from "@/hooks/use-global-currencies";
import { useHideBalance } from "@/hooks/use-hide-balance";
import { formatCurrency, getCurrencySymbol } from "@/lib/currency-formatter";
import { GlobalCurrenciesState } from "@/types/global-currencies";
import { HideBalanceState } from "@/types/hide-balance";

export default function Balance({ children, className }: { children: string; className?: string }) {
    const isBalanceHidden = useHideBalance((state: HideBalanceState) => state.isBalanceHidden);
    const globalCurrencies = useGlobalCurrencies((state: GlobalCurrenciesState) => state.globalCurrencies);
    const globalCurrency = useGlobalCurrencies((state: GlobalCurrenciesState) => state.globalCurrency);
    const getLocale = (globalCurrency: string) => globalCurrencies.find((currency) => currency.value === globalCurrency)!.locale

    return <span className={className}>
        {isBalanceHidden ? formatCurrency(parseInt(children), globalCurrency, getLocale(globalCurrency)) : <span>{getCurrencySymbol(getLocale(globalCurrency), globalCurrency)} &#9679;&#9679;&#9679;</span>}
    </span>
}