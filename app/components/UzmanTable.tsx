import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { AlarmClock, List, MoreHorizontal } from "lucide-react";
import { Application } from "@/generated/prisma";
import Link from "next/link";

const UzmanTable = ({ uzmanislistesi }: { uzmanislistesi: Application[] }) => {
  return (
    <Card className="mb-6">
      {/* <CardHeader className="p-4 pb-0">
          <CardTitle className="text-base font-medium">Recent Invoices</CardTitle>
        </CardHeader> */}
      <CardContent className="p-4">
        <div className="overflow-x-auto ">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Başvuru No</TableHead>
                <TableHead>Adı</TableHead>
                <TableHead>Soyadı</TableHead>
                <TableHead>YKN</TableHead>
                <TableHead>Başvuru Tarihi</TableHead>
                <TableHead>Durum</TableHead>
                <TableHead>Başvuru Türü</TableHead>
                <TableHead className="text-right">İşlem</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {uzmanislistesi.map((basvuru) => (
                <TableRow key={basvuru.id}>
                  <TableCell className="font-medium bg">
                    <Link
                      href={`/dashboard/degerlendirme/${basvuru.applicationNumber}`}
                      className="text-blue-600 hover:text-blue-600/65"
                    >
                      {basvuru.applicationNumber}
                    </Link>
                  </TableCell>
                  <TableCell>{basvuru.firstName}</TableCell>
                  <TableCell>{basvuru.lastName}</TableCell>
                  <TableCell>{basvuru.foreignIdentityNumber}</TableCell>
                  <TableCell>
                    {basvuru.applicationDate?.toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        basvuru.status === "DEGERLENDIRME_ASAMASINDA"
                          ? "warning"
                          : "default"
                      }
                    >
                      {basvuru.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{basvuru.applicationType}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 cursor-pointer"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <Link
                          className="flex items-center gap-1"
                          href={`/dashboard/degerlendirme/${basvuru.applicationNumber}`}
                        >
                          <DropdownMenuItem
                            className="cursor-pointer"
                            onClick={() => {}}
                          >
                            <List className="h-4 w-4 mr-2" />
                            Başvuru Detayı
                          </DropdownMenuItem>
                        </Link>

                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => {}}>
                          <AlarmClock className="h-4 w-4 mr-2" />
                          Hatırlat
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default UzmanTable;
