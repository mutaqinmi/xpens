import { AccountsPersist, AccountsState } from "@/types/accounts";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAccounts = create<AccountsState>((persist as AccountsPersist)((set) => ({
    accounts: [
        {
            value: "all",
            name: "All Account",
        },
        {
            value: "jago",
            name: "Bank Jago",
        },
        {
            value: "bca",
            name: "BCA",
        },
        {
            value: "paypal",
            name: "PayPal",
        },
        {
            value: "gopay",
            name: "GoPay",
        }
    ],
    account: "all",
    setAccount: (account: string) => set(() => ({ account })),
}), {
    name: "accounts",
}))
