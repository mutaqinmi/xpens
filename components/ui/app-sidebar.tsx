'use client'

import { Banknote, ChartPie, FileClock, HandCoins, LogOut, MoreVerticalIcon, TrendingUp, Wallet } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar"
import { Card } from "./card"
import { Avatar, AvatarFallback, AvatarImage } from "./avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./dropdown-menu"
import { useFakeAuth } from "@/hooks/use-fake-auth"
import { AuthState } from "@/types/fake-auth"
import { useRouter } from "next/navigation"

// Menu items.
const menu = [
  {
    title: "Overview",
    url: "/",
    icon: ChartPie,
  },
  {
    title: "Finances",
    url: "/finances",
    icon: HandCoins,
  },
  {
    title: "Wallets",
    url: "/wallets",
    icon: Wallet,
  },
]

export function AppSidebar() {
  const router = useRouter();
  const { isMobile } = useSidebar();
  const setAuthentication = useFakeAuth((state: AuthState) => state.setAuthentication);

  function signOut(){
    setAuthentication(false);
    router.push("/signin");
  }

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="flex m-2">
            <div className="bg-primary text-primary-foreground aspect-square w-10 h-10 rounded-lg flex justify-center items-center"><Banknote/></div>
            <div className="flex flex-col justify-center ml-3">
              <p className="font-bold">Xpens</p>
              <p className="text-xs text-muted-foreground">Finance App</p>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menu.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Manage Finance</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/manage-finances">
                    <Banknote/>
                    <span>Income & Outcome</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Financial Report</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/report">
                    <FileClock/>
                    <span>E - Statement</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Card className="bg-primary text-primary-foreground flex flex-row gap-4 items-center py-2 px-3 mb-2 rounded-md">
          <TrendingUp size={50}/>
          <div className="flex flex-col w-full">
            <p className="font-medium">USD/IDR</p>
            <p className="text-sm">16,560</p>
          </div>
          <div className="flex flex-col text-end">
            <p className="font-medium">+0.36%</p>
            <p className="text-sm">+988.60</p>
          </div>
        </Card>
        <SidebarSeparator/>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="py-6 flex gap-3" size={"lg"}>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">John Doe</span>
                    <span className="truncate text-xs text-muted-foreground">
                      johndoe@gmail.com
                    </span>
                  </div>
                  <MoreVerticalIcon/>
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                side={isMobile ? "bottom" : "right"}
                align="end"
                sideOffset={16}
              >
                <DropdownMenuLabel className="p-0 font-normal">
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage src={"https://github.com/shadcn.png"} />
                      <AvatarFallback className="rounded-lg">JD</AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-medium">John Doe</span>
                      <span className="truncate text-xs text-muted-foreground">
                        johndoe@gmail.com
                      </span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuItem onClick={() => signOut()}>
                  <LogOut />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

