import { useHistoryRange } from "@/hooks/use-history-range";
import { Button } from "./button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./dropdown-menu";
import { HistoryRangeState } from "@/types/history-range";

export default function HistoryRangeButton(props: {className?: string}) {
    const historyRange = useHistoryRange((state: HistoryRangeState) => state.historyRange);
    const history = useHistoryRange((state: HistoryRangeState) => state.history);
    const setHistory = useHistoryRange((state: HistoryRangeState) => state.setHistory);
    const getInitialHistory = historyRange.find((item) => item.value === history)!.name;

    return <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant={"secondary"} {...props}>
                <p>{getInitialHistory}</p>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuRadioGroup value={history} onValueChange={(value) => setHistory(value)}>
                {historyRange.map((item) => (
                    <DropdownMenuRadioItem key={item.value} value={item.value}>
                        {item.name}
                    </DropdownMenuRadioItem>
                ))}
            </DropdownMenuRadioGroup>
        </DropdownMenuContent>
    </DropdownMenu>
}