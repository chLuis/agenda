'use client'
import { DeleteDataAction } from "@/actions/data";
import { Delete } from "lucide-react";
import { toast } from "sonner";

export default function ContactDelete({id_persona}: {id_persona: number}) {
  async function handleDelete() {
    const { status } = await DeleteDataAction({id_persona})
    if (status === 200) {
      toast("Contacto eliminado")
    }
  }

  return (
    <button onClick={handleDelete} className="flex items-center gap-2 w-full"><Delete />Borrar</button>
  )
}