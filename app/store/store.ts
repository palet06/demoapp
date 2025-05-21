import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Degerlendirme = {
  degerlendirenKullanici: string;
  sectionKisiBilgileri: {
    sonuc: string;
    note: string;
  };
};

type DegerlendirmeStore = {
  degerlendirme: Degerlendirme;
  setDegerlendirme: (degerlendirme: Degerlendirme) => void;
};

export const useDegerlendirmeStore = create<
  DegerlendirmeStore,
  [['zustand/persist', DegerlendirmeStore]]
>(
  persist(
    (set) => ({
      degerlendirme: {
        degerlendirenKullanici: '',
        sectionKisiBilgileri: {
          sonuc: '',
          note: '',
        },
      },
      setDegerlendirme: (newDegerlendirme) => {
        set((state) => ({
          degerlendirme: {
            ...state.degerlendirme,
            ...newDegerlendirme,
          },
        }));
      },
    }),
    {
      name: 'degerlendirme-storage', // unique name
    }
  )
)
