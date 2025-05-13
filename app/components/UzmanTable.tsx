import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Download, MoreHorizontal, Printer } from 'lucide-react'

const invoices = [
    {
      id: "3547896",
      guest: "Ram Kailash",
      date: "26 Jul 2023",
      amount: "rsp.1500",
      status: "Paid",
      items: [
        { description: "Room Charges (2 nights)", amount: "rsp.1200" },
        { description: "Food & Beverages", amount: "rsp.300" },
      ],
    },
    {
      id: "INV-2023-002",
      guest: "Samira Karki",
      date: "25 Jul 2023",
      amount: "rsp.5500",
      status: "Paid",
      items: [
        { description: "Room Charges (4 nights)", amount: "rsp.4800" },
        { description: "Food & Beverages", amount: "rsp.700" },
      ],
    },
    {
      id: "INV-2023-003",
      guest: "Jeevan Rai",
      date: "24 Jul 2023",
      amount: "rsp.2500",
      status: "Pending",
      items: [
        { description: "Room Charges (1 night)", amount: "rsp.2000" },
        { description: "Food & Beverages", amount: "rsp.500" },
      ],
    },
  ]

const UzmanTable = () => {
  return (
      <Card className="mb-6">
        {/* <CardHeader className="p-4 pb-0">
          <CardTitle className="text-base font-medium">Recent Invoices</CardTitle>
        </CardHeader> */}
        <CardContent className="p-4">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice ID</TableHead>
                  <TableHead>Guest</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Durum</TableHead>
                  <TableHead className="text-right">İşlem</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow key={invoice.id}>
                    <TableCell className="font-medium bg">{invoice.id}</TableCell>
                    <TableCell>{invoice.guest}</TableCell>
                    <TableCell>{invoice.date}</TableCell>
                    <TableCell>{invoice.amount}</TableCell>
                    <TableCell>
                      <Badge variant={invoice.status === "Paid" ? "destructive" : "warning"}>{invoice.status}</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem
                            onClick={() => {
                              toast({
                                title: "Invoice details",
                                description: `Viewing details for invoice ${invoice.id}`,
                              })
                            }}
                          >
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => {
                              toast({
                                title: "Invoice printed",
                                description: `Invoice ${invoice.id} sent to printer`,
                              })
                            }}
                          >
                            <Printer className="h-4 w-4 mr-2" />
                            Print
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => {
                              toast({
                                title: "Invoice downloaded",
                                description: `Invoice ${invoice.id} downloaded as PDF`,
                              })
                            }}
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            onClick={() => {
                              toast({
                                title: "Payment reminder sent",
                                description: `Reminder sent to ${invoice.guest}`,
                              })
                            }}
                          >
                            Send Reminder
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
  )
}

export default UzmanTable