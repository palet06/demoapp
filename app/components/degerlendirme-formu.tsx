"use client";

import { useDegerlendirmeStore } from "@/app/store/store";

import { DegerlendirmeSonucIslemi } from "@/app/components/degerlendirme-sonuc-islemi";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const DegerlendirmeFormu = ({ kullanici }: { kullanici: string }) => {
  const uzmanDegerlendirmeBilgileri = useDegerlendirmeStore
    .getState()
    .degerlendirmeler.find(
      (uzman) => uzman.degerlendirenKullanici === kullanici
    );
  return (
    <>
      <Card className="w-full max-w-6xl mx-auto">
        <CardHeader className="border-b pb-3">
          <CardTitle className="text-center text-xl font-bold">
            DEĞERLENDİRME FORMU
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {/* Uzman Özet */}
          {/* <div className="p-4 border-b">
            <h3 className="font-semibold text-lg border-b pb-2 mb-4">
              Başvuru Değerlendirme Bilgileri
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <tbody>
                  <tr>
                    <td className="border px-4 py-2 font-medium w-1/3 bg-gray-50">
                      İzin Başlangıç Tarihi
                    </td>
                    <td className="border px-4 py-2">19-04-2024</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-medium w-1/3 bg-gray-50">
                      İzin Bitiş Tarihi
                    </td>
                    <td className="border px-4 py-2">18-04-2025</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-medium w-1/3 bg-gray-50">
                      Çalışma Talebinde Bulunulan Süre
                    </td>
                    <td className="border px-4 py-2">1 Yıl</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-medium w-1/3 bg-gray-50">
                      Alacağı Ücret (Aylık Brüt ve TL olarak)
                    </td>
                    <td className="border px-4 py-2">20.002,5 ₺</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-medium w-1/3 bg-gray-50">
                      İstisnai - İstisnai Maddesi
                    </td>
                    <td className="border px-4 py-2"></td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-medium w-1/3 bg-gray-50">
                      Şerh Seçimleri
                    </td>
                    <td className="border px-4 py-2"></td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-medium w-1/3 bg-gray-50">
                      Kriter Seçimleri
                    </td>
                    <td className="border px-4 py-2">
                      {" "}
                      • İşyerinde yeterli sayıda Türk vatandaşı istihdam
                      edilmektedir.
                      <br />
                      • İşyerinin sermaye tutarı yeterlidir.
                      <br />• İşyerinin ihracat tutarı veya net satış tutarı
                      yeterlidir.
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-medium w-1/3 bg-gray-50">
                      Haçtan Muaf
                    </td>
                    <td className="border px-4 py-2">Hayır</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-medium w-1/3 bg-gray-50">
                      Çalışma Harç Miktarı
                    </td>
                    <td className="border px-4 py-2">10571.60</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-medium w-1/3 bg-gray-50">
                      Değerli Kağıt Bedeli
                    </td>
                    <td className="border px-4 py-2">810</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div> */}
          {/* General Bilgiler */}
          <div className="p-4 border-b">
            <h3 className="font-semibold text-lg border-b pb-2 mb-4">
              Genel Bilgiler
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <tbody>
                  <tr>
                    <td className="border px-4 py-2 font-medium w-1/3 bg-gray-50">
                      Başvuru No
                    </td>
                    <td className="border px-4 py-2">3547896</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-medium w-1/3 bg-gray-50">
                      YKN
                    </td>
                    <td className="border px-4 py-2">98044116610</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-medium w-1/3 bg-gray-50">
                      Yabancının Adı Soyadı
                    </td>
                    <td className="border px-4 py-2">ELAMAN ISHENGAZIEV</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-medium w-1/3 bg-gray-50">
                      Yabancının Uyruğu
                    </td>
                    <td className="border px-4 py-2">Kırgızistan</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-medium w-1/3 bg-gray-50">
                      Doğum Tarihi
                    </td>
                    <td className="border px-4 py-2">19-07-1999</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-medium w-1/3 bg-gray-50">
                      Başvuru Tarihi
                    </td>
                    <td className="border px-4 py-2">12-04-2024</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* işlemler */}
          <div className="p-4">
            <h3 className="font-semibold text-lg border-b pb-2 mb-4">
              Değerlendirme Aşaması
            </h3>

            <div className="overflow-x-auto flex flex-col gap-3">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border px-2 py-2 text-left text-sm font-medium">
                      Kriter
                    </th>
                    <th className="border px-2 py-2 text-center text-sm font-medium">
                      Uzman
                    </th>
                    <th className="border px-2 py-2 text-center text-sm font-medium">
                      Şube Müdürü
                    </th>
                    <th className="border px-2 py-2 text-center text-sm font-medium">
                      Daire Başkanı
                    </th>
                    <th className="border px-2 py-2 text-center text-sm font-medium">
                      Genel Müdür
                    </th>
                    <th className="border px-2 py-2 text-left text-sm font-medium">
                      Açıklama
                    </th>
                    <th className="border px-2 py-2 text-center text-sm font-medium">
                      İşlem
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Kişi Bilgileri Row */}
                  <tr>
                    <td className="border px-2 py-2 text-sm font-medium">
                      Kişi Bilgileri
                    </td>
                    <td className="border px-2 py-2 text-center">
                      <span
                        className={`${
                          uzmanDegerlendirmeBilgileri?.sectionKisiBilgileri.sonuc.toUpperCase() ===
                            "RET" && "bg-red-100 text-red-800"
                        } 

                        ${
                          uzmanDegerlendirmeBilgileri?.sectionKisiBilgileri.sonuc.toUpperCase() ===
                            "ONAY" && "bg-green-100 text-green-800"
                        }

                         ${
                           uzmanDegerlendirmeBilgileri?.sectionKisiBilgileri
                             .sonuc === "kararsiz" &&
                           "bg-yellow-100 text-yellow-800"
                         }
                        
                        
                        px-2 py-1 rounded text-xs`}
                      >
                        {uzmanDegerlendirmeBilgileri?.sectionKisiBilgileri.sonuc.toUpperCase()}
                      </span>
                    </td>
                    <td className="border px-2 py-2 text-center">
                      <span>-</span>
                    </td>
                    <td className="border px-2 py-2 text-center">
                      <span>-</span>
                    </td>
                    <td className="border px-2 py-2 text-center">
                      <span>-</span>
                    </td>
                    <td className="border px-2 py-2 text-sm">
                      {uzmanDegerlendirmeBilgileri?.sectionKisiBilgileri
                        .note ? (
                        <p className="text-xs">
                          <span className="font-medium">
                            {
                              uzmanDegerlendirmeBilgileri?.degerlendirenKullanici
                            }
                            :{" "}
                          </span>
                          {
                            uzmanDegerlendirmeBilgileri?.sectionKisiBilgileri
                              .note
                          }
                        </p>
                      ) : (
                        ""
                      )}
                    </td>
                    <td className="border px-2 py-2 text-center">
                      <Link
                        href={`/dashboard/degerlendirme/3547896${uzmanDegerlendirmeBilgileri?.sectionKisiBilgileri.anchor}`}
                        target="_self"
                      >
                        <Button
                          variant="link"
                          size="sm"
                          className="text-cyan-600 h-auto p-0"
                        >
                          Detaya Git
                        </Button>
                      </Link>
                    </td>
                  </tr>

                  {/* Pasaport Bilgileri Row */}
                  <tr>
                    <td className="border px-2 py-2 text-sm font-medium">
                      İletişim Bilgileri
                    </td>
                    <td className="border px-2 py-2 text-center">
                      <span
                        className={`${
                          uzmanDegerlendirmeBilgileri?.sectionIletisimBilgileri.sonuc.toUpperCase() ===
                            "RET" && "bg-red-100 text-red-800"
                        } 

                        ${
                          uzmanDegerlendirmeBilgileri?.sectionIletisimBilgileri.sonuc.toUpperCase() ===
                            "ONAY" && "bg-green-100 text-green-800"
                        }

                         ${
                           uzmanDegerlendirmeBilgileri?.sectionIletisimBilgileri.sonuc.toUpperCase() ===
                             "KARARSIZ" && "bg-yellow-100 text-yellow-800"
                         }
                        
                        
                        px-2 py-1 rounded text-xs`}
                      >
                        {uzmanDegerlendirmeBilgileri?.sectionIletisimBilgileri.sonuc.toUpperCase()}
                      </span>
                    </td>
                    <td className="border px-2 py-2 text-center">
                      <span>-</span>
                    </td>
                    <td className="border px-2 py-2 text-center">
                      <span>-</span>
                    </td>
                    <td className="border px-2 py-2 text-center">
                      <span>-</span>
                    </td>
                    <td className="border px-2 py-2 text-sm">
                      {uzmanDegerlendirmeBilgileri?.sectionIletisimBilgileri
                        .note ? (
                        <p className="text-xs">
                          <span className="font-medium">
                            {
                              uzmanDegerlendirmeBilgileri?.degerlendirenKullanici
                            }
                            :{" "}
                          </span>
                          {
                            uzmanDegerlendirmeBilgileri?.sectionIletisimBilgileri
                              .note
                          }
                        </p>
                      ) : (
                        ""
                      )}
                    </td>
                    <td className="border px-2 py-2 text-center">
                      <Link
                        href={`/dashboard/degerlendirme/3547896${uzmanDegerlendirmeBilgileri?.sectionIletisimBilgileri.anchor}`}
                        target="_self"
                      >
                        <Button
                          variant="link"
                          size="sm"
                          className="text-cyan-600 h-auto p-0"
                        >
                          Detaya Git
                        </Button>
                      </Link>
                    </td>
                  </tr>

                  {/* Eğitim Bilgileri Row */}
                  <tr>
                    <td className="border px-2 py-2 text-sm font-medium">
                      Pasaport Bilgileri
                    </td>
                    <td className="border px-2 py-2 text-center">
                      <span
                        className={`${
                          uzmanDegerlendirmeBilgileri?.sectionPasaportBilgileri.sonuc.toUpperCase() ===
                            "RET" && "bg-red-100 text-red-800"
                        } 

                        ${
                          uzmanDegerlendirmeBilgileri?.sectionPasaportBilgileri.sonuc.toUpperCase() ===
                            "ONAY" && "bg-green-100 text-green-800"
                        }

                         ${
                           uzmanDegerlendirmeBilgileri?.sectionPasaportBilgileri.sonuc.toUpperCase() ===
                             "KARARSIZ" && "bg-yellow-100 text-yellow-800"
                         }
                        
                        
                        px-2 py-1 rounded text-xs`}
                      >
                        {uzmanDegerlendirmeBilgileri?.sectionPasaportBilgileri.sonuc.toUpperCase()}
                      </span>
                    </td>
                    <td className="border px-2 py-2 text-center">
                      <span>-</span>
                    </td>
                    <td className="border px-2 py-2 text-center">
                      <span>-</span>
                    </td>
                    <td className="border px-2 py-2 text-center">
                      <span>-</span>
                    </td>
                    <td className="border px-2 py-2 text-sm">
                      {uzmanDegerlendirmeBilgileri?.sectionPasaportBilgileri
                        .note ? (
                        <p className="text-xs">
                          <span className="font-medium">
                            {
                              uzmanDegerlendirmeBilgileri?.degerlendirenKullanici
                            }
                            :{" "}
                          </span>
                          {
                            uzmanDegerlendirmeBilgileri?.sectionPasaportBilgileri
                              .note
                          }
                        </p>
                      ) : (
                        ""
                      )}
                    </td>
                    <td className="border px-2 py-2 text-center">
                      <Link
                        href={`/dashboard/degerlendirme/3547896${uzmanDegerlendirmeBilgileri?.sectionPasaportBilgileri.anchor}`}
                        target="_self"
                      >
                        <Button
                          variant="link"
                          size="sm"
                          className="text-cyan-600 h-auto p-0"
                        >
                          Detaya Git
                        </Button>
                      </Link>
                    </td>
                  </tr>

                  {/* İşveren Bilgileri Row */}
                  <tr>
                    <td className="border px-2 py-2 text-sm font-medium">
                      Eğitim Bilgileri
                    </td>
                    <td className="border px-2 py-2 text-center">
                      <span
                        className={`${
                          uzmanDegerlendirmeBilgileri?.sectionEgitimBilgileri.sonuc.toUpperCase() ===
                            "RET" && "bg-red-100 text-red-800"
                        } 

                        ${
                          uzmanDegerlendirmeBilgileri?.sectionEgitimBilgileri.sonuc.toUpperCase() ===
                            "ONAY" && "bg-green-100 text-green-800"
                        }

                         ${
                           uzmanDegerlendirmeBilgileri?.sectionEgitimBilgileri.sonuc.toUpperCase() ===
                             "KARARSIZ" && "bg-yellow-100 text-yellow-800"
                         }
                        
                        
                        px-2 py-1 rounded text-xs`}
                      >
                        {uzmanDegerlendirmeBilgileri?.sectionEgitimBilgileri.sonuc.toUpperCase()}
                      </span>
                    </td>
                    <td className="border px-2 py-2 text-center">
                      <span>-</span>
                    </td>
                    <td className="border px-2 py-2 text-center">
                      <span>-</span>
                    </td>
                    <td className="border px-2 py-2 text-center">
                      <span>-</span>
                    </td>
                    <td className="border px-2 py-2 text-sm">
                      {uzmanDegerlendirmeBilgileri?.sectionEgitimBilgileri
                        .note ? (
                        <p className="text-xs">
                          <span className="font-medium">
                            {
                              uzmanDegerlendirmeBilgileri?.degerlendirenKullanici
                            }
                            :{" "}
                          </span>
                          {
                            uzmanDegerlendirmeBilgileri?.sectionEgitimBilgileri
                              .note
                          }
                        </p>
                      ) : (
                        ""
                      )}
                    </td>
                    <td className="border px-2 py-2 text-center">
                      <Link
                        href={`/dashboard/degerlendirme/3547896${uzmanDegerlendirmeBilgileri?.sectionEgitimBilgileri.anchor}`}
                        target="_self"
                      >
                        <Button
                          variant="link"
                          size="sm"
                          className="text-cyan-600 h-auto p-0"
                        >
                          Detaya Git
                        </Button>
                      </Link>
                    </td>
                  </tr>

                  {/* Ek Bilgi ve Belgeler Row */}
                  <tr>
                    <td className="border px-2 py-2 text-sm font-medium">
                      Görev Bilgileri
                    </td>
                    <td className="border px-2 py-2 text-center">
                      <span className={`${
                          uzmanDegerlendirmeBilgileri?.sectionGorevBilgileri.sonuc.toUpperCase() ===
                            "RET" && "bg-red-100 text-red-800"
                        } 

                        ${
                          uzmanDegerlendirmeBilgileri?.sectionGorevBilgileri.sonuc.toUpperCase() ===
                            "ONAY" && "bg-green-100 text-green-800"
                        }

                         ${
                           uzmanDegerlendirmeBilgileri?.sectionGorevBilgileri.sonuc.toUpperCase() ===
                             "KARARSIZ" && "bg-yellow-100 text-yellow-800"
                         }
                        
                        
                        px-2 py-1 rounded text-xs`}>
                        {uzmanDegerlendirmeBilgileri?.sectionGorevBilgileri.sonuc.toUpperCase()}
                      </span>
                    </td>
                    <td className="border px-2 py-2 text-center">
                      <span>-</span>
                    </td>
                    <td className="border px-2 py-2 text-center">
                      <span>-</span>
                    </td>
                    <td className="border px-2 py-2 text-center">
                      <span>-</span>
                    </td>
                    <td className="border px-2 py-2 text-sm">
                      {uzmanDegerlendirmeBilgileri?.sectionGorevBilgileri
                        .note ? (
                        <p className="text-xs">
                          <span className="font-medium">
                            {
                              uzmanDegerlendirmeBilgileri?.degerlendirenKullanici
                            }
                            :{" "}
                          </span>
                          {
                            uzmanDegerlendirmeBilgileri?.sectionGorevBilgileri
                              .note
                          }
                        </p>
                      ) : (
                        ""
                      )}
                    </td>
                    <td className="border px-2 py-2 text-center">
                      <Link
                        href={`/dashboard/degerlendirme/3547896${uzmanDegerlendirmeBilgileri?.sectionGorevBilgileri.anchor}`}
                        target="_self"
                      >
                        <Button
                          variant="link"
                          size="sm"
                          className="text-cyan-600 h-auto p-0"
                        >
                          Detaya Git
                        </Button>
                      </Link>
                    </td>
                  </tr>

                  {/* Tüm Belgeler Row */}
                  <tr>
                    <td className="border px-2 py-2 text-sm font-medium">
                      İşveren/Kurum Bilgileri
                    </td>
                    <td className="border px-2 py-2 text-center">
                      <span className={`${
                          uzmanDegerlendirmeBilgileri?.sectionIsverenBilgileri.sonuc.toUpperCase() ===
                            "RET" && "bg-red-100 text-red-800"
                        } 

                        ${
                          uzmanDegerlendirmeBilgileri?.sectionIsverenBilgileri.sonuc.toUpperCase() ===
                            "ONAY" && "bg-green-100 text-green-800"
                        }

                         ${
                           uzmanDegerlendirmeBilgileri?.sectionIsverenBilgileri.sonuc.toUpperCase() ===
                             "KARARSIZ" && "bg-yellow-100 text-yellow-800"
                         }
                        
                        
                        px-2 py-1 rounded text-xs`}>
                        {uzmanDegerlendirmeBilgileri?.sectionIsverenBilgileri.sonuc.toUpperCase()}
                      </span>
                    </td>
                    <td className="border px-2 py-2 text-center">
                      <span>-</span>
                    </td>
                    <td className="border px-2 py-2 text-center">
                      <span>-</span>
                    </td>
                    <td className="border px-2 py-2 text-center">
                      <span>-</span>
                    </td>
                    <td className="border px-2 py-2 text-sm">
                      {uzmanDegerlendirmeBilgileri?.sectionIsverenBilgileri
                        .note ? (
                        <p className="text-xs">
                          <span className="font-medium">
                            {
                              uzmanDegerlendirmeBilgileri?.degerlendirenKullanici
                            }
                            :{" "}
                          </span>
                          {
                            uzmanDegerlendirmeBilgileri?.sectionIsverenBilgileri.note
                          }
                        </p>
                      ) : (
                        ""
                      )}
                    </td>
                    <td className="border px-2 py-2 text-center">
                      <Link
                        href={`/dashboard/degerlendirme/3547896${uzmanDegerlendirmeBilgileri?.sectionIsverenBilgileri.anchor}`}
                        target="_self"
                      >
                        <Button
                          variant="link"
                          size="sm"
                          className="text-cyan-600 h-auto p-0"
                        >
                          Detaya Git
                        </Button>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-2 text-sm font-medium">
                      Ek Bilgi ve Belgeler
                    </td>
                    <td className="border px-2 py-2 text-center">
                      <span className={`${
                          uzmanDegerlendirmeBilgileri?.sectionBelgeBilgileri.sonuc.toUpperCase() ===
                            "RET" && "bg-red-100 text-red-800"
                        } 

                        ${
                          uzmanDegerlendirmeBilgileri?.sectionBelgeBilgileri.sonuc.toUpperCase() ===
                            "ONAY" && "bg-green-100 text-green-800"
                        }

                         ${
                           uzmanDegerlendirmeBilgileri?.sectionBelgeBilgileri.sonuc.toUpperCase() ===
                             "KARARSIZ" && "bg-yellow-100 text-yellow-800"
                         }
                        
                        
                        px-2 py-1 rounded text-xs`}>
                        {uzmanDegerlendirmeBilgileri?.sectionBelgeBilgileri.sonuc.toUpperCase()}
                      </span>
                    </td>
                    <td className="border px-2 py-2 text-center">
                      <span>-</span>
                    </td>
                    <td className="border px-2 py-2 text-center">
                      <span>-</span>
                    </td>
                    <td className="border px-2 py-2 text-center">
                      <span>-</span>
                    </td>
                    <td className="border px-2 py-2 text-sm">
                       {uzmanDegerlendirmeBilgileri?.sectionBelgeBilgileri
                        .note ? (
                        <p className="text-xs">
                          <span className="font-medium">
                            {
                              uzmanDegerlendirmeBilgileri?.degerlendirenKullanici
                            }
                            :{" "}
                          </span>
                          {
                            uzmanDegerlendirmeBilgileri?.sectionBelgeBilgileri.note
                          }
                        </p>
                      ) : (
                        ""
                      )}
                    </td>
                    <td className="border px-2 py-2 text-center">
                      <Link
                        href={`/dashboard/degerlendirme/3547896${uzmanDegerlendirmeBilgileri?.sectionBelgeBilgileri.anchor}`}
                        target="_self"
                      >
                        <Button
                          variant="link"
                          size="sm"
                          className="text-cyan-600 h-auto p-0"
                        >
                          Detaya Git
                        </Button>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
              <DegerlendirmeSonucIslemi />
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default DegerlendirmeFormu;
