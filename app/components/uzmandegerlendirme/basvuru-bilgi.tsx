"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  
  Search,
  
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";



const BasvuruBilgi = () => {

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl font-bold flex items-center justify-center gap-2 cursor-pointer hover:text-blue-600 transition-colors duration-200">
          Başvuru Bilgileri
        </CardTitle>
        <div 
           className="flex items-center gap-2">
          <DropdownMenu >
            <DropdownMenuTrigger asChild >
              <Button  variant="outline"><Search/></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent  className="w-56">
              
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  
                  <span>Tüm Başvuruları Sorgula</span>
                  
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
                      Başvuru Numarası
                    </div>
                  </TableCell>

                  <TableCell className="py-2 px-3 border whitespace-normal w-1/4">
                    3547896
                  </TableCell>
                  <TableCell className="font-medium py-2 px-3 border bg-secondary w-1/4">
                    <div className="flex items-center gap-2 ">Başvuru Türü</div>
                  </TableCell>

                  <TableCell className="py-2 px-3 border whitespace-normal w-1/4">
                    Yurt Dışı
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium py-2 px-3 border bg-secondary w-1/4">
                    <div className="flex items-center gap-2 ">
                      Eş Zamanlı Başvuru Durum
                    </div>
                  </TableCell>

                  <TableCell className="py-2 px-3 border whitespace-normal w-1/4"></TableCell>
                  <TableCell className="font-medium py-2 px-3 border bg-secondary w-1/4">
                    <div className="flex items-center gap-2 ">
                      YTB Burs Durumu
                    </div>
                  </TableCell>

                  <TableCell className="py-2 px-3 border whitespace-normal w-1/4">
                    Almadı
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell
                    colSpan={1}
                    className="font-medium py-2 px-3 border bg-secondary"
                  >
                    <div className="flex items-center gap-2 ">
                      Başvuru Tarihi
                    </div>
                  </TableCell>

                  <TableCell
                    colSpan={3}
                    className="py-2 px-3 border whitespace-normal"
                  >
                    12-04-2024
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    colSpan={1}
                    className="font-medium py-2 px-3 border bg-secondary "
                  >
                    <div className="flex items-center gap-2 ">
                      İzin Başlangıç Tarihi
                    </div>
                  </TableCell>

                  <TableCell
                    colSpan={3}
                    className="py-2 px-3 border whitespace-normal "
                  >
                    19-04-2024
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    colSpan={1}
                    className="font-medium py-2 px-3 border bg-secondary "
                  >
                    <div className="flex items-center gap-2 ">
                      İzin Bitiş Tarihi
                    </div>
                  </TableCell>

                  <TableCell
                    colSpan={3}
                    className="py-2 px-3 border whitespace-normal "
                  >
                    18-04-2025
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

export default BasvuruBilgi;
