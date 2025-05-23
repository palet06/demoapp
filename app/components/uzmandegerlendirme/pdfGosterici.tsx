"use client";

import * as React from "react";
import {
  Sheet,
  SheetContent,
  
  SheetTitle,
  
} from "@/components/ui/sheet";

export default function PdfGosterici({ pdfUrl,label }: { pdfUrl: string,label:string }) {
  const [open, setOpen] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.shiftKey) {
      e.preventDefault();
      setOpen(true);
    }
    // Aksi halde normal link davranışı gerçekleşir (yeni sekmede açılır)
  };

  return (
    <>
      <a
        href={pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="text-blue-600 underline"
      >
       {label}
      </a>

      <Sheet open={open} onOpenChange={setOpen}>
        

        <SheetContent side="left" className="!min-w-[650px] ">
          
            <SheetTitle className="">Dosya Görüntüle</SheetTitle>

            <div className="h-full !w-[40rem]">
              <iframe
                src={pdfUrl}
                className="!w-[40rem] h-full"
                title="PDF Viewer"
              ></iframe>
            </div>
          
        </SheetContent>
      </Sheet>
    </>
  );
}
