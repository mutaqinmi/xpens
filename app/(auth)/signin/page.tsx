'use client'

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { KeyRound } from "lucide-react";
import ThemeButton from "@/components/ui/theme-button";
import { useRouter } from "next/navigation";

const formSchema = z.object({
    username: z.string().min(1, {
        message: "Username is required",
    }).max(20, {
        message: "Username must be less than 20 characters",
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters",
    }).max(20, {
        message: "Password must be less than 20 characters",
    }),
})

export default function Page(){
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);

        router.push("/");
    }

    return <div className="h-screen w-screen flex items-center justify-center">
        <ThemeButton className="absolute top-4 right-4" />
        <Card className="w-80 bg-card">
            <CardHeader>
                <CardTitle><h1 className="text-2xl">Sign In</h1></CardTitle>
                <CardDescription>Sign in to your account.</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem className="mb-4">
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Username" {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem className="mb-4">
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        {/* 
                                        
                                        <Input className="[&::-ms-reveal]:hidden" type="password" placeholder="Password" {...field} /> 
                                        
                                        [&::-ms-reveal]:hidden is used to hide the password reveal button in Edge and IE.
                                        The password reveal button is a button that allows the user to see the password they are typing.

                                        you can use it or remove it

                                        */}
                                        <Input type="password" placeholder="Password" {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full mt-6">Sign In</Button>
                        <p className="text-center text-sm my-3 text-muted-foreground">or</p>
                        <Button variant="outline" type="button" className="w-full">
                            <KeyRound/>
                            <p className="font-normal">Continue with <span className="font-bold">Passkey</span></p>
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    </div>
}