"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle,
  ExternalLink,
  PackagePlus,
  RefreshCcw,
  X,
} from "lucide-react";
import { RadioGroup } from "@/components/ui/radio-group";
import { RadioGroupItem } from "@radix-ui/react-radio-group";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";

type Option = {
  id: string;
  title: string;
  cssValue?: string;
  icon: React.ReactNode;
};

export function DegerlendirmeSonucIslemi() {
  const [yapilanIslem, setYapilanIslem] = useState<string>("");

  const [islemNotu, setIslemNotu] = useState<string>("");

  const [selected, setSelected] = useState<string>("");

  const options: Option[] = [
    {
      id: "option1",
      title: "Onay",
      cssValue: "bg-green-400 text-white",
      icon: <PackagePlus className="h-6 w-6 text-white" />,
    },
    {
      id: "option2",
      title: "Ret",
      cssValue: "bg-red-400 text-white",
      icon: <X className="h-6 w-6 text-white" />,
    },
    {
      id: "option3",
      title: "Güncelleme",
      cssValue: "bg-orange-400 text-white",
      icon: <RefreshCcw className="h-6 w-6 text-white" />,
    },
    {
      id: "option4",
      cssValue: "bg-gray-400 text-white",
      title: "Dış Kurum Görüş",
      icon: <ExternalLink className="h-6 w-6 text-white" />,
    },
  ];

  return (
    <Card className="border border-blue-600">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl font-bold flex items-center justify-center gap-2 cursor-pointer hover:text-blue-600 h-[15px]">
          Değerlendirme Sonucu
        </CardTitle>
        <div className="flex items-center gap-2"></div>
      </CardHeader>
      <CardContent className="space-y-4 ">
        <RadioGroup
          value={selected}
          onValueChange={setSelected}
          className="grid grid-cols-1 md:grid-cols-4 gap-3 w-full  "
        >
          {options.map((option) => (
            <div key={option.id} className={`relative  `}>
              <RadioGroupItem
                value={option.id}
                id={option.id}
                className="sr-only "
              />
              <Label
                htmlFor={option.id}
                className="cursor-pointer block h-full"
              >
                <Card
                  onClick={() => setYapilanIslem(option.title)}
                  className={cn(
                    `h-full transition-all border-2 ${
                      option.cssValue ? option.cssValue : ""
                    }`,
                    selected === option.id
                      ? "border-primary shadow-md"
                      : "border-muted hover:border-muted-foreground/50"
                  )}
                >
                  <CardContent
                    className={`flex flex-col  items-center justify-center w-full `}
                  >
                    <div
                      className={cn(
                        `absolute top-3 right-3 `,
                        selected === option.id ? "visible" : "invisible"
                      )}
                    >
                      <CheckCircle className="h-6 w-6 text-primary fill-primary" />
                    </div>
                    <div className="">{option.icon}</div>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-medium text-base">{option.title}</h3>
                    </div>
                  </CardContent>
                </Card>
              </Label>
            </div>
          ))}
        </RadioGroup>
        {yapilanIslem && (
          <>
            <div className="flex flex-col items-start gap-4 ">
              <label
                htmlFor="confirm"
                className="text-sm text-left font-medium pl-2 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {yapilanIslem} İşlemine dair açıklamanızı yazın.
              </label>
              <Textarea
                onChange={(e) => setIslemNotu(e.target.value)}
                placeholder="Notunuzu buraya yazın"
              />
            </div>

            <div className="flex justify-end space-x-2">
              <Button className="cursor-pointer" variant="outline">
                İşlemi Kaydet 
              </Button>
              <Button onClick={() => {}} variant="destructive" 
              className={
                `
                ${selected==="option1"&&"bg-green-400 text-white"}
                ${selected==="option12"&&"bg-red-400 text-white"}
                ${selected==="option3"&&"bg-orange-400 text-white"}
                ${selected==="option4"&&"bg-gray-400 text-white"}
                `
                }>
                
                {yapilanIslem} işlemini kaydet.
              </Button>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
