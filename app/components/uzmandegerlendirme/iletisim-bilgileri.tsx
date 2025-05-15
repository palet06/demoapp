"use client"






import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"

const IletisimBilgileri = () => {
  return (
    <Card >
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>İletişim Bilgileri</CardTitle>
           
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