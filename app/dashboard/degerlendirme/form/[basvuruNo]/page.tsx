

import DegerlendirmeFormu from "@/app/components/degerlendirme-formu";


const page = async ({ params }: { params: Promise<{ basvuruNo: string }> }) => {
  const { basvuruNo } = await params;

  return (<DegerlendirmeFormu />)
   
};

export default page;