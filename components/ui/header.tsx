import TopBar from "@/components/ui/top-bar";

export default function Header({title, subtitle, children} : {title: string; subtitle: string; children: React.ReactNode}) {
    return <div className="w-full">
        <TopBar/>
        <header className="my-8">
            <h1 className="text-2xl font-semibold">{title}</h1>
            <p className="text-sm text-muted-foreground">{subtitle}</p>
        </header>
        <main className="w-full flex flex-col gap-4">
            {children}
        </main>
    </div>
}