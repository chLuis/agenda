import { GetDataAction } from "@/actions/data";
import ContactCard from "@/components/contact-card";
import GetProvincesAction from "@/actions/get-provinces";
import GlobalContactAdd from "@/components/global-contact-add";
import { ContactType } from "@/types";
import FilterByProvince from "@/components/filter-by-province";

type PageProps = {
  searchParams: Promise<{ provincia?: string }>;
};

export default async function Home({ searchParams }: PageProps) {
  const params = await searchParams;
  const provinceFilter = params.provincia || '';

  const { payload }: {payload: ContactType[]} = await GetDataAction({ province : provinceFilter})
  const { payload: provinces } = await GetProvincesAction()

  return (
    <div className="w-full p-4 bg-neutral-800 min-h-screen text-white">
      <section className="flex flex-col gap-2">
        <h2 className="text-center font-bold text-xl">Agenda de contactos</h2>
        <FilterByProvince provinces={provinces} />
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
            {payload?.map((contact) => 
            <tr key={contact.id_persona} className="grid grid-cols-10 py-1 hover:bg-neutral-700 duration-200" >
              <ContactCard provinces={provinces} contact={contact} />
            </tr>
            )}
          </tbody>
        </table>
      </section>
      <GlobalContactAdd provinces={provinces} />
    </div>
  );
}
