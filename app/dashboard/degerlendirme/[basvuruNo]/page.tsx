import React from 'react'

const page = async ({
  params
}: {
  params: Promise<{ basvuruNo: string }>
}) => {

    const { basvuruNo } = await params
  return (
    <div>{basvuruNo}</div>
  )
}

export default page