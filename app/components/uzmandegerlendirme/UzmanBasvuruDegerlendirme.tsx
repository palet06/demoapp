"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

import { SettingsSidebar } from "@/app/components/uzmandegerlendirme/settings-sidebar"

import { AddressForm } from "@/app/components/uzmandegerlendirme/address-form"
import { DeleteAccountSection } from "@/app/components/uzmandegerlendirme/delete-account-form"
import { PersonalInfoCard } from "@/app/components/uzmandegerlendirme/personal-info-card"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import BasvuruBilgi from "./basvuru-bilgi"
import IletisimBilgileri from "./iletisim-bilgileri"

const UzmanBasvuruDegerlendirme =() => {
  const [visibility, setVisibility] = useState("Public")

  return (
    <div className="container mx-auto "> 
      <div className="flex flex-col space-y-4 p-4 md:p-8 ">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Settings - With Sidebar</h1>
            <p className="text-sm text-muted-foreground">Intuitive Access to In-Depth Customization</p>
          </div>
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-1">
                  {visibility} <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setVisibility("Public")}>Public</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setVisibility("Private")}>Private</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setVisibility("Restricted")}>Restricted</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button>Get Started</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <SettingsSidebar />
          </div>
          <div className="flex flex-col space-y-4 md:col-span-3">
            <div id="section-basvuru-bilgi">
              <BasvuruBilgi/>
            </div>
            <div id="section-personel">
              <PersonalInfoCard />
            </div>
            <div id="section-iletisim-bilgileri">
              <IletisimBilgileri />
            </div>
            <div id="section-address-form">
              <AddressForm />
            </div>
             
            <div id="section-delete-account">
              <DeleteAccountSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default UzmanBasvuruDegerlendirme
