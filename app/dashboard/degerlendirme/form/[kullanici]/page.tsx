

import DegerlendirmeFormu from "@/app/components/degerlendirme-formu";


const Page = async ({ params }: { params: Promise<{ kullanici: string }> }) => {
  
  
  const { kullanici } = await params;

  return (<DegerlendirmeFormu kullanici={kullanici}/>)
   
};

export default Page;