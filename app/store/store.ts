import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Degerlendirme = {
  degerlendirenKullanici: string;
  sectionKisiBilgileri: {
    sonuc: string;
    note: string;
    css: string;
    anchor:string;
  };
  sectionIletisimBilgileri: {
    sonuc: string;
    note: string;
    css: string;
     anchor:string;
  };
  sectionPasaportBilgileri: {
    sonuc: string;
    note: string;
    css: string;
     anchor:string;
  };
  sectionEgitimBilgileri: {
    sonuc: string;
    note: string;
    css: string;
     anchor:string;
  };
  sectionGorevBilgileri: {
    sonuc: string;
    note: string;
    css: string;
     anchor:string;
  };
  sectionIsverenBilgileri: {
    sonuc: string;
    note: string;
    css: string;
     anchor:string;
  };
  sectionBelgeBilgileri: {
    sonuc: string;
    note: string;
    css: string;
     anchor:string;
  };
  nihaiKararBilgileri: {
    sonuc: string;
    note: string;
    css: string;
  };
};

type DegerlendirmeStore = {
  degerlendirmeler: Degerlendirme[];
  setDegerlendirme: (degerlendirenKullanici: string, updatedFields: Partial<Degerlendirme>) => void;
};

export const useDegerlendirmeStore = create<
  DegerlendirmeStore,
  [['zustand/persist', DegerlendirmeStore]]
>(
  persist(
    (set) => ({
      degerlendirmeler: [],
      setDegerlendirme: (degerlendirenKullanici, updatedFields) => {
        set((state) => ({
          degerlendirmeler: state.degerlendirmeler.map((deg) => {
            // Eğer degerlendirenKullanici eşleşiyorsa, sadece o alanı güncelle
            if (deg.degerlendirenKullanici === degerlendirenKullanici) {
              // Güncellenmesi gereken alanları birleştiriyoruz
              return { ...deg, ...updatedFields };
            }
            // Eğer kullanıcı eşleşmiyorsa, mevcut değeri olduğu gibi bırak
            return deg;
          }),
        }));
      },
    }),
    {
      name: 'degerlendirme-storage',
    }
  )
);