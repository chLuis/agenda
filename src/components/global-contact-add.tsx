'use client'
import { useState } from "react";
import { Plus } from "lucide-react";
import { ProvinceType } from "@/types";
import ContactAddEdit from "./contact-add-edit";

export default function GlobalContactAdd({provinces}:{provinces: ProvinceType[]}) {
  const [open, setOpen] = useState(false)

  return (
    <div className="z-10 fixed flex items-center justify-center bottom-4 right-4 w-12 h-12 rounded-full border bg-green-600 cursor-pointer">
      <Plus onClick={() => setOpen(true)} className="w-full h-full rounded-full p-1" />
      <ContactAddEdit provinces={provinces} open={open} closeOpen={() => setOpen(false)} />
    </div>
  )
}