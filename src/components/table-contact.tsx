import { ContactType, ProvinceType } from "@/types";
import ContactCard from "@/components/contact-card";

export default function TableContact({contacts, provinces}:{contacts: ContactType[], provinces: ProvinceType[]}) {
  return (

    <table className="w-full mx-auto max-w-xl">
          <thead>
            <tr className="grid grid-cols-10 border border-white">
              <th className="col-span-3 text-start px-2">Apellido</th>
              <th className="col-span-3 text-start px-2">Nombre</th>
              <th className="col-span-3 text-start px-2">Provincia</th>
              <th className="col-span-1 text-center px-2">Ops</th>
            </tr>
          </thead>
          <tbody>
            {contacts?.map((contact) => 
            <tr key={contact.id_persona} className="grid grid-cols-10 py-1 hover:bg-neutral-700 duration-200" >
              <ContactCard provinces={provinces} contact={contact} />
            </tr>
            )}
          </tbody>
        </table>
  )
}