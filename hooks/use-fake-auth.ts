import { AuthPersist, AuthState } from "@/types/fake-auth";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useFakeAuth = create<AuthState>((persist as AuthPersist)((set) => ({
    authentication: false,
    setAuthentication: (authentication) => set({ authentication }),
}), {
    name: "fake-authentication",
}));