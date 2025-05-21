"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Degerlendirme tipi
type Degerlendirme = {
  degerendirenKullanici: string;
  sectionKisiBilgileri: {
    sonuc: string;
    note: string;
  };
};

// Context tipi
interface DegerlendirmeContextType {
  degerlendirme: Degerlendirme;
  setDegerlendirme: React.Dispatch<React.SetStateAction<Degerlendirme>>;
}

// Default context değeri (başlangıçta boş bir değer ile)
const defaultContext: DegerlendirmeContextType = {
  degerlendirme: {
    degerendirenKullanici: '',
    sectionKisiBilgileri: {
      sonuc: '',
      note: '',
    },
  },
  setDegerlendirme: () => {}, // default boş bir fonksiyon
};

// Context oluşturuluyor
const DegerlendirmeContext = createContext<DegerlendirmeContextType>(defaultContext);

// Provider bileşeni
interface DegerlendirmeProviderProps {
  children: ReactNode;
}

export const DegerlendirmeProvider: React.FC<DegerlendirmeProviderProps> = ({ children }) => {
  const [degerlendirme, setDegerlendirme] = useState<Degerlendirme>({
    degerendirenKullanici: '',
    sectionKisiBilgileri: {
      sonuc: '',
      note: '',
    },
  });

  return (
    <DegerlendirmeContext.Provider value={{ degerlendirme, setDegerlendirme }}>
      {children}
    </DegerlendirmeContext.Provider>
  );
};

// Context'i kullanan hook
export const useDegerlendirme = (): DegerlendirmeContextType => {
  return useContext(DegerlendirmeContext);
};
