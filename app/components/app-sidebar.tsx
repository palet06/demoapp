"use client";

import type * as React from "react";
import {
  BookOpen,
  Dock,
  GalleryVerticalEnd,
  Settings2,
  ShieldUser,
} from "lucide-react";

import { NavMain } from "./nav-main";

import { NavUser } from "./nav-user";
import { TeamSwitcher } from "./team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "uigm.user",
    email: "uigm.user@csgb.gov.tr",
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
          url: "/dashboard/uzmanislistesi",
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
        {
          title: "Müdür Onayında Bekleyenler",
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
          url: "/dashboard/smlistesi",
        },
        {
          title: "Güncelleme Onay Bekleyen",
          url: "#",
        },
        {
          title: "Başkanda Onaayında Bekleyenler",
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
          title: "İş Listesi",
          url: "/dashboard/dblistesi",
        },
        {
          title: "E-İmza Listesi",
          url: "#",
        },
        {
          title: "Onaylanmayan işlemler",
          url: "#",
        },
        {
          title: "Makam Onayında Bekleyenler",
          url: "#",
        },
      ],
    },
    {
      title: "Ayarlar",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Manuel Başvuru Ekle",
          url: "#",
        },
      ],
    },
  ],
};

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
  );
}
