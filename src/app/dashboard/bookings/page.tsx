"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const BookingsPage: React.FC = () => {
  const [selectedStatus, setSelectedStatus] = useState<string>("Pending");
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Booking Date</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Check in</TableHead>
            <TableHead>Check out</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">10-10-2024</TableCell>
            <TableCell>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </TableCell>
            <TableCell>12-10-2024</TableCell>
            <TableCell>15-10-2024</TableCell>
            <TableCell className="flex justify-end">
              <Select onValueChange={(value) => setSelectedStatus(value)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder={selectedStatus} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="confirmed">Confirmed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default BookingsPage;
