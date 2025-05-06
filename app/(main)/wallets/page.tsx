'use client'
import Wallets from "@/components/pages/wallets";
import Header from "@/components/ui/header";

export default function Page() {
    return <Header title="Wallets" subtitle="Manage your wallets.">
        <Wallets/>
    </Header>
}