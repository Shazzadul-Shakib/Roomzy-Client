import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Settings2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const page: React.FC = () => {
  return (
    <div className="mx-auto w-[80%]">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Room</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Edit</TableHead>
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
            <TableCell className="font-medium">Room title</TableCell>
            <TableCell>$100</TableCell>
            <TableCell>
              {" "}
              <p className="px-2 text-yellow-500">Pending</p>
            </TableCell>
            <TableCell className="flex items-center justify-end">
              <Link
                href={`rooms/${1}`}
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border"
              >
                {" "}
                <Settings2 size={16} />
              </Link>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default page;
