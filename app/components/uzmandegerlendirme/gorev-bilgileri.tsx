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
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { useState } from "react";

import { Button } from "@/components/ui/button";

const GorevBilgileri = () => {
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
          degerlendirmeKaydet("kemal.yetisir", {
            sectionGorevBilgileri: {
              note: noteOnay.onayMessage ? noteOnay.onayMessage : "",
              sonuc: "onay",
              css: borderColor,
              anchor: "#section-gorev-bilgileri",
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
          degerlendirmeKaydet("kemal.yetisir", {
            sectionGorevBilgileri: {
              note: noteRet.retMessage ? noteRet.retMessage : "",
              sonuc: "ret",
              css: "border-1 border-red-500",
              anchor: "#section-gorev-bilgileri",
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
          degerlendirmeKaydet("kemal.yetisir", {
            sectionGorevBilgileri: {
              note: noteKararsiz.kararsizMessage
                ? noteKararsiz.kararsizMessage
                : "",
              sonuc: "kararsiz",
              css: "border-1 border-orange-500",
              anchor: "#section-gorev-bilgileri",
            },
          });
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
          İşyerinde Yapılacak Görev Bilgileri
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
              <DropdownMenuGroup>
                <DropdownMenuItem className="cursor-pointer">
                  <span>Sgorta Hizmet Dökümü</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  <span>MYK Yetki Belgesi</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  <span>İşe Giriş/Çıkış Bildirimi</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
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
                    <div className="flex items-center gap-2 ">Görev/Meslek</div>
                  </TableCell>

                  <TableCell
                    colSpan={3}
                    className="py-2 px-3 border whitespace-normal w-1/4"
                  >
                    Servis Elemanı(Garson)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium py-2 px-3 border bg-secondary w-1/4">
                    <div className="flex items-center gap-2 ">Çalışma Tipi</div>
                  </TableCell>

                  <TableCell className="py-2 px-3 border whitespace-normal w-1/4">
                    Süreli
                  </TableCell>
                  <TableCell className="font-medium py-2 px-3 border bg-secondary w-1/4">
                    <div className="flex items-center gap-2 ">
                      Çalışma Süresi
                    </div>
                  </TableCell>

                  <TableCell className="py-2 px-3 border whitespace-normal w-1/4">
                    1 Yıl
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium py-2 px-3 border bg-secondary w-1/4">
                    <div className="flex items-center gap-2 ">
                      Çalışma İzin Türü
                    </div>
                  </TableCell>

                  <TableCell className="py-2 px-3 border whitespace-normal w-1/4">
                    Biş işyerine bağlı izin
                  </TableCell>
                  <TableCell className="font-medium py-2 px-3 border bg-secondary w-1/4">
                    <div className="flex items-center gap-2 ">
                      Alacağı Aylı Brüt Ücret
                    </div>
                  </TableCell>

                  <TableCell className="py-2 px-3 border whitespace-normal w-1/4">
                    20.002,5 ₺
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell
                    colSpan={1}
                    className="font-medium py-2 px-3 border bg-secondary"
                  >
                    <div className="flex items-center gap-2 ">
                      İşyerinde Yapacağı Görev
                    </div>
                  </TableCell>

                  <TableCell
                    colSpan={3}
                    className="py-2 px-3 border whitespace-normal"
                  >
                    OTELİMİZDE GARSON OLARAK ÇALIŞACAKTIR
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    colSpan={1}
                    className="font-medium py-2 px-3 border bg-secondary "
                  >
                    <div className="flex items-center gap-2 ">
                      Türk Vatandaşı <br />
                      Yerine Yabancı İstihdamı <br />
                      Talebinin Gerekçesi
                    </div>
                  </TableCell>

                  <TableCell
                    colSpan={3}
                    className="py-2 px-3 border whitespace-normal "
                  >
                    FİRMAMIZDA GELEN MİSAFİRLERİMİZE KALİTELİ HİZMET VEREBİLMEK
                    ADINA, GEREKLİ BİLGİ VE YÖNLENDİRMELERİN TAM OLARAK
                    YAPILABİLMESİ, İHTİYAÇLARA DOĞRU CEVAP VERİLEBİLMESİ,
                    YABANCI DİLİNİN DE SAYESİNDE ONLARI DAHA İYİ ANLAYARAK
                    MÜŞTERİLERİ MEMNUNİYETİ ARTTIRABİLMEMİZ İÇİN İŞİMİZ GEREĞİ
                    ARZ TALEP DOĞRULTUSUNDA YABANCI PERSONEL ÇALIŞTIRMAK
                    ZORUNDAYIZ. İŞYERİ OLARAK IS HACMİMİZİ ARTIRABİLMEK, ÜLKE
                    EKONOMİMİZE DAHA FAZLA KATKIDA BULUNABİLMEK, BÜYÜYEREK TÜRK
                    PERSONELİ İSTİHDAMINI ARTIRMAK AMACIYLA YABANCI PERSONEL
                    ÇALIŞTIRMAK İSTİYORUZ.
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

export default GorevBilgileri;
