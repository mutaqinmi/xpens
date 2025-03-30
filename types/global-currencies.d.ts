import { StateCreator } from "zustand";
import { PersistOptions } from "zustand/middleware";

interface Currencies {
    value: string;
    name: string;
    locale: string;
}

export interface GlobalCurrenciesState {
    globalCurrencies: Currencies[];
    globalCurrency: string;
    setGlobalCurrency: (globalCurrency: string) => void;
}

export type GlobalCurrenciesPersist = (
    config: StateCreator<GlobalCurrenciesState>,
    options: PersistOptions<GlobalCurrenciesState>
) => StateCreator<GlobalCurrenciesState>;