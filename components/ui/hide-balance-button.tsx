import { Button } from "./button";
import { useHideBalance } from "@/hooks/use-hide-balance";
import { HideBalanceState } from "@/types/hide-balance";
import { Eye, EyeClosed } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";

export default function HideBalanceButton(props: {className?: string}){
    const isBalanceHidden = useHideBalance((state: HideBalanceState) => state.isBalanceHidden);
    const setHideBalance = useHideBalance((state: HideBalanceState) => state.setHideBalance);

    return <TooltipProvider>
        <Tooltip>
            <TooltipTrigger asChild>
                <Button variant={"ghost"} {...props} onClick={() => setHideBalance(!isBalanceHidden)}>
                    {!isBalanceHidden ? <EyeClosed className="h-[1.2rem] w-[1.2rem]"/> : <Eye className="h-[1.2rem] w-[1.2rem]"/>}
                </Button>
            </TooltipTrigger>
            <TooltipContent>
                <p>Hide Balance</p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
}