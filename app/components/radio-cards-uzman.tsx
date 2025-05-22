"use client";


import type React from "react";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import {
  CheckCircle,
  FolderSync,
  PackagePlus,
  SatelliteDish,
  Undo2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import UzmanTable from "./UzmanTable";
import { Application } from "@/generated/prisma";

type Option = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  taskCount: number;
};

export default function RadioCardsUzman({
  uzmanislistesi,
}: {
  uzmanislistesi: Application[];
}) {

 
  
 


  
  const [selected, setSelected] = useState<string>("option1");

  const options: Option[] = [
    {
      id: "option1",
      title: "İlk İşlem Bekleyen",
      description: "Yeni tamamlanan ve ilk işlem bekleyen başvurular.",
      icon: <PackagePlus className="h-10 w-10 text-blue-500" />,
      taskCount: uzmanislistesi.length,
    },
    {
      id: "option2",
      title: "Güncellemeden Gelenler.",
      description: "Başvuran tarafından güncelleme yapılan başvurular.",
      icon: <FolderSync className="h-10 w-10 text-green-500" />,
      taskCount: 0,
    },
    {
      id: "option3",
      title: "İade Edilen Başvurular.",
      description: "Amir tarafından iade edilen başvuruların listesi.",
      icon: <Undo2 className="h-10 w-10 text-purple-500" />,
      taskCount: 50,
    },
    {
      id: "option4",
      title: "Dış Kurum Görüşü.",
      description: "Dış kurum tarafından görüş bildirilen başvurular.",
      icon: <SatelliteDish className="h-10 w-10 text-purple-500" />,
      taskCount: 50,
    },
  ];

  return (
    <div className="w-full flex flex-col gap-5 ">
      <h2 className="text-lg font-bold mb-3 text-center">
        Uzman İş Listesi 
      
      </h2>

      <RadioGroup
        value={selected}
        onValueChange={setSelected}
        className="grid grid-cols-1 md:grid-cols-4 gap-3 w-full "
      >
        {options.map((option) => (
          <div key={option.id} className="relative ">
            <RadioGroupItem
              value={option.id}
              id={option.id}
              className="sr-only"
            />
            <Label htmlFor={option.id} className="cursor-pointer block h-full">
              <Card
                className={cn(
                  "h-full transition-all border-2",
                  selected === option.id
                    ? "border-primary shadow-md"
                    : "border-muted hover:border-muted-foreground/50"
                )}
              >
                <CardContent className="flex flex-row gap-2 items-start text-left">
                  <div
                    className={cn(
                      "absolute top-3 right-3",
                      selected === option.id ? "visible" : "invisible"
                    )}
                  >
                    <CheckCircle className="h-6 w-6 text-primary fill-primary" />
                  </div>
                  <div className="">{option.icon}</div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-medium text-base">{option.title}</h3>
                    <p className="text-muted-foreground ">
                      {option.description}
                    </p>
                    <Badge
                      variant="secondary"
                      className={`mt-1 px-3 py-1 ${
                        option.taskCount === 0
                          ? "text-red-500"
                          : "text-green-500"
                      }`}
                    >
                      {option.taskCount === 0
                        ? "Başvuru yok"
                        : `${option.taskCount} Başvuru`}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </Label>
          </div>
        ))}
      </RadioGroup>

      {selected === "option1" && <UzmanTable uzmanislistesi={uzmanislistesi} />}
    </div>
  );
}
