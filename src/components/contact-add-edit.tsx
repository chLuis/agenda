"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useState } from "react";
import { PatchDataAction, PostDataAction } from "@/actions/data";
import { Loader } from "lucide-react";
import { ContactType, ProvinceType } from "@/types";
import { toast } from "sonner";

const InitialValues = {
  apellido: "",
  nombre: "",
  telefono: "",
  id_provincia: 0,
};

export default function ContactAddEdit({
  provinces,
  contact,
  open,
  closeOpen,
}: {
  provinces: ProvinceType[];
  contact?: ContactType;
  open: boolean;
  closeOpen: () => void;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newContact, setNewContact] = useState(
    contact ? contact : InitialValues
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    if(!contact?.id_provincia && !newContact.id_provincia) {
      setIsSubmitting(false)
      return toast("Debe elegir una provincia")
    }

    if (contact) {
      const response = await PatchDataAction({
        ...newContact,
        id_persona: contact.id_persona,
      });
      if (response.status === 200) {
        closeOpen();
        toast("Contacto editado");
      }
    } else {
      const response = await PostDataAction(newContact);
      if (response.status === 201) {
        closeOpen();
        setNewContact(InitialValues);
        toast("Contacto agregado");
      }
    }
    setIsSubmitting(false);
  };

  return (
    <Sheet open={open} onOpenChange={closeOpen}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-xl p-2">
            {contact ? "Editar" : "Agregar"} contacto
          </SheetTitle>
          <SheetDescription></SheetDescription>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="grid grid-cols-1 gap-2"
          >
            <label className="flex flex-col">
              <span>Apellido</span>
              <input
                required
                type="text"
                maxLength={32}
                defaultValue={contact?.apellido || newContact.apellido}
                onChange={(e) =>
                  setNewContact({ ...newContact, apellido: e.target.value })
                }
                className="border p-2 rounded-sm"
                name="apellido"
              />
            </label>
            <label className="flex flex-col">
              <span>Nombre</span>
              <input
                required
                type="text"
                maxLength={32}
                defaultValue={contact?.nombre || newContact.nombre}
                onChange={(e) =>
                  setNewContact({ ...newContact, nombre: e.target.value })
                }
                className="border p-2 rounded-sm"
                name="nombre"
              />
            </label>
            <label className="flex flex-col">
              <span>Teléfono</span>
              <input
                required
                maxLength={20}
                type="text"
                defaultValue={contact?.telefono || newContact.telefono}
                onChange={(e) =>
                  setNewContact({ ...newContact, telefono: e.target.value })
                }
                className="border p-2 rounded-sm"
                name="telefono"
                inputMode="numeric"
                pattern="^[+]?[0-9\-]+$"
              />
            </label>
            <label className="flex flex-col">
              <span>Provincia</span>
              <select
              required
                className="border p-2 rounded-sm"
                value={newContact.id_provincia}
                onChange={(e) =>
                  setNewContact({
                    ...newContact,
                    id_provincia: Number(e.target.value),
                  })
                }
              >
                <option value={0} disabled>
                  Elegir
                </option>
                {provinces?.map((provincia, index) => (
                  <option key={index} value={provincia.id_provincia}>
                    {provincia.nombre_provincia}
                  </option>
                ))}
              </select>
            </label>
            <button
              type="submit"
              className={`border p-2 ${
                contact ? "bg-blue-700" : "bg-green-600"
              } flex items-center justify-center text-white rounded-sm cursor-pointer`}
            >
              {isSubmitting ? (
                <Loader className="animate-spin" />
              ) : contact ? (
                "Editar"
              ) : (
                "Agregar"
              )}
            </button>
          </form>
          <SheetClose
            onClick={closeOpen}
            className="p-2 rounded-sm cursor-pointer"
          >
            Cerrar
          </SheetClose>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
