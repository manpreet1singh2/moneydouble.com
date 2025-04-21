"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Trophy, Wallet, Users, Settings, HelpCircle, LogOut, User, Gift, Bell } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"

export function DashboardSidebar() {
  const pathname = usePathname()

  const menuItems = [
    {
      title: "Dashboard",
      icon: Home,
      href: "/dashboard",
    },
    {
      title: "Games",
      icon: Trophy,
      href: "/dashboard/games",
      badge: "New",
    },
    {
      title: "Tournaments",
      icon: Trophy,
      href: "/dashboard/tournaments",
    },
    {
      title: "Wallet",
      icon: Wallet,
      href: "/dashboard/wallet",
    },
    {
      title: "Referrals",
      icon: Users,
      href: "/dashboard/referrals",
    },
    {
      title: "Rewards",
      icon: Gift,
      href: "/dashboard/rewards",
    },
    {
      title: "Notifications",
      icon: Bell,
      href: "/dashboard/notifications",
      badge: "3",
    },
  ]

  const bottomMenuItems = [
    {
      title: "Profile",
      icon: User,
      href: "/dashboard/profile",
    },
    {
      title: "Settings",
      icon: Settings,
      href: "/dashboard/settings",
    },
    {
      title: "Help & Support",
      icon: HelpCircle,
      href: "/dashboard/help",
    },
  ]

  return (
    <Sidebar>
      <SidebarHeader className="border-b">
        <div className="flex items-center gap-2 px-4 py-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
            SP
          </div>
          <div className="font-semibold">SkillPlay</div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.title}>
                <Link href={item.href}>
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                  {item.badge && (
                    <Badge variant="default" className="ml-auto">
                      {item.badge}
                    </Badge>
                  )}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
        <SidebarSeparator className="my-4" />
        <SidebarMenu>
          {bottomMenuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.title}>
                <Link href={item.href}>
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/logout">
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarTrigger className="absolute right-4 top-4 md:hidden" />
    </Sidebar>
  )
}
