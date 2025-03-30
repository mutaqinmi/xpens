import { create } from "zustand";
import { persist } from "zustand/middleware";
import { HideBalancePersist, HideBalanceState } from "@/types/hide-balance";

export const useHideBalance = create<HideBalanceState>((persist as HideBalancePersist)((set) => ({
    isBalanceHidden: false,
    setHideBalance: () => set((state: HideBalanceState) => ({
        isBalanceHidden: !state.isBalanceHidden,
    }))
}), {
    name: "hide-balance",
}))