"use client";

import { useDegerlendirmeStore } from "@/app/store/store";
import { useState } from "react";
import Image from "next/image";
import { Check, HelpCircle, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Search } from "lucide-react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";

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

export function PersonalInfoCard() {
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
            sectionKisiBilgileri: {
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
           

            sectionKisiBilgileri: {
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
          className="text-xl font-bold flex items-center justify-center gap-2 cursor-pointer hover:text-blue-600 transition-colors duration-200"
          onMouseEnter={() => handleMouseEnter()}
          onMouseLeave={() => handleMouseLeave()}
        >
          Kişi Bilgileri
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
                  <span>NVİ Kayıt Sorgula</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0">
            <div className="w-32 h-40 bg-muted rounded-md overflow-hidden">
              <Image
                src="/3547896.png"
                alt="Kişi fotoğrafı"
                width={128}
                height={160}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="flex-grow">
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell
                    colSpan={1}
                    className="font-medium py-2 px-3 border bg-secondary w-1/4"
                  >
                    <div className="flex items-center gap-2 ">Adı</div>
                  </TableCell>
                  <TableCell
                    colSpan={1}
                    className="py-2 px-3 border whitespace-normal"
                  >
                    Murat
                  </TableCell>
                  <TableCell
                    colSpan={1}
                    className="font-medium py-2 px-3 border bg-secondary "
                  >
                    <div className="flex items-center gap-2 ">Soyadı</div>
                  </TableCell>
                  <TableCell
                    colSpan={1}
                    className="py-2 px-3 border whitespace-normal"
                  >
                    Hayaloğlu
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    colSpan={1}
                    className="font-medium py-2 px-3 border bg-secondary "
                  >
                    <div className="flex items-center gap-2 ">Baba Adı</div>
                  </TableCell>
                  <TableCell
                    colSpan={1}
                    className="py-2 px-3 border whitespace-normal"
                  >
                    Ali Haydar
                  </TableCell>
                  <TableCell
                    colSpan={1}
                    className="font-medium py-2 px-3 border bg-secondary "
                  >
                    <div className="flex items-center gap-2 ">Ana Adı</div>
                  </TableCell>
                  <TableCell
                    colSpan={1}
                    className="py-2 px-3 border whitespace-normal"
                  >
                    Leyla
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    colSpan={1}
                    className="font-medium py-2 px-3 border bg-secondary "
                  >
                    <div className="flex items-center gap-2 ">Cinsiyeti</div>
                  </TableCell>
                  <TableCell
                    colSpan={1}
                    className="py-2 px-3 border whitespace-normal"
                  >
                    Erkek
                  </TableCell>
                  <TableCell
                    colSpan={1}
                    className="font-medium py-2 px-3 border bg-secondary "
                  >
                    <div className="flex items-center gap-2 ">Medeni Hali</div>
                  </TableCell>
                  <TableCell
                    colSpan={1}
                    className="py-2 px-3 border whitespace-normal"
                  >
                    Evli
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    colSpan={1}
                    className="font-medium py-2 px-3 border bg-secondary "
                  >
                    <div className="flex items-center gap-2 ">Doğum Yeri</div>
                  </TableCell>
                  <TableCell
                    colSpan={1}
                    className="py-2 px-3 border whitespace-normal"
                  >
                    Ankara
                  </TableCell>
                  <TableCell
                    colSpan={1}
                    className="font-medium py-2 px-3 border bg-secondary "
                  >
                    <div className="flex items-center gap-2 ">Uyruk</div>
                  </TableCell>
                  <TableCell
                    colSpan={1}
                    className="py-2 px-3 border whitespace-normal"
                  >
                    T.C.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    colSpan={1}
                    className="font-medium py-2 px-3 border bg-secondary "
                  >
                    <div className="flex items-center gap-2 ">Doğum Tarihi</div>
                  </TableCell>
                  <TableCell
                    colSpan={3}
                    className="py-2 px-3 border whitespace-normal"
                  >
                    26-04-1995 (40 yıl 10 gün önce)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    colSpan={1}
                    className="font-medium py-2 px-3 border bg-secondary "
                  >
                    <div className="flex items-center gap-2 ">
                      Yabancı Kimlik Numarası
                    </div>
                  </TableCell>
                  <TableCell
                    colSpan={3}
                    className="py-2 px-3 border whitespace-normal"
                  ></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    colSpan={1}
                    className="font-medium py-2 px-3 border bg-secondary "
                  >
                    <div className="flex items-center gap-2 ">
                      Yurtdışı Referans Numarası
                    </div>
                  </TableCell>
                  <TableCell
                    colSpan={3}
                    className="py-2 px-3 border whitespace-normal"
                  ></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    colSpan={1}
                    className="font-medium py-2 px-3 border bg-secondary "
                  >
                    <div className="flex items-center gap-2 ">Eş Adı</div>
                  </TableCell>
                  <TableCell
                    colSpan={1}
                    className="py-2 px-3 border whitespace-normal"
                  >
                    yyyyy
                  </TableCell>
                  <TableCell
                    colSpan={1}
                    className="font-medium py-2 px-3 border bg-secondary "
                  >
                    <div className="flex items-center gap-2 ">Eş Soyadı</div>
                  </TableCell>
                  <TableCell
                    colSpan={1}
                    className="py-2 px-3 border whitespace-normal"
                  >
                    hhhh
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    colSpan={1}
                    className="font-medium py-2 px-3 border bg-secondary "
                  >
                    <div className="flex items-center gap-2 ">Eş Uyruğu</div>
                  </TableCell>
                  <TableCell
                    colSpan={1}
                    className="py-2 px-3 border whitespace-normal"
                  >
                    T.C.
                  </TableCell>
                  <TableCell
                    colSpan={1}
                    className="font-medium py-2 px-3 border bg-secondary "
                  >
                    <div className="flex items-center gap-2 ">
                      Eş T.C. Kimlik Numarası
                    </div>
                  </TableCell>
                  <TableCell
                    colSpan={1}
                    className="py-2 px-3 border whitespace-normal"
                  >
                    12345678941
                  </TableCell>
                 
                </TableRow>

                <TableRow >
                  <TableCell colSpan={4} className="font-medium py-2 px-3 border bg-secondary">

                   <Button variant="outline" >
                    NVİ Kayıt Sorgula
                  </Button>
                  </TableCell>
                </TableRow>
                
                
              </TableBody>
            </Table>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
