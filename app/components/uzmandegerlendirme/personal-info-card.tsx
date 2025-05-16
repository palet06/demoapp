"use client";

import { useState } from "react";
import Image from "next/image";
import { Copy, Edit, MoreHorizontal, Share, Trash } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export function PersonalInfoCard() {
  const [documentType, setDocumentType] = useState("identity");
  const [hovered, setHovered] = useState(false);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle
          className="text-xl font-bold flex items-center justify-center gap-2 cursor-pointer hover:text-blue-600 transition-colors duration-200"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          Kişi Bilgileri
          {hovered && (
            <DropdownMenu open={hovered}>
              <div className="flex gap-2 ">
                <Button
                  onClick={() => alert("sdlfj")}
                  className="cursor-pointer"
                  size="sm"
                  variant="ghost"
                >
                  <Edit className="w-2 h-2" />
                </Button>
                <Button className="cursor-pointer" size="sm" variant="ghost">
                  <Copy className="w-2 h-2" />
                </Button>
                <Button className="cursor-pointer" size="sm" variant="ghost">
                  <Share className="w-2 h-2" />
                </Button>
                <Button className="cursor-pointer" size="sm" variant="ghost">
                  <Trash className="w-2 h-2 text-red-500" />
                </Button>
              </div>
            </DropdownMenu>
          )}
        </CardTitle>

        <div className="flex items-center gap-2">
          <Select value={documentType} onValueChange={setDocumentType}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Belge Türü" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="identity">Kimlik Kartı</SelectItem>
              <SelectItem value="passport">Pasaport</SelectItem>
              <SelectItem value="residence">İkamet Belgesi</SelectItem>
              <SelectItem value="driving">Sürücü Belgesi</SelectItem>
            </SelectContent>
          </Select>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">Daha fazla seçenek</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Yazdır</DropdownMenuItem>
              <DropdownMenuItem>PDF olarak indir</DropdownMenuItem>
              <DropdownMenuItem>Paylaş</DropdownMenuItem>
              <DropdownMenuItem>Düzenle</DropdownMenuItem>
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
