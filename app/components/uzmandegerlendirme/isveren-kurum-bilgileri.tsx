"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"

const IsverenKurumBilgileri = () => {
  return (
    <Card >
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>İşveren/Kurum Bilgileri</CardTitle>
           
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-6">
              
              <div className="flex-grow">
                <Table>
                  <TableBody>
                   
                      <TableRow >
                        
                            <TableCell className="font-medium py-2 px-3 border bg-secondary w-1/4"> 
                              <div className="flex items-center gap-2 ">
                              Tescil No
                               
                              </div>
                            </TableCell>
                            
                            <TableCell 
                              className="py-2 px-3 border whitespace-normal w-1/4"
                             
                             
                            >
                             25510010111077180071225000

                            </TableCell>
                            <TableCell className="font-medium py-2 px-3 border bg-secondary w-1/4"> 
                              <div className="flex items-center gap-2 ">
                              Şirket Türü
                               
                              </div>
                            </TableCell>
                            
                            <TableCell 
                              className="py-2 px-3 border whitespace-normal w-1/4"
                             
                             
                            >
                             Anonim Şirket

                            </TableCell>
                           
                            
                            
                         
                      
                      </TableRow>
                      <TableRow >
                        
                            <TableCell colSpan={1} className="font-medium py-2 px-3 border bg-secondary w-1/4"> 
                              <div className="flex items-center gap-2 ">
                             İşveren NACE
                               
                              </div>
                            </TableCell>
                            
                            <TableCell colSpan={3}
                              className="py-2 px-3 border whitespace-normal w-1/4"
                             
                             
                            >
                              5510 - Oteller ve benzeri konaklama yerleri
                            </TableCell>
                            
                            
                            
                         
                      
                      </TableRow>
                      <TableRow >
                        
                            <TableCell colSpan={1} className="font-medium py-2 px-3 border bg-secondary w-1/4"> 
                              <div className="flex items-center gap-2 ">
                             Başvuruda Alınan İşyeri Unvanı
                               
                              </div>
                            </TableCell>
                            
                            <TableCell colSpan={3}
                              className="py-2 px-3 border whitespace-normal w-1/4"
                             
                             
                            >
                             UTE HOLDİNG ANONİM ŞİRKETİ
                            </TableCell>
                           
                            
                            
                         
                      
                      </TableRow>
                      
                      
                      <TableRow >
                        
                            <TableCell colSpan={1} className="font-medium py-2 px-3 border bg-secondary"> 
                              <div className="flex items-center gap-2 ">
                              Telefon
                               
                              </div>
                            </TableCell>
                            
                            <TableCell colSpan={3}
                              className="py-2 px-3 border whitespace-normal"
                             
                             
                            >
                              5398998889
                            </TableCell>
                           
                            
                         
                      
                      </TableRow>
                     <TableRow >
                        
                            <TableCell className="font-medium py-2 px-3 border bg-secondary w-1/4"> 
                              <div className="flex items-center gap-2 ">
                               İşveren E-Bildirge <br/> Yetkilisi Ad Soyad
                               
                              </div>
                            </TableCell>
                            
                            <TableCell 
                              className="py-2 px-3 border whitespace-normal w-1/4"
                             
                             
                            >
                             GÖKAY OKTAY

                            </TableCell>
                            <TableCell className="font-medium py-2 px-3 border bg-secondary w-1/4"> 
                              <div className="flex items-center gap-2 ">
                             İşveren Sorumlu Ad Soyad
                               
                              </div>
                            </TableCell>
                            
                            <TableCell 
                              className="py-2 px-3 border whitespace-normal w-1/4"
                             
                             
                            >
                             İSMET GÜRLEK

                            </TableCell>
                           
                            
                            
                         
                      
                      </TableRow>
                       <TableRow >
                        
                            <TableCell className="font-medium py-2 px-3 border bg-secondary w-1/4"> 
                              <div className="flex items-center gap-2 ">
                               İşveren Güncel E-Posta
                               
                              </div>
                            </TableCell>
                            
                            <TableCell 
                              className="py-2 px-3 border whitespace-normal w-1/4"
                             
                             
                            >
                            personel@belconti.com	

                            </TableCell>
                            <TableCell className="font-medium py-2 px-3 border bg-secondary w-1/4"> 
                              <div className="flex items-center gap-2 ">
                             İşveren Başvurudaki E-Posta
                               
                              </div>
                            </TableCell>
                            
                            <TableCell 
                              className="py-2 px-3 border whitespace-normal w-1/4"
                             
                             
                            >
                            personel@belconti.com


                            </TableCell>
                           
                            
                            
                         
                      
                      </TableRow>
                      <TableRow >
                        
                            <TableCell className="font-medium py-2 px-3 border bg-secondary w-1/4"> 
                              <div className="flex items-center gap-2 ">
                               Kuruluş Tarihi
                               
                              </div>
                            </TableCell>
                            
                            <TableCell 
                              className="py-2 px-3 border whitespace-normal w-1/4"
                             
                             
                            >
                            01-03-2006	

                            </TableCell>
                            <TableCell className="font-medium py-2 px-3 border bg-secondary w-1/4"> 
                              <div className="flex items-center gap-2 ">
                             MERSİS No
                               
                              </div>
                            </TableCell>
                            
                            <TableCell 
                              className="py-2 px-3 border whitespace-normal w-1/4"
                             
                             
                            >
                           0897000671300012


                            </TableCell>
                           
                            
                            
                         
                      
                      </TableRow>
                      <TableRow >
                        
                            <TableCell className="font-medium py-2 px-3 border bg-secondary w-1/4"> 
                              <div className="flex items-center gap-2 ">
                               Vergi Dairesi
                               
                              </div>
                            </TableCell>
                            
                            <TableCell 
                              className="py-2 px-3 border whitespace-normal w-1/4"
                             
                             
                            >
                            34276

                            </TableCell>
                            <TableCell className="font-medium py-2 px-3 border bg-secondary w-1/4"> 
                              <div className="flex items-center gap-2 ">
                             Vergi Numarası
                               
                              </div>
                            </TableCell>
                            
                            <TableCell 
                              className="py-2 px-3 border whitespace-normal w-1/4"
                             
                             
                            >
                           8970006713


                            </TableCell>
                           
                            
                            
                         
                      
                      </TableRow>
                      <TableRow >
                        
                            <TableCell colSpan={1} className="font-medium py-2 px-3 border bg-secondary w-1/4"> 
                              <div className="flex items-center gap-2 ">
                             İşyeri Adresi
                               
                              </div>
                            </TableCell>
                            
                            <TableCell colSpan={3}
                              className="py-2 px-3 border whitespace-normal w-1/4"
                             
                             
                            >
                              BELEK MAH. İSKELE CAD. ANTALYA SERİK [No:10/0]

                            </TableCell>
                            
                            
                            
                         
                      
                      </TableRow>
                      <TableRow >
                        
                            <TableCell colSpan={1} className="font-medium py-2 px-3 border bg-secondary w-1/4"> 
                              <div className="flex items-center gap-2 ">
                             Yabancının Çalışacağı Adres
                               
                              </div>
                            </TableCell>
                            
                            <TableCell colSpan={3}
                              className="py-2 px-3 border whitespace-normal w-1/4"
                             
                             
                            >
                             BELEK MAHALLESİ İSKELE CADDESİ CADDESİ Dış kapı no :10 İç kapı no : Z01 SERİK / ANTALYA


                            </TableCell>
                            
                            
                            
                         
                      
                      </TableRow>
                      <TableRow >
                        
                            <TableCell colSpan={1} className="font-medium py-2 px-3 border bg-secondary w-1/4"> 
                              <div className="flex items-center gap-2 ">
                             Sermaye Yapısı
                               
                              </div>
                            </TableCell>
                            
                            <TableCell colSpan={3}
                              className="py-2 px-3 border whitespace-normal w-1/4"
                             
                             
                            >
                             Yerli


                            </TableCell>
                            
                            
                            
                         
                      
                      </TableRow>
                       <TableRow >
                        
                            <TableCell className="font-medium py-2 px-3 border bg-secondary w-1/4"> 
                              <div className="flex items-center gap-2 ">
                               Kayıtlı Sermaye (TL)
                               
                              </div>
                            </TableCell>
                            
                            <TableCell 
                              className="py-2 px-3 border whitespace-normal w-1/4"
                             
                             
                            >
                            300.000.000,00 TL

                            </TableCell>
                            <TableCell className="font-medium py-2 px-3 border bg-secondary w-1/4"> 
                              <div className="flex items-center gap-2 ">
                             Ödenmiş Sermaye (TL)
                               
                              </div>
                            </TableCell>
                            
                            <TableCell 
                              className="py-2 px-3 border whitespace-normal w-1/4"
                             
                             
                            >
                           300.000.000,00 TL


                            </TableCell>
                           
                            
                            
                         
                      
                      </TableRow>
                      <TableRow >
                        
                            <TableCell colSpan={1} className="font-medium py-2 px-3 border bg-secondary w-1/4"> 
                              <div className="flex items-center gap-2 ">
                             Başvuru İle İlgili Sorumlular
                               
                              </div>
                            </TableCell>
                            
                            <TableCell colSpan={3}
                              className="py-2 px-3 border whitespace-normal w-1/4"
                             
                             
                            >
                             Eklenecek


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

export default IsverenKurumBilgileri