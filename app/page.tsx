'use client'

import { useTheme } from "next-themes";

export default function Page() {
    const { setTheme } = useTheme();

    return <div>
        <h1 onClick={() => setTheme("light")}>Light</h1>
        <h1 onClick={() => setTheme("dark")}>Dark</h1>
    </div>
}