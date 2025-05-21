"use client"
import React from 'react'
import { useDegerlendirmeStore } from "@/app/store/store";

const SmListesi = () => {
    const ka = useDegerlendirmeStore((state) => state.degerlendirme.sectionKisiBilgileri.sonuc);
  return (
    <div>SmListesi {ka} </div>
  )
}

export default SmListesi