import { GetDataAction } from "@/actions/data";
import GetProvincesAction from "@/actions/get-provinces";
import GlobalContactAdd from "@/components/global-contact-add";
import FilterByProvince from "@/components/filter-by-province";
import TableContact from "@/components/table-contact";

type PageProps = {
  searchParams: Promise<{ provincia?: string }>;
};

export default async function Home({ searchParams }: PageProps) {
  const params = await searchParams;
  const provinceFilter = params.provincia || '';

  const { payload: contacts } = await GetDataAction({ province : provinceFilter})
  const { payload: provinces } = await GetProvincesAction()

  return (
    <div className="w-full p-4 bg-neutral-800 min-h-screen text-white">
      <section className="flex flex-col gap-2">
        <h2 className="text-center font-bold text-xl">Agenda de contactos</h2>
        <FilterByProvince provinces={provinces} />
        <TableContact contacts={contacts} provinces={provinces} />
      </section>
      <GlobalContactAdd provinces={provinces} />
    </div>
  );
}
