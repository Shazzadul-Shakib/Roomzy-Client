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
import { Settings2 } from "lucide-react";
import Image from "next/image";
import useToggle from "@/hooks/useToggle";
import ModalBody from "@/components/shared/modalbody";
import BookingModal from "@/components/modalCard/BookingStatusUpdateCard";

const BookingsPage: React.FC = () => {
  const [isOpen, toggle] = useToggle();
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Room</TableHead>
            <TableHead>Booking Date</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Check in</TableHead>
            <TableHead>Check out</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              {" "}
              <div className="relative h-14 w-14">
                <Image
                  src="/hero.jpg"
                  alt="room"
                  fill
                  className="rounded-md object-cover"
                />
              </div>
            </TableCell>
            <TableCell className="font-medium">10-10-2024</TableCell>
            <TableCell>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </TableCell>
            <TableCell>12-10-2024</TableCell>
            <TableCell>15-10-2024</TableCell>
            <TableCell className="flex items-center justify-end">
              <p className="px-2 text-yellow-500">Pending</p>
              <div
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border"
                onClick={toggle}
              >
                {" "}
                <Settings2 size={16} />
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      {isOpen && <ModalBody modal={<BookingModal onClose={toggle} />} />}
    </div>
  );
};

export default BookingsPage;
