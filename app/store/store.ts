import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Section = {
  sonuc: string;
  note: string;
  css: string;
  anchor: string;
};

type NihaiKarar = {
  sonuc: string;
  note: string;
  css: string;
};

type Degerlendirme = {
  degerlendirenKullanici: string;
  sectionKisiBilgileri: Section;
  sectionIletisimBilgileri: Section;
  sectionPasaportBilgileri: Section;
  sectionEgitimBilgileri: Section;
  sectionGorevBilgileri: Section;
  sectionIsverenBilgileri: Section;
  sectionBelgeBilgileri: Section;
  nihaiKararBilgileri: NihaiKarar;
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
        set((state) => {
          const existingUser = state.degerlendirmeler.find(
            (deg) => deg.degerlendirenKullanici === degerlendirenKullanici
          );

          if (existingUser) {
            // Kullanıcı zaten varsa, sadece güncellenen alanları merge et
            const updatedUser = {
              ...existingUser,
              ...updatedFields, // Güncellenen alanları mevcut verilerle birleştir
            };

            return {
              degerlendirmeler: state.degerlendirmeler.map((deg) =>
                deg.degerlendirenKullanici === degerlendirenKullanici
                  ? updatedUser
                  : deg
              ),
            };
          }

          // Eğer kullanıcı daha önce eklenmemişse, yeni bir kullanıcı ekle
          // Tüm zorunlu alanlar için varsayılan değerler ekleniyor
          const emptySection: Section = { sonuc: 'onay', note: '', css: '', anchor: '' };
          const emptyNihaiKarar: NihaiKarar = { sonuc: '', note: '', css: '' };
          return {
            degerlendirmeler: [
              ...state.degerlendirmeler,
              {
                degerlendirenKullanici,
                sectionKisiBilgileri: emptySection,
                sectionIletisimBilgileri: emptySection,
                sectionPasaportBilgileri: emptySection,
                sectionEgitimBilgileri: emptySection,
                sectionGorevBilgileri: emptySection,
                sectionIsverenBilgileri: emptySection,
                sectionBelgeBilgileri: emptySection,
                nihaiKararBilgileri: emptyNihaiKarar,
                ...updatedFields,
              },
            ],
          };
        });
      },
    }),
    {
      name: 'degerlendirme-storage', // LocalStorage için key
    }
  )
);
