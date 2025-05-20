"use client";

import { useState } from "react";
import Image from "next/image";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function BasicSettingsForm() {
  const [isAvailable, setIsAvailable] = useState(true);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Basic Settings</CardTitle>
        <div className="flex items-center gap-2">
          <Select defaultValue="default">
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Select view" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Default View</SelectItem>
              <SelectItem value="compact">Compact View</SelectItem>
              <SelectItem value="expanded">Expanded View</SelectItem>
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
              <DropdownMenuItem>Reset to defaults</DropdownMenuItem>
              <DropdownMenuItem>Copy settings</DropdownMenuItem>
              <DropdownMenuItem>Export settings</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="photo">Photo</Label>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              150x150px (JPG, PNG image)
            </span>
            <div className="relative h-12 w-12 overflow-hidden rounded-full">
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="Profile photo"
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" defaultValue="Jason Tatum" />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="birth-date">Birth Date</Label>
          <Input id="birth-date" type="date" defaultValue="1984-01-20" />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="company">Company</Label>
          <Input id="company" defaultValue="KennThemes" />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="phone">Phone number</Label>
          <Input id="phone" placeholder="Enter phone" />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="visibility">Visibility</Label>
          <Select defaultValue="public">
            <SelectTrigger id="visibility">
              <SelectValue placeholder="Select visibility" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="public">Public</SelectItem>
              <SelectItem value="private">Private</SelectItem>
              <SelectItem value="restricted">Restricted</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="availability">Available to hire</Label>
          <Switch
            id="availability"
            checked={isAvailable}
            onCheckedChange={setIsAvailable}
          />
        </div>

        <div className="flex justify-end">
          <Button>Save Changes</Button>
        </div>
      </CardContent>
    </Card>
  );
}
