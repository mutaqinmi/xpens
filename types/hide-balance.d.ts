import { StateCreator } from "zustand";
import { PersistOptions } from "zustand/middleware";

export interface HideBalanceState {
    isBalanceHidden: boolean;
    setHideBalance: (isBalanceHidden: boolean) => void;
}

export type HideBalancePersist = (
    config: StateCreator<HideBalanceState>,
    options: PersistOptions<HideBalanceState>
) => StateCreator<HideBalanceState>;