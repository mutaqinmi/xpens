import { CalendarIcon, Check, ChevronsUpDown, X } from "lucide-react";
import { useState } from "react"
import { Button } from "../ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Separator } from "../ui/separator";
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import { Checkbox } from "../ui/checkbox";
import { globalCurrencies, wallets } from "@/sandbox/dummy";

const formSchema = z.object({
    details: z.string().min(1, {
        message: "Details is required"
    }),
    amount: z.number().min(1, {
        message: "Amount is required"
    }),
    markPaid: z.boolean().default(false).optional(),
})

export default function ManageExpense(){
    const [tags, setTags] = useState<string[]>([]);
    const [date, setDate] = useState<Date>()
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            details: "",
            amount: 0,
            markPaid: false,
        },
    })
    const [globalCurrency, setGlobalCurrency] = useState("idr");

    function handleTags(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Enter") {
            const newTag = e.currentTarget.value.trim();
            if (newTag && !tags.includes(newTag)) {
                setTags([...tags, newTag]);
                e.currentTarget.value = "";
            }
        }
        
        if (e.key === "Backspace") {
            const newTags = [...tags];
            newTags.pop();
            setTags(newTags);
        }
    }

    function handleTagDelete(index: number) {
        setTags(tags.filter((_, i) => i !== index));
    }

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        console.log(tags);
    }

    return <div className="mb-8">
        <div className="flex flex-col gap-2 mb-4">
            <label className="text-sm font-semibold" htmlFor="tags">Tags</label>
            <div className="flex-wrap gap-2 items-center justify-center file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex w-full min-w-0 rounded-md border bg-transparent p-2 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm">
                {tags.map((tag, index) => {
                    return <div className="flex gap-2 bg-secondary px-2 py-1 rounded-sm items-center justify-center outline" key={index}>
                        <span className="text-nowrap">{tag}</span>
                        <Button variant="ghost" className="p-0 text-muted-foreground" size={null} onClick={() => handleTagDelete(index)}><X size={14}/></Button>
                    </div>
                })}
                <div className="flex-1 min-w-24">
                    <input type="text" name="tags" id="tags" className="outline-none w-full" onKeyDown={(e) => handleTags(e)} />
                </div>
            </div>
            <span className="text-sm text-muted-foreground">Add new tag, example: topup, transportation, internet</span>
        </div>
        <Separator className="my-4"/>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="flex gap-4 mb-4 items-center">
                    <FormField
                        control={form.control}
                        name="details"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Details</FormLabel>
                                <FormControl>
                                    <Input {...field}/>
                                </FormControl>
                                <FormDescription>Details of the expense</FormDescription>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <div className="flex flex-col gap-2 w-full">
                        <span className="text-sm font-semibold leading-none">Date</span>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className={`justify-start text-left font-normal ${!date && "text-muted-foreground"}`}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                        <span className="text-sm text-muted-foreground">Pick a date</span>
                    </div>
                </div>
                <Separator className="my-4"/>
                <div className="flex flex-col gap-2 w-full mb-4">
                    <span className="text-sm font-semibold">Account</span>
                    <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                role="combobox"
                                aria-expanded={open}
                                className="w-full justify-between"
                            >
                                {value ? wallets.find((wallet) => wallet.number === value)?.account : "Select wallet..."}
                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-full p-0">
                            <Command>
                                <CommandInput placeholder="Search wallet..." />
                                <CommandList>
                                    <CommandEmpty>No wallet found.</CommandEmpty>
                                    <CommandGroup>
                                    {wallets.map((wallet) => (
                                        <CommandItem
                                            key={wallet.number}
                                            value={wallet.number}
                                            onSelect={(currentValue) => {
                                                setValue(currentValue === value ? "" : currentValue)
                                                setOpen(false)
                                            }}
                                        >
                                            <Check className={`mr-2 h-4 w-4 ${value === wallet.number ? "opacity-100" : "opacity-0"}`}/>
                                            {wallet.account}
                                        </CommandItem>
                                    ))}
                                    </CommandGroup>
                                </CommandList>
                            </Command>
                        </PopoverContent>
                    </Popover>
                    <span className="text-sm text-muted-foreground">Select account</span>
                </div>
                <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                        <FormItem className="mb-4">
                            <FormLabel>Amount</FormLabel>
                            <div className="flex gap-2 items-center">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant={"ghost"}>
                                            <p>{globalCurrency.toUpperCase()}</p>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuLabel>Currency</DropdownMenuLabel>
                                        <DropdownMenuSeparator/>
                                        <DropdownMenuRadioGroup value={globalCurrency} onValueChange={(value: string) => setGlobalCurrency(value)}>
                                            {globalCurrencies.map((item) => (
                                                <DropdownMenuRadioItem key={item.value} value={item.value}>
                                                    {item.name}
                                                </DropdownMenuRadioItem>
                                            ))}
                                        </DropdownMenuRadioGroup>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                <FormControl>
                                    <Input type="number" {...field}/>
                                </FormControl>
                            </div>
                            <FormDescription>Expense amount</FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="markPaid"
                    render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-2 space-y-0 rounded-md border p-4 shadow">
                            <FormControl>
                                <Checkbox checked={field.value} onChange={field.onChange}/>
                            </FormControl>
                            <div className="space-y-1 leading-none">
                                <FormLabel htmlFor="markPaid">Mark as paid</FormLabel>
                                <FormDescription>Mark this expense as paid</FormDescription>
                                <FormMessage/>
                            </div>
                        </FormItem>
                    )}
                />
                <div className="w-full flex justify-end mt-6">
                    <Button type="submit">Submit</Button>
                </div>
            </form>
        </Form>
    </div>
}