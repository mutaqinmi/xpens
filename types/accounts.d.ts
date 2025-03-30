import { StateCreator } from "zustand";
import { PersistOptions } from "zustand/middleware";

interface Accounts {
    value: string;
    name: string;
}

export interface AccountsState {
    accounts: Accounts[];
    account: string;
    setAccount: (account: string) => void;
}

export type AccountsPersist = (
    config: StateCreator<AccountsState>,
    options: PersistOptions<AccountsState>
) => StateCreator<AccountsState>;