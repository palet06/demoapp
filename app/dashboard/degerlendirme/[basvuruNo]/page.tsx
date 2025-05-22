import UzmanBasvuruDegerlendirme from "@/app/components/uzmandegerlendirme/UzmanBasvuruDegerlendirme";
import React from "react";

const page = async ({ params }: { params: Promise<{ basvuruNo: string }> }) => {
  const { basvuruNo } = await params;

  return (
    <>
      <UzmanBasvuruDegerlendirme basvuruNo={basvuruNo} kullanici={"kemal.yetisir"} />
    </>
  );
};

export default page;
