"use client";

import { useState } from "react";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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

export function DegerlendirmeSonucIslemi() {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <Card className="border border-blue-600">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl font-bold flex items-center justify-center gap-2 cursor-pointer hover:text-blue-600 h-[35]">
          Delete Account
        </CardTitle>
        <div className="flex items-center gap-2">
          <Select defaultValue="permanent">
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Deletion type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="permanent">Permanent</SelectItem>
              <SelectItem value="temporary">Temporary (30 days)</SelectItem>
              <SelectItem value="archive">Archive Only</SelectItem>
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
              <DropdownMenuItem>Download data</DropdownMenuItem>
              <DropdownMenuItem>Request data report</DropdownMenuItem>
              <DropdownMenuItem>Contact support</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          We regret to see you leave. Confirm account deletion below. Your data
          will be permanently removed. Thank you for being part of our
          community. Please check our{" "}
          <a href="#" className="text-primary underline">
            safety guidelines
          </a>{" "}
          if you still wish continue.
        </p>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="confirm"
            checked={confirmed}
            onCheckedChange={(checked) => setConfirmed(checked as boolean)}
          />
          <label
            htmlFor="confirm"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Confirm deleting account
          </label>
        </div>

        <div className="flex justify-end space-x-2">
          <Button variant="outline">Deactivate Instead</Button>
          <Button variant="destructive" disabled={!confirmed}>
            Delete Account
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
