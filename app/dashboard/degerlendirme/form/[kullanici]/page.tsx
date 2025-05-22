

import DegerlendirmeFormu from "@/app/components/degerlendirme-formu";


const page = async ({ params }: { params: Promise<{ kullanici: string }> }) => {
  const { kullanici } = await params;

  return (<DegerlendirmeFormu kullanici={kullanici}/>)
   
};

export default page;