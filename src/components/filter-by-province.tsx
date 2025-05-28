"use client";

import { ProvinceType } from "@/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";

export default function FilterByProvince({
  provinces,
}: {
  provinces: ProvinceType[];
}) {
  return (
    <div className="w-full flex justify-center items-center">
      <DropdownMenu>
        <DropdownMenuTrigger className="border border-neutral-700 p-1 rounded-md bg-neutral-600 text-neutral-300 hover:bg-neutral-700 hover:border-neutral-500 cursor-pointer duration-200">Filtrar por provincia</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Filtrar por provincia</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <ScrollArea className="h-72 w-48">
            <DropdownMenuItem
              asChild
              className="flex flex-nowrap items-center gap-2 p-1 rounded-md hover:bg-neutral-200 duration-200"
            >
              <Link href={"/"} className="cursor-pointer">Limpiar Filtro</Link>
            </DropdownMenuItem>
            {provinces?.map((provincia, index) => (
              <DropdownMenuItem
                key={index}
                asChild
                className="flex flex-nowrap items-center gap-2 p-1 rounded-md hover:bg-neutral-200 duration-200"
              >
                <Link href={`/?provincia=${provincia.nombre_provincia}`} className="cursor-pointer">
                  {provincia.nombre_provincia}
                </Link>
              </DropdownMenuItem>
            ))}
          </ScrollArea>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
