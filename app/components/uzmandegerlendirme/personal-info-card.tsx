"use client";

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

export function PersonalInfoCard() {
  const [hovered, setHovered] = useState(false);
  const [activePopover, setActivePopover] = useState<string | null>(null);
  const [notes, setNotes] = useState({
    approve: "",
    reject: "",
    help: "",
  });

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
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle
          className="text-xl font-bold flex items-center justify-center gap-2 cursor-pointer hover:text-blue-600 transition-colors duration-200"
          onMouseEnter={() => handleMouseEnter()}
          onMouseLeave={() => handleMouseLeave()}
        >
          Kişi Bilgileri
          {hovered && (
            <div
              className={`flex gap-2 transition-opacity duration-200 ${
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
                    <Check className="h-5 w-5" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80" align="start">
                  <div className="space-y-2">
                    <h3 className="font-medium">Onay Notu</h3>
                    <Textarea
                      placeholder="Onay notunuzu buraya yazın..."
                      value={notes.approve}
                      onChange={(e) =>
                        setNotes({ ...notes, approve: e.target.value })
                      }
                      className="min-h-[100px]"
                    />
                    <div className="flex justify-end">
                      <Button
                        size="sm"
                        className="bg-green-600 hover:bg-green-700"
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
                    <X className="h-5 w-5" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80" align="start">
                  <div className="space-y-2">
                    <h3 className="font-medium">Red Notu</h3>
                    <Textarea
                      placeholder="Red notunuzu buraya yazın..."
                      value={notes.reject}
                      onChange={(e) =>
                        setNotes({ ...notes, reject: e.target.value })
                      }
                      className="min-h-[100px]"
                    />
                    <div className="flex justify-end">
                      <Button size="sm" className="bg-red-600 hover:bg-red-700">
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
                    <HelpCircle className="h-5 w-5" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80" align="start">
                  <div className="space-y-2">
                    <h3 className="font-medium">Yardım Notu</h3>
                    <Textarea
                      placeholder="Yardım notunuzu buraya yazın..."
                      value={notes.help}
                      onChange={(e) =>
                        setNotes({ ...notes, help: e.target.value })
                      }
                      className="min-h-[100px]"
                    />
                    <div className="flex justify-end">
                      <Button
                        size="sm"
                        className="bg-orange-600 hover:bg-orange-700"
                      >
                        Kaydet
                      </Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
            // <DropdownMenu open={hovered}>
            //   <div className="flex gap-2 ">
            //     <Button
            //       onClick={() => alert("sdlfj")}
            //       className="cursor-pointer"
            //       size="sm"
            //       variant="ghost"
            //     >
            //       <SquareCheck className="size-5 text-green-600" />
            //     </Button>
            //     <Button className="cursor-pointer" size="sm" variant="ghost">
            //       <SquareX className="size-5 text-red-500" />
            //     </Button>
            //     <Button className="cursor-pointer" size="sm" variant="ghost">
            //       <CircleHelp className="size-5 text-orange-500" />
            //     </Button>
            //   </div>
            // </DropdownMenu>
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
              </TableBody>
            </Table>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
