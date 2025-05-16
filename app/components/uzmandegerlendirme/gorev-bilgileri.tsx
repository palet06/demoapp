"use client"






import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"

const GorevBilgileri = () => {
  return (
     <Card >
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Yabancının İşyerinde Yapcağı Görev Bilgileri</CardTitle>
           
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