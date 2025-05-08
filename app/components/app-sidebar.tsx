"use client"

import type * as React from "react"
import {
  
  BookOpen,
  
  
  Dock,

  GalleryVerticalEnd,
 
  Settings2,
  ShieldUser,
 
} from "lucide-react"

import { NavMain } from "./nav-main"

import { NavUser } from "./nav-user"
import { TeamSwitcher } from "./team-switcher"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "e-İzin Portal",
      logo: GalleryVerticalEnd,
      plan: "İç Kullanıcı",
    },
    
  ],
  navMain: [
    {
      title: "Uzman İşlemleri",
      url: "#",
      icon: Dock,
      isActive: true,
      items: [
        {
          title: "Uzman İş Listesi",
          url: "#",
        },
        {
          title: "Onaylanmayan İşlemler",
          url: "#",
        },
        {
          title: "Güncelleme Takip",
          url: "#",
        },
        {
          title: "Dış Kurum Görüş Takip",
          url: "#",
        },
      ],
    },
    {
      title: "Şube Müdürü İş Listesi",
      url: "#",
      icon: ShieldUser,
      items: [
        {
          title: "Onay/Ret Bekleyen İşlemler",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Daire Başkanı",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
