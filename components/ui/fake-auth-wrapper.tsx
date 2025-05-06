import { useFakeAuth } from "@/hooks/use-fake-auth";
import { AuthState } from "@/types/fake-auth";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function FakeAuthWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();
    const authenticated = useFakeAuth((state: AuthState) => state.authentication);

    useEffect(() => {
        if (!authenticated) {
            router.push("/signin");
        } else {
            router.push("/");
        }
    }, [authenticated, router]);

    return <>{children}</>;
}