/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Clock, CornerUpRight } from "lucide-react";

import { SettingsSidebar } from "@/app/components/uzmandegerlendirme/settings-sidebar";

import { PersonalInfoCard } from "@/app/components/uzmandegerlendirme/personal-info-card";
import { Button } from "@/components/ui/button";

import BasvuruBilgi from "./basvuru-bilgi";
import IletisimBilgileri from "./iletisim-bilgileri";
import PasaportBilgileri from "./pasaport-bilgileri";
import EgitimBilgileri from "./egitim-bilgileri";
import GorevBilgileri from "./gorev-bilgileri";
import IsverenKurumBilgileri from "./isveren-kurum-bilgileri";
import Belgeler from "./belgeler";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";

const UzmanBasvuruDegerlendirme = ({basvuruNo,kullanici}:{basvuruNo:string,kullanici:string}) => {
  return (
    <div className="container mx-auto ">
      <div className="flex flex-col space-y-4 p-4 md:p-8 ">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">
              İlk Başvuru Değerlendirme Ekranı
            </h1>
            <p className="text-sm text-muted-foreground">
              İşlem Bekleyen Başvuru
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Popover>
              <PopoverTrigger className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-9 px-4 py-2 has-[>svg]:px-3  gap-1 bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 cursor-pointer">
                <Clock />
                Hatırlat
              </PopoverTrigger>

              <PopoverContent>
                <div className="flex justify-between items-center mt-2 w-full">
                  <Button className="cursor-pointer w-full" variant="default">
                    <CornerUpRight />
                    Tamam
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <SettingsSidebar />
          </div>
          <div className="flex flex-col space-y-4 md:col-span-3">
            <div id="section-basvuru-bilgi">
              <BasvuruBilgi />
            </div>
            <div id="section-personel">
              <PersonalInfoCard />
            </div>
            <div id="section-iletisim-bilgileri">
              <IletisimBilgileri />
            </div>
            <div id="section-pasaport-bilgileri">
              <PasaportBilgileri />
            </div>
            <div id="section-egitim-bilgileri">
              <EgitimBilgileri />
            </div>
            <div id="section-gorev-bilgileri">
              <GorevBilgileri />
            </div>
            <div id="section-isveren-kurum-bilgileri">
              <IsverenKurumBilgileri />
            </div>
            <div id="section-belgeler">
              <Belgeler />
            </div>
            <div id="section-degerlendirme-sonuc-islemi" className="w-full flex items-center justify-end">
              <Link href={`/dashboard/degerlendirme/form/${kullanici}`}> 
              <Button >
                
                Değerlendirmeyi Kaydet</Button>
              </Link>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UzmanBasvuruDegerlendirme;
