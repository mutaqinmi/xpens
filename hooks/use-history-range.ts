import { HistoryRangePersist, HistoryRangeState } from "@/types/history-range";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useHistoryRange = create<HistoryRangeState>((persist as HistoryRangePersist)((set) => ({
    historyRange: [
        { value: "1w", name: "Last 7 Days" },
        { value: "1m", name: "Last 30 Days" },
        { value: "3m", name: "Last 3 Months" },
        { value: "6m", name: "Last 6 Months" },
        { value: "1y", name: "Last 1 Year" },
        { value: "all", name: "All Time" },
    ],
    history: "1m",
    setHistory: (history) => set({ history }),
}), {
    name: "history-range",
}));