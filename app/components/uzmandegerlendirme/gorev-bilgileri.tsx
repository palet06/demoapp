"use client"



import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Copy, Edit, MoreHorizontal, Share, Trash } from "lucide-react";


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const GorevBilgileri = () => {
  const [hovered, setHovered] = useState(false);
    const [documentType, setDocumentType] = useState("identity");
  return (
     <Card >
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle
          className="text-xl font-bold flex items-center justify-center gap-2 cursor-pointer hover:text-blue-600 "
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          İşyerinde Yapılacak Görev Bilgileri
          {hovered && (
            <DropdownMenu open={hovered}>
              <div className="flex gap-2 ">
                <Button
                  onClick={() => alert("sdlfj")}
                  className="cursor-pointer"
                  size="sm"
                  variant="ghost"
                >
                  <Edit className="w-2 h-2 text-green-600" />
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
              
              <div className="flex-grow">
                <Table>
                  <TableBody>
                   
                      <TableRow >
                        
                            <TableCell className="font-medium py-2 px-3 border bg-secondary w-1/4"> 
                              <div className="flex items-center gap-2 ">
                              Görev/Meslek
                               
                              </div>
                            </TableCell>
                            
                            <TableCell colSpan={3}
                              className="py-2 px-3 border whitespace-normal w-1/4"
                             
                             
                            >
                              Servis Elemanı(Garson)

                            </TableCell>
                           
                            
                            
                         
                      
                      </TableRow>
                      <TableRow >
                        
                            <TableCell className="font-medium py-2 px-3 border bg-secondary w-1/4"> 
                              <div className="flex items-center gap-2 ">
                             Çalışma Tipi
                               
                              </div>
                            </TableCell>
                            
                            <TableCell
                              className="py-2 px-3 border whitespace-normal w-1/4"
                             
                             
                            >
                              Süreli
                            </TableCell>
                            <TableCell className="font-medium py-2 px-3 border bg-secondary w-1/4"> 
                              <div className="flex items-center gap-2 ">
                              Çalışma Süresi
                               
                              </div>
                            </TableCell>
                            
                            <TableCell
                              className="py-2 px-3 border whitespace-normal w-1/4"
                             
                             
                            >
                              1 Yıl
                            </TableCell>
                            
                            
                         
                      
                      </TableRow>
                      <TableRow >
                        
                            <TableCell className="font-medium py-2 px-3 border bg-secondary w-1/4"> 
                              <div className="flex items-center gap-2 ">
                             Çalışma İzin Türü
                               
                              </div>
                            </TableCell>
                            
                            <TableCell
                              className="py-2 px-3 border whitespace-normal w-1/4"
                             
                             
                            >
                             Biş işyerine bağlı izin
                            </TableCell>
                            <TableCell className="font-medium py-2 px-3 border bg-secondary w-1/4"> 
                              <div className="flex items-center gap-2 ">
                              Alacağı Aylı Brüt Ücret
                               
                              </div>
                            </TableCell>
                            
                            <TableCell
                              className="py-2 px-3 border whitespace-normal w-1/4"
                             
                             
                            >
                              20.002,5 ₺
                            </TableCell>
                            
                            
                         
                      
                      </TableRow>
                      
                      
                      <TableRow >
                        
                            <TableCell colSpan={1} className="font-medium py-2 px-3 border bg-secondary"> 
                              <div className="flex items-center gap-2 ">
                              İşyerinde Yapacağı Görev
                               
                              </div>
                            </TableCell>
                            
                            <TableCell colSpan={3}
                              className="py-2 px-3 border whitespace-normal"
                             
                             
                            >
                              OTELİMİZDE GARSON OLARAK ÇALIŞACAKTIR
                            </TableCell>
                           
                            
                         
                      
                      </TableRow>
                      <TableRow >
                        
                            <TableCell colSpan={1} className="font-medium py-2 px-3 border bg-secondary "> 
                              <div className="flex items-center gap-2 ">
                              Türk Vatandaşı <br/>Yerine Yabancı İstihdamı <br/>Talebinin Gerekçesi
                               
                              </div>
                            </TableCell>
                            
                            <TableCell colSpan={3}
                              className="py-2 px-3 border whitespace-normal "
                             
                             
                            >
                              FİRMAMIZDA GELEN MİSAFİRLERİMİZE KALİTELİ HİZMET VEREBİLMEK ADINA, GEREKLİ BİLGİ VE YÖNLENDİRMELERİN TAM OLARAK YAPILABİLMESİ, İHTİYAÇLARA DOĞRU CEVAP VERİLEBİLMESİ, YABANCI DİLİNİN DE SAYESİNDE ONLARI DAHA İYİ ANLAYARAK MÜŞTERİLERİ MEMNUNİYETİ ARTTIRABİLMEMİZ İÇİN İŞİMİZ GEREĞİ ARZ TALEP DOĞRULTUSUNDA YABANCI PERSONEL ÇALIŞTIRMAK ZORUNDAYIZ. İŞYERİ OLARAK IS HACMİMİZİ ARTIRABİLMEK, ÜLKE EKONOMİMİZE DAHA FAZLA KATKIDA BULUNABİLMEK, BÜYÜYEREK TÜRK PERSONELİ İSTİHDAMINI ARTIRMAK AMACIYLA YABANCI PERSONEL ÇALIŞTIRMAK İSTİYORUZ.
                            </TableCell>
                           
                            
                         
                      
                      </TableRow>
                      
                  
                  </TableBody>

                  
                </Table>
              </div>
            </div>
          </CardContent>
        </Card>
  )
}

export default GorevBilgileri