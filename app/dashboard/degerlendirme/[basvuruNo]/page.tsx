import UzmanBasvuruDegerlendirme from '@/app/components/uzmandegerlendirme/UzmanBasvuruDegerlendirme'
import React from 'react'

const page = async ({
  params
}: {
  params: Promise<{ basvuruNo: string }>
}) => {

    const { basvuruNo } = await params

  return (
    <>
    
    <UzmanBasvuruDegerlendirme />
    </>

  )
}

export default page