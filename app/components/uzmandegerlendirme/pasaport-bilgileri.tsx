"use client";

import { Copy, Edit, Search, Share, Trash } from "lucide-react";

import { Button } from "@/components/ui/button";

import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { useState } from "react";

import Link from "next/link";

const PasaportBilgileri = () => {
  const [hovered, setHovered] = useState(false);
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle
          className="text-xl font-bold flex items-center justify-center gap-2 cursor-pointer hover:text-blue-600 transition-colors duration-200"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          Pasaport Bilgileri
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
         <div 
           className="flex items-center gap-2">
          <DropdownMenu >
            <DropdownMenuTrigger className="cursor-pointer" asChild >
              <Button  variant="outline"><Search/></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent  >
              
              <DropdownMenuGroup>
                <DropdownMenuItem className="cursor-pointer">
                  
                  <span>Ülkeye Giriş/Çıkış Kayıtları</span>
                  
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
                    <div className="flex items-center gap-2 ">
                      Pasaport Numarası
                    </div>
                  </TableCell>

                  <TableCell className="py-2 px-3 border whitespace-normal w-1/4">
                    C02899213
                  </TableCell>
                  <TableCell className="font-medium py-2 px-3 border bg-secondary w-1/4">
                    <div className="flex items-center gap-2 ">
                      Pasaport Türü
                    </div>
                  </TableCell>

                  <TableCell className="py-2 px-3 border whitespace-normal w-1/4">
                    Umuma Mahsus Pasaport
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    colSpan={1}
                    className="font-medium py-2 px-3 border bg-secondary w-1/4"
                  >
                    <div className="flex items-center gap-2 ">
                      Son Geçerlilik Tarihi
                    </div>
                  </TableCell>

                  <TableCell
                    colSpan={1}
                    className="py-2 px-3 border whitespace-normal w-1/4"
                  >
                    16-06-2031
                  </TableCell>
                  <TableCell
                    colSpan={1}
                    className="font-medium py-2 px-3 border bg-secondary w-1/4"
                  >
                    <div className="flex items-center gap-2 ">
                      Pasaport Bitimine Kalan Süre
                    </div>
                  </TableCell>

                  <TableCell
                    colSpan={1}
                    className="py-2 px-3 border whitespace-normal w-1/4"
                  >
                    4 Yıl 9 Ay 24 Gün
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell
                    colSpan={1}
                    className="font-medium py-2 px-3 border bg-secondary w-1/4"
                  >
                    <div className="flex items-center gap-2 ">Pasaport</div>
                  </TableCell>

                  <TableCell
                    colSpan={3}
                    className="py-2 px-3 border whitespace-normal w-1/4"
                  >
                    <Link href={"/3547896_pasaport.pdf"} target="_blank"
                                className="text-blue-600 hover:text-blue-600/65"
                                >
                            Pasaport
                                </Link>
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

export default PasaportBilgileri;
