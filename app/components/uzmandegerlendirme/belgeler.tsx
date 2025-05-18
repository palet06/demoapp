"use client"



import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Copy, Edit, MoreHorizontal, Share, Trash } from "lucide-react";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import Link from "next/link";

const Belgeler = () => {
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
          Ek Bilgi ve Belgeler
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
                    <TableRow>
                        
                        <TableCell colSpan={4} className="font-medium text-center py-2 px-3 border border-r-secondary bg-secondary "> 
                            Başvuru Belge Listesi
                        </TableCell>

                    </TableRow>
                   
                      <TableRow >
                        
                            <TableCell className="font-medium py-2 px-3 border border-r-secondary bg-secondary w-1/4"> 
                              <div className="flex items-center gap-2 ">
                              Belge Türü
                               
                              </div>
                            </TableCell>
                            
                            <TableCell
                              className="font-medium text-center py-2 px-3 border border-l-secondary border-r-secondary bg-secondary w-2/4"
                             
                             
                            >
                              Açıklama
                            </TableCell>
                            <TableCell className="font-medium py-2 px-3 border bg-secondary w-1/4"> 
                              <div className="flex items-center gap-2 ">
                              Yükleme Tarihi
                               
                              </div>
                            </TableCell>
                            
                            
                            
                            
                         
                      
                      </TableRow>
                      <TableRow >                        
                            <TableCell className="py-2 px-3 border border-l border-r-white whitespace-normal w-1/4"> 
                              <div className="flex items-center gap-2  ">
                                <Link href={"/3547896_basvuru_dilekcesi.pdf"} target="_blank"
                                className="text-blue-600 hover:text-blue-600/65"
                                >
                             Başvuru Dilekçesi
                                </Link>
                               
                              </div>
                            </TableCell>
                            
                            <TableCell
                              className="py-2 px-3 border-white whitespace-normal w-1/4">
                             
                            </TableCell>
                            <TableCell className="py-2 px-3 border-r border-l-white whitespace-normal w-1/4"> 
                              <div className="flex items-center gap-2 ">
                              12-04-2024
                               
                              </div>
                            </TableCell>
                      </TableRow>
                      <TableRow >                        
                            <TableCell className="py-2 px-3 border border-l border-r-white whitespace-normal w-1/4"> 
                              <div className="flex items-center gap-2  ">
                            <Link href={"/3547896_pasaport.pdf"} target="_blank"
                                className="text-blue-600 hover:text-blue-600/65"
                                >
                            Pasaport
                                </Link>
                               
                              </div>
                            </TableCell>
                            
                            <TableCell
                              className="py-2 px-3 border-white whitespace-normal w-1/4">
                             
                            </TableCell>
                            <TableCell className="py-2 px-3 border-r border-l-white whitespace-normal w-1/4"> 
                              <div className="flex items-center gap-2 ">
                              12-04-2024
                               
                              </div>
                            </TableCell>
                      </TableRow>
                      <TableRow >                        
                            <TableCell className="py-2 px-3 border border-l border-r-white whitespace-normal w-1/4"> 
                              <div className="flex items-center gap-2  ">
                            <Link href={"/3547896_issozlesmesi.pdf"} target="_blank"
                                className="text-blue-600 hover:text-blue-600/65"
                                >
                             İş Sözleşmesi
                                </Link>
                               
                              </div>
                            </TableCell>
                            
                            <TableCell
                              className="py-2 px-3 border-white whitespace-normal w-1/4">
                             
                            </TableCell>
                            <TableCell className="py-2 px-3 border-r border-l-white whitespace-normal w-1/4"> 
                              <div className="flex items-center gap-2 ">
                              12-04-2024
                               
                              </div>
                            </TableCell>
                      </TableRow>
                      <TableRow >                        
                            <TableCell className="py-2 px-3 border border-l border-r-white whitespace-normal w-1/4"> 
                              <div className="flex items-center gap-2  ">
                            <Link href={"/3547896_diploma.pdf"} target="_blank"
                                className="text-blue-600 hover:text-blue-600/65"
                                >
                             Diploma
                                </Link>
                               
                              </div>
                            </TableCell>
                            
                            <TableCell
                              className="py-2 px-3 border-white whitespace-normal w-1/4">
                             
                            </TableCell>
                            <TableCell className="py-2 px-3 border-r border-l-white whitespace-normal w-1/4"> 
                              <div className="flex items-center gap-2 ">
                              12-04-2024
                               
                              </div>
                            </TableCell>
                      </TableRow>
                      <TableRow >                        
                            <TableCell className="py-2 px-3 border border-l border-r-white whitespace-normal w-1/4"> 
                              <div className="flex items-center gap-2  ">
                            <Link href={"/3547896_basvuru_ek_belge.pdf"} target="_blank"
                                className="text-blue-600 hover:text-blue-600/65"
                                >
                             Başvuru Ek Belge
                                </Link>
                               
                              </div>
                            </TableCell>
                            
                            <TableCell
                              className="py-2 px-3 border-white whitespace-normal w-1/4">
                             
                            </TableCell>
                            <TableCell className="py-2 px-3 border-r border-l-white whitespace-normal w-1/4"> 
                              <div className="flex items-center gap-2 ">
                              12-04-2024
                               
                              </div>
                            </TableCell>
                      </TableRow>
                      <TableRow >                        
                            <TableCell className="py-2 px-3 border border-l border-r-white whitespace-normal w-1/4"> 
                              <div className="flex items-center gap-2  ">
                           <Link href={"/3547896_ise_giris_bildirim.pdf"} target="_blank"
                                className="text-blue-600 hover:text-blue-600/65"
                                >
                             İşe Giriş Bildirim
                                </Link>
                               
                              </div>
                            </TableCell>
                            
                            <TableCell
                              className="py-2 px-3 border-white whitespace-normal w-1/4">
                             
                            </TableCell>
                            <TableCell className="py-2 px-3 border-r border-l-white whitespace-normal w-1/4"> 
                              <div className="flex items-center gap-2 ">
                              12-04-2024
                               
                              </div>
                            </TableCell>
                      </TableRow>
                      <TableRow >                        
                            <TableCell className="py-2 px-3 border border-l border-r-white whitespace-normal w-1/4"> 
                              <div className="flex items-center gap-2  ">
                            <Link href={"/3547896_izin_sonlandirma.pdf"} target="_blank"
                                className="text-blue-600 hover:text-blue-600/65"
                                >
                             İzin Sonlandırma Dilekçesi
                                </Link>
                               
                              </div>
                            </TableCell>
                            
                            <TableCell
                              className="py-2 px-3 border-white whitespace-normal w-1/4">
                             
                            </TableCell>
                            <TableCell className="py-2 px-3 border-r border-l-white whitespace-normal w-1/4"> 
                              <div className="flex items-center gap-2 ">
                              18-11-2024
                               
                              </div>
                            </TableCell>
                      </TableRow>

                      <TableRow>
                        
                        <TableCell colSpan={4} className="font-medium text-center py-2 px-3 border border-r-secondary bg-secondary "> 
                            İşveren Belgeleri
                        </TableCell>

                    </TableRow>
                   
                      <TableRow >
                        
                            <TableCell className="font-medium py-2 px-3 border border-r-secondary bg-secondary w-1/4"> 
                              <div className="flex items-center gap-2 ">
                              Belge Türü
                               
                              </div>
                            </TableCell>
                            
                            <TableCell
                              className="font-medium text-center py-2 px-3 border border-l-secondary border-r-secondary bg-secondary w-2/4"
                             
                             
                            >
                              Açıklama
                            </TableCell>
                            <TableCell className="font-medium py-2 px-3 border bg-secondary w-1/4"> 
                              <div className="flex items-center gap-2 ">
                              Yükleme Tarihi
                               
                              </div>
                            </TableCell>
                            
                            
                            
                            
                         
                      
                      </TableRow>
                      <TableRow >                        
                            <TableCell className="py-2 px-3 border border-l border-r-white whitespace-normal w-1/4"> 
                              <div className="flex items-center gap-2  ">
                             <Link href={"/3547896_faaliyet_belgesi.pdf"} target="_blank"
                                className="text-blue-600 hover:text-blue-600/65"
                                >
                             Faaliyet Belgesi
                                </Link>
                               
                              </div>
                            </TableCell>
                            
                            <TableCell
                              className="py-2 px-3 border-white whitespace-normal w-1/4">
                             
                            </TableCell>
                            <TableCell className="py-2 px-3 border-r border-l-white whitespace-normal w-1/4"> 
                              <div className="flex items-center gap-2 ">
                              12-04-2024
                               
                              </div>
                            </TableCell>
                      </TableRow>
                      <TableRow >                        
                            <TableCell className="py-2 px-3 border border-l border-r-white whitespace-normal w-1/4"> 
                              <div className="flex items-center gap-2  ">
                              <Link href={"/3547896_gazete.pdf"} target="_blank"
                                className="text-blue-600 hover:text-blue-600/65"
                                >
                             Ticaret Sicil Gazetesi
                                </Link>
                               
                              </div>
                            </TableCell>
                            
                            <TableCell
                              className="py-2 px-3 border-white whitespace-normal w-1/4">
                             
                            </TableCell>
                            <TableCell className="py-2 px-3 border-r border-l-white whitespace-normal w-1/4"> 
                              <div className="flex items-center gap-2 ">
                              12-04-2024
                               
                              </div>
                            </TableCell>
                      </TableRow>
                      <TableRow >                        
                            <TableCell className="py-2 px-3 border border-l border-r-white whitespace-normal w-1/4"> 
                              <div className="flex items-center gap-2  ">
                            <Link href={"/3547896_bilanco.pdf"} target="_blank"
                                className="text-blue-600 hover:text-blue-600/65"
                                >
                             Bilanço
                                </Link>
                               
                              </div>
                            </TableCell>
                            
                            <TableCell
                              className="py-2 px-3 border-white whitespace-normal w-1/4">
                             
                            </TableCell>
                            <TableCell className="py-2 px-3 border-r border-l-white whitespace-normal w-1/4"> 
                              <div className="flex items-center gap-2 ">
                              12-04-2024
                               
                              </div>
                            </TableCell>
                      </TableRow>
                      <TableRow >                        
                            <TableCell className="py-2 px-3 border border-l border-r-white whitespace-normal w-1/4"> 
                              <div className="flex items-center gap-2  ">
                            <Link href={"/3547896_turizm.pdf"} target="_blank"
                                className="text-blue-600 hover:text-blue-600/65"
                                >
                             Turizm İşletme Belgesi
                                </Link>
                               
                              </div>
                            </TableCell>
                            
                            <TableCell
                              className="py-2 px-3 border-white whitespace-normal w-1/4">
                             
                            </TableCell>
                            <TableCell className="py-2 px-3 border-r border-l-white whitespace-normal w-1/4"> 
                              <div className="flex items-center gap-2 ">
                              12-04-2024
                               
                              </div>
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

export default Belgeler