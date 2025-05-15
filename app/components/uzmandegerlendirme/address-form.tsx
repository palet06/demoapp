"use client"

import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function AddressForm() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Address</CardTitle>
        <div className="flex items-center gap-2">
          <Select defaultValue="home">
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Address type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="home">Home</SelectItem>
              <SelectItem value="work">Work</SelectItem>
              <SelectItem value="shipping">Shipping</SelectItem>
            </SelectContent>
          </Select>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">More options</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Use current location</DropdownMenuItem>
              <DropdownMenuItem>Clear address</DropdownMenuItem>
              <DropdownMenuItem>Import from contacts</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="address">Address</Label>
          <Input id="address" defaultValue="Avinguda Imaginary, 78F" />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="country">Country</Label>
          <Select defaultValue="spain">
            <SelectTrigger id="country">
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="spain">Spain</SelectItem>
              <SelectItem value="usa">United States</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
              <SelectItem value="canada">Canada</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="state">State</Label>
          <Input id="state" placeholder="State" />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="city">City</Label>
          <Input id="city" defaultValue="Barcelona" />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="postcode">Postcode</Label>
          <Input id="postcode" defaultValue="08012" />
        </div>

        <div className="flex justify-end">
          <Button>Save Changes</Button>
        </div>
      </CardContent>
    </Card>
  )
}
