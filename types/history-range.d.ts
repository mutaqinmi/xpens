import { StateCreator } from "zustand";
import { PersistOptions } from "zustand/middleware";

interface HistoryRange {
    value: string;
    name: string;
}

export interface HistoryRangeState {
    historyRange: HistoryRange[];
    history: string;
    setHistory: (history: string) => void;
}

export type HistoryRangePersist = (
    config: StateCreator<HistoryRangeState>,
    options: PersistOptions<HistoryRangeState>
) => StateCreator<HistoryRangeState>;