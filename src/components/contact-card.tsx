"use client";
import { IoCallOutline } from "react-icons/io5";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { Copy, Edit } from "lucide-react";
import { TbDotsVertical } from "react-icons/tb";
import { ContactType, ProvinceType } from "@/types";
import ContactDelete from "./contact-delete";
import ContactAddEdit from "./contact-add-edit";

export default function ContactCard({
  provinces,
  contact,
}: {
  provinces: ProvinceType[];
  contact: ContactType;
}) {
  const [open, setOpen] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(contact.telefono);
  }
  return (
    <>
      <td className="col-span-3 px-2 truncate">{contact.apellido}</td>
      <td className="col-span-3 px-2 truncate">{contact.nombre}</td>
      <td className="col-span-3 px-2 truncate">{contact.provincia}</td>
      <td className="col-span-1 px-2 truncate">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex w-full items-center justify-center py-1">
            <TbDotsVertical />{" "}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel className="flex flex-col">
              <span>
                {contact.apellido} {contact.nombre}
              </span>
              <span className="text-xs opacity-70">{contact.telefono}</span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className=" hover:bg-neutral-200 duration-200">
              <a href={`tel:${contact.telefono}`} className="flex items-center gap-2 w-full">
              <IoCallOutline />
                Llamar
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleCopy} className="flex flex-nowrap items-center gap-2 hover:bg-neutral-200 duration-200">
              <Copy />
              Copiar
            </DropdownMenuItem>
            <DropdownMenuItem
              onSelect={(e) => {
                e.preventDefault();
                setOpen(true);
              }}
            >
              <Edit />
              Editar contacto
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-neutral-200 duration-200">
              <ContactDelete id_persona={contact.id_persona} />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <ContactAddEdit
          contact={contact}
          provinces={provinces}
          open={open}
          closeOpen={() => setOpen(false)}
        />
      </td>
    </>
  );
}
