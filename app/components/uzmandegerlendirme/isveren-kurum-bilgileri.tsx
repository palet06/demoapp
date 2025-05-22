"use client";
import { useDegerlendirmeStore } from "@/app/store/store";
type NoteOnayType = {
  onayMessage: string | null;
  onayErrorMessage: string | null;
};
type NoteRetType = {
  retMessage: string | null;
  retErrorMessage: string | null;
};
type NoteKararsizType = {
  kararsizMessage: string | null;
  kararsizErrorMessage: string | null;
};

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";


import { Check, HelpCircle, Search, X } from "lucide-react";




import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useState } from "react";

import { Button } from "@/components/ui/button";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

const IsverenKurumBilgileri = () => {
  const degerlendirmeKaydet = useDegerlendirmeStore(
         (state) => state.setDegerlendirme
       );
     
       const [noteOnay, setNoteOnay] = useState<NoteOnayType>({
           onayMessage: null,
           onayErrorMessage: null,
         });
         const [noteRet, setNoteRet] = useState<NoteRetType>({
           retMessage: null,
           retErrorMessage: null,
         });
       
         const [noteKararsiz, setNoteKararsiz] = useState<NoteKararsizType>({
           kararsizMessage: null,
           kararsizErrorMessage: null,
         });
     
       
         const [borderColor, setBorderColor] = useState<string>("");
     
         const handleNotes = (whichNote: string) => {
         switch (whichNote) {
           case "onay":
             if (
               noteOnay.onayMessage !== "" &&
               noteOnay.onayMessage !== null &&
               noteOnay.onayMessage.length < 10
             ) {
               setNoteOnay({
                 ...noteOnay,
                 onayErrorMessage: "Onay notunuz en az 10 karakter olmalı",
               });
             } else {
               //setDegerlendirme({ degerendirenKullanici:"murat hayaloğlu",sectionKisiBilgileri:{sonuc:"onay",note:noteOnay.onayMessage?noteOnay.onayMessage:""}})
               setNoteOnay({
                 onayMessage: noteOnay.onayMessage,
                 onayErrorMessage: "",
               });
     
               setBorderColor("border-1 border-green-500");
               degerlendirmeKaydet("murat.hayaloglu", {
                 sectionIsverenBilgileri: {
                   note: noteOnay.onayMessage ? noteOnay.onayMessage : "",
                   sonuc: "onay",
                   css: borderColor,
                   anchor: "#section-personel",
                 },
               });
     
               setHovered(false);
             }
     
             break;
     
           case "ret":
             if (!noteRet.retMessage || noteRet.retMessage.length < 10) {
               setNoteRet({
                 ...noteRet,
                 retErrorMessage: "Ret notunuz en az 10 karakter olmalı",
               });
             } else {
               setNoteRet({ retMessage: noteRet.retMessage, retErrorMessage: "" });
               setBorderColor("border-1 border-red-500");
               degerlendirmeKaydet("murat.hayaloglu", {         
     
                 sectionIsverenBilgileri: {
                   note: noteRet.retMessage ? noteRet.retMessage : "",
                   sonuc: "ret",
                   css: "border-1 border-red-500",
                   anchor: "#section-personel",
                 },
               });
     
               setHovered(false);
             }
     
             break;
     
           case "kararsiz":
             if (
               !noteKararsiz.kararsizMessage ||
               noteKararsiz.kararsizMessage.length < 10
             ) {
               setNoteKararsiz({
                 ...noteKararsiz,
                 kararsizErrorMessage: "Kararsız notunuz en az 10 karakter olmalı",
               });
             } else {
               setNoteKararsiz({
                 kararsizMessage: noteKararsiz.kararsizMessage,
                 kararsizErrorMessage: "",
               });
               setBorderColor("border-1 border-orange-300");
               //setDegerlendirme({degerendirenKullanici:"murat.hayaloğlu",sectionKisiBilgileri:{sonuc:"kararsiz",note:noteKararsiz.kararsizMessage?noteKararsiz.kararsizMessage:""}})
     
               setHovered(false);
             }
     
             break;
     
           default:
             break;
         }
       };
       const [hovered, setHovered] = useState(false);
       const [activePopover, setActivePopover] = useState<string | null>(null);
     
     
        const handleMouseEnter = () => setHovered(true);
       const handleMouseLeave = () => {
         if (!activePopover) {
           setHovered(false);
         }
       };
     
     
        const handleOpenChange = (open: boolean, id: string) => {
         if (open) {
           setActivePopover(id);
         } else {
           setActivePopover(null);
           if (!hovered) {
             setHovered(false);
           }
         }
       };

  return (
    <Card className={`${borderColor}`}>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle
          className="text-xl font-bold flex items-center justify-center gap-2 cursor-pointer hover:text-blue-600 "
          onMouseEnter={() => handleMouseEnter()}
          onMouseLeave={() => handleMouseLeave()}
        >
          İşveren/Kurum Bilgileri
          {hovered && (
             <div
              className={`flex gap-5 transition-opacity duration-200 ${
                hovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <Popover
                onOpenChange={(open) => handleOpenChange(open, "approve")}
              >
                <PopoverTrigger asChild>
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-6 w-6 p-0 border-0 text-green-500 hover:text-green-600 hover:bg-green-50"
                  >
                    <Check className="size-5" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80" align="start">
                  <div className="space-y-2">
                    <h3 className="font-medium">Onay Notu</h3>
                    <Textarea
                      placeholder="Onay notunuzu buraya yazın..."
                      value={noteOnay.onayMessage ? noteOnay.onayMessage : ""}
                      onChange={(e) =>
                        setNoteOnay({
                          onayMessage: e.target.value,
                          onayErrorMessage: "",
                        })
                      }
                      className="min-h-[100px]"
                    />
                    <div className="flex justify-end">
                      {noteOnay.onayErrorMessage && (
                        <p className="text-red-500 text-sm">
                          {noteOnay.onayErrorMessage}
                        </p>
                      )}

                      <Button
                        size="sm"
                        className="bg-green-600 hover:bg-green-700"
                        onClick={() => handleNotes("onay")}
                      >
                        Kaydet
                      </Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>

              <Popover
                onOpenChange={(open) => handleOpenChange(open, "reject")}
              >
                <PopoverTrigger asChild>
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-6 w-6 p-0 border-0 text-red-500 hover:text-red-600 hover:bg-red-50"
                  >
                    <X className="size-5" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80" align="start">
                  <div className="space-y-2">
                    <h3 className="font-medium">Red Notu</h3>
                    <Textarea
                      placeholder="Red notunuzu buraya yazın..."
                      value={noteRet.retMessage ? noteRet.retMessage : ""}
                      onChange={(e) =>
                        setNoteRet({
                          retMessage: e.target.value,
                          retErrorMessage: "",
                        })
                      }
                      className="min-h-[100px]"
                    />
                    <div className="flex justify-end">
                      {noteRet.retErrorMessage && (
                        <p className="text-red-500 text-sm">
                          {noteRet.retErrorMessage}
                        </p>
                      )}
                      <Button
                        size="sm"
                        className="bg-red-600 hover:bg-red-700"
                        onClick={() => handleNotes("ret")}
                      >
                        Kaydet
                      </Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>

              <Popover onOpenChange={(open) => handleOpenChange(open, "help")}>
                <PopoverTrigger asChild>
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-6 w-6 p-0 border-0 text-orange-500 hover:text-orange-600 hover:bg-orange-50"
                  >
                    <HelpCircle className="size-5" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80" align="start">
                  <div className="space-y-2">
                    <h3 className="font-medium">Yardım Notu</h3>
                    <Textarea
                      placeholder="Yardım notunuzu buraya yazın..."
                      value={
                        noteKararsiz.kararsizMessage
                          ? noteKararsiz.kararsizMessage
                          : ""
                      }
                      onChange={(e) =>
                        setNoteKararsiz({
                          kararsizMessage: e.target.value,
                          kararsizErrorMessage: "",
                        })
                      }
                      className="min-h-[100px]"
                    />
                    <div className="flex justify-end">
                      {noteKararsiz.kararsizErrorMessage && (
                        <p className="text-red-500 text-sm">
                          {noteKararsiz.kararsizErrorMessage}
                        </p>
                      )}
                      <Button
                        size="sm"
                        className="bg-orange-600 hover:bg-orange-700"
                        onClick={() => handleNotes("kararsiz")}
                      >
                        Kaydet
                      </Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          )}
        </CardTitle>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer" asChild>
              <Button variant="outline">
                <Search />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem className="cursor-pointer">
                <span>Bakımı Yapılacak Kişi</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                <span>İşverenin Eşine Ait Başvuru </span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                <span>Mükellefiyet Bilgisi</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                <span>Vergi Borcu Bilgileri</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                <span>İş Sağlığı Güvenliği Belgesi</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                <span>Turizm İşletme Belgesi</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                <span>Ticaret Sicil Gazetesi</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                <span>İşveren Çalışma İzinleri</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                <span>İşçi Sayısı Bilgileri</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-grow">
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium py-2 px-3 border bg-secondary w-1/4">
                    <div className="flex items-center gap-2 ">Tescil No</div>
                  </TableCell>

                  <TableCell className="py-2 px-3 border whitespace-normal w-1/4">
                    25510010111077180071225000
                  </TableCell>
                  <TableCell className="font-medium py-2 px-3 border bg-secondary w-1/4">
                    <div className="flex items-center gap-2 ">Şirket Türü</div>
                  </TableCell>

                  <TableCell className="py-2 px-3 border whitespace-normal w-1/4">
                    Anonim Şirket
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    colSpan={1}
                    className="font-medium py-2 px-3 border bg-secondary w-1/4"
                  >
                    <div className="flex items-center gap-2 ">İşveren NACE</div>
                  </TableCell>

                  <TableCell
                    colSpan={3}
                    className="py-2 px-3 border whitespace-normal w-1/4"
                  >
                    5510 - Oteller ve benzeri konaklama yerleri
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    colSpan={1}
                    className="font-medium py-2 px-3 border bg-secondary w-1/4"
                  >
                    <div className="flex items-center gap-2 ">
                      Başvuruda Alınan İşyeri Unvanı
                    </div>
                  </TableCell>

                  <TableCell
                    colSpan={3}
                    className="py-2 px-3 border whitespace-normal w-1/4"
                  >
                    UTE HOLDİNG ANONİM ŞİRKETİ
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell
                    colSpan={1}
                    className="font-medium py-2 px-3 border bg-secondary"
                  >
                    <div className="flex items-center gap-2 ">Telefon</div>
                  </TableCell>

                  <TableCell
                    colSpan={3}
                    className="py-2 px-3 border whitespace-normal"
                  >
                    5398998889
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium py-2 px-3 border bg-secondary w-1/4">
                    <div className="flex items-center gap-2 ">
                      İşveren E-Bildirge <br /> Yetkilisi Ad Soyad
                    </div>
                  </TableCell>

                  <TableCell className="py-2 px-3 border whitespace-normal w-1/4">
                    GÖKAY OKTAY
                  </TableCell>
                  <TableCell className="font-medium py-2 px-3 border bg-secondary w-1/4">
                    <div className="flex items-center gap-2 ">
                      İşveren Sorumlu Ad Soyad
                    </div>
                  </TableCell>

                  <TableCell className="py-2 px-3 border whitespace-normal w-1/4">
                    İSMET GÜRLEK
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium py-2 px-3 border bg-secondary w-1/4">
                    <div className="flex items-center gap-2 ">
                      İşveren Güncel E-Posta
                    </div>
                  </TableCell>

                  <TableCell className="py-2 px-3 border whitespace-normal w-1/4">
                    personel@belconti.com
                  </TableCell>
                  <TableCell className="font-medium py-2 px-3 border bg-secondary w-1/4">
                    <div className="flex items-center gap-2 ">
                      İşveren Başvurudaki E-Posta
                    </div>
                  </TableCell>

                  <TableCell className="py-2 px-3 border whitespace-normal w-1/4">
                    personel@belconti.com
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium py-2 px-3 border bg-secondary w-1/4">
                    <div className="flex items-center gap-2 ">
                      Kuruluş Tarihi
                    </div>
                  </TableCell>

                  <TableCell className="py-2 px-3 border whitespace-normal w-1/4">
                    01-03-2006
                  </TableCell>
                  <TableCell className="font-medium py-2 px-3 border bg-secondary w-1/4">
                    <div className="flex items-center gap-2 ">MERSİS No</div>
                  </TableCell>

                  <TableCell className="py-2 px-3 border whitespace-normal w-1/4">
                    0897000671300012
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium py-2 px-3 border bg-secondary w-1/4">
                    <div className="flex items-center gap-2 ">
                      Vergi Dairesi
                    </div>
                  </TableCell>

                  <TableCell className="py-2 px-3 border whitespace-normal w-1/4">
                    34276
                  </TableCell>
                  <TableCell className="font-medium py-2 px-3 border bg-secondary w-1/4">
                    <div className="flex items-center gap-2 ">
                      Vergi Numarası
                    </div>
                  </TableCell>

                  <TableCell className="py-2 px-3 border whitespace-normal w-1/4">
                    8970006713
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    colSpan={1}
                    className="font-medium py-2 px-3 border bg-secondary w-1/4"
                  >
                    <div className="flex items-center gap-2 ">
                      İşyeri Adresi
                    </div>
                  </TableCell>

                  <TableCell
                    colSpan={3}
                    className="py-2 px-3 border whitespace-normal w-1/4"
                  >
                    BELEK MAH. İSKELE CAD. ANTALYA SERİK [No:10/0]
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    colSpan={1}
                    className="font-medium py-2 px-3 border bg-secondary w-1/4"
                  >
                    <div className="flex items-center gap-2 ">
                      Yabancının Çalışacağı Adres
                    </div>
                  </TableCell>

                  <TableCell
                    colSpan={3}
                    className="py-2 px-3 border whitespace-normal w-1/4"
                  >
                    BELEK MAHALLESİ İSKELE CADDESİ CADDESİ Dış kapı no :10 İç
                    kapı no : Z01 SERİK / ANTALYA
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    colSpan={1}
                    className="font-medium py-2 px-3 border bg-secondary w-1/4"
                  >
                    <div className="flex items-center gap-2 ">
                      Sermaye Yapısı
                    </div>
                  </TableCell>

                  <TableCell
                    colSpan={3}
                    className="py-2 px-3 border whitespace-normal w-1/4"
                  >
                    Yerli
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium py-2 px-3 border bg-secondary w-1/4">
                    <div className="flex items-center gap-2 ">
                      Kayıtlı Sermaye (TL)
                    </div>
                  </TableCell>

                  <TableCell className="py-2 px-3 border whitespace-normal w-1/4">
                    300.000.000,00 TL
                  </TableCell>
                  <TableCell className="font-medium py-2 px-3 border bg-secondary w-1/4">
                    <div className="flex items-center gap-2 ">
                      Ödenmiş Sermaye (TL)
                    </div>
                  </TableCell>

                  <TableCell className="py-2 px-3 border whitespace-normal w-1/4">
                    300.000.000,00 TL
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    colSpan={1}
                    className="font-medium py-2 px-3 border bg-secondary w-1/4"
                  >
                    <div className="flex items-center gap-2 ">
                      Başvuru İle İlgili Sorumlular
                    </div>
                  </TableCell>

                  <TableCell
                    colSpan={3}
                    className="py-2 px-3 border whitespace-normal w-1/4"
                  >
                    Eklenecek
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default IsverenKurumBilgileri;
