import { StateCreator } from "zustand";
import { PersistOptions } from "zustand/middleware";

export interface AuthState {
    authentication: boolean;
    setAuthentication: (authentication: boolean) => void;
}

export type AuthPersist = (
    config: StateCreator<AuthState>,
    options: PersistOptions<AuthState>
) => StateCreator<AuthState>;