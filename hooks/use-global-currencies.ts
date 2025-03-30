import { GlobalCurrenciesPersist, GlobalCurrenciesState } from "@/types/global-currencies"
import { create } from "zustand"
import { persist } from "zustand/middleware"

export const useGlobalCurrencies = create<GlobalCurrenciesState>((persist as GlobalCurrenciesPersist)((set) => ({
    globalCurrencies: [
        {
            value: "idr",
            name: "IDR",
            locale: "id-ID",
        },
        {
            value: "usd",
            name: "USD",
            locale: "en-US",
        },
        {
            value: "jpy",
            name: "JPY",
            locale: "ja-JP",
        },
        {
            value: "eur",
            name: "EUR",
            locale: "de-DE",
        }
    ],
    globalCurrency: "idr",
    setGlobalCurrency: (value: string) => set(() => ({ globalCurrency: value })),
}), {
    name: "global-currencies",
}))