"use client"






import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"

const BasvuruBilgi = () => {
     
  return (
      <Card >
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Başvuru Bilgileri</CardTitle>
           
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-6">
              
              <div className="flex-grow">
                <Table>
                  <TableBody>
                   
                      <TableRow >
                        
                            <TableCell className="font-medium py-2 px-3 border bg-secondary w-1/3"> 
                              <div className="flex items-center gap-2 ">
                              Başvuru Numarası
                               
                              </div>
                            </TableCell>
                            
                            <TableCell
                              className="py-2 px-3 border whitespace-normal w-2/3"
                             
                             
                            >
                              3547896
                            </TableCell>
                            
                            
                         
                      
                      </TableRow>
                      <TableRow >
                        
                            <TableCell className="font-medium py-2 px-3 border bg-secondary "> 
                              <div className="flex items-center gap-2 ">
                              Başvuru Tarihi
                               
                              </div>
                            </TableCell>
                            
                            <TableCell
                              className="py-2 px-3 border whitespace-normal"
                             
                             
                            >
                              12.04.2024
                            </TableCell>
                           
                            
                         
                      
                      </TableRow>
                      <TableRow >
                        
                            <TableCell className="font-medium py-2 px-3 border bg-secondary "> 
                              <div className="flex items-center gap-2 ">
                              Başvuru Türü
                               
                              </div>
                            </TableCell>
                            
                            <TableCell
                              className="py-2 px-3 border whitespace-normal"
                             
                             
                            >
                              Yurt Dışı
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

export default BasvuruBilgi