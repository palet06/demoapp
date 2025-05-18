"use client"



import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Copy, Edit, Search, Share, Trash } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"

const IletisimBilgileri = () => {
   const [hovered, setHovered] = useState(false);
      
  return (
    <Card >
          <CardHeader className="flex flex-row items-center justify-between">
             <CardTitle
          className="text-xl font-bold flex items-center justify-center gap-2 cursor-pointer hover:text-blue-600 "
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          İletişim Bilgileri
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
      <div 
           className="flex items-center gap-2">
          <DropdownMenu >
            <DropdownMenuTrigger asChild >
              <Button  variant="outline"><Search/></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent  >
              
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  
                  <span>İkamet/Statü Bilgileri</span>
                  
                </DropdownMenuItem>
                <DropdownMenuSeparator/>
                <DropdownMenuItem>
                  
                  <span>Kargo Bilgileri</span>
                  
                </DropdownMenuItem>
                <DropdownMenuSeparator/>
                <DropdownMenuItem>
                  
                  <span>E-Posta Bildirimleri</span>
                  
                </DropdownMenuItem>
                <DropdownMenuSeparator/>
                <DropdownMenuItem>
                  
                  <span>SMS Bildirimleri</span>
                  
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
                   
                      <TableRow >
                        
                            <TableCell className="font-medium py-2 px-3 border bg-secondary w-1/4"> 
                              <div className="flex items-center gap-2 ">
                              E-Posta
                               
                              </div>
                            </TableCell>
                            
                            <TableCell
                              className="py-2 px-3 border whitespace-normal w-1/4"
                             
                             
                            >
                              azjffa@yandex.com
                            </TableCell>
                            <TableCell className="font-medium py-2 px-3 border bg-secondary w-1/4"> 
                              <div className="flex items-center gap-2 ">
                              Telefon
                               
                              </div>
                            </TableCell>
                            
                            <TableCell
                              className="py-2 px-3 border whitespace-normal w-1/4"
                             
                             
                            >
                              +994 4568 789 45
                            </TableCell>
                            
                            
                         
                      
                      </TableRow>
                      <TableRow >
                        
                            <TableCell className="font-medium py-2 px-3 border bg-secondary w-1/4"> 
                              <div className="flex items-center gap-2 ">
                             İkinci E-Posta
                               
                              </div>
                            </TableCell>
                            
                            <TableCell
                              className="py-2 px-3 border whitespace-normal w-1/4"
                             
                             
                            >
                              ikincialkfdsghjzjffa@yandex.com
                            </TableCell>
                            <TableCell className="font-medium py-2 px-3 border bg-secondary w-1/4"> 
                              <div className="flex items-center gap-2 ">
                              İkinci Telefon
                               
                              </div>
                            </TableCell>
                            
                            <TableCell
                              className="py-2 px-3 border whitespace-normal w-1/4"
                             
                             
                            >
                              +994 2222 222 22
                            </TableCell>
                            
                            
                         
                      
                      </TableRow>
                      
                      
                      <TableRow >
                        
                            <TableCell colSpan={1} className="font-medium py-2 px-3 border bg-secondary"> 
                              <div className="flex items-center gap-2 ">
                              İkamet Adresi
                               
                              </div>
                            </TableCell>
                            
                            <TableCell colSpan={3}
                              className="py-2 px-3 border whitespace-normal"
                             
                             
                            >
                              BELEK MAH. İSKELE CAD.NO:10 SERIK /ANTALYA
                            </TableCell>
                           
                            
                         
                      
                      </TableRow>
                      <TableRow >
                        
                            <TableCell colSpan={1} className="font-medium py-2 px-3 border bg-secondary "> 
                              <div className="flex items-center gap-2 ">
                              İkinci Adres
                               
                              </div>
                            </TableCell>
                            
                            <TableCell colSpan={3}
                              className="py-2 px-3 border whitespace-normal "
                             
                             
                            >
                              KARAKAYA  MAH. HABİB CAD.NO:5 BEYOĞLU /İSTANBUL
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

export default IletisimBilgileri