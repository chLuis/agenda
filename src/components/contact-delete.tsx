'use client'
import { DeleteDataAction } from "@/actions/data";

export default function ContactDelete({id_persona}: {id_persona: number}) {
  async function handleDelete() {
    const { status } = await DeleteDataAction({id_persona})
    console.log(status);
  }

  return (
    <button onClick={handleDelete}>Borrar</button>
  )
}