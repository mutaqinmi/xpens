'use client'
import Wallets from "@/components/pages/wallets";
import FakeAuthWrapper from "@/components/ui/fake-auth-wrapper";
import Header from "@/components/ui/header";

export default function Page() {
    return <FakeAuthWrapper>
        <Header title="Wallets" subtitle="Manage your wallets.">
            <Wallets/>
        </Header>
    </FakeAuthWrapper>
}