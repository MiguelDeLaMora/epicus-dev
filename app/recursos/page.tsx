import Recursos from "@/components/sections/Recursos";
import { getRecursos } from "@/sanity/lib/client";

export const metadata = {
  title: "Recursos",
};

export default async function RecursosPage() {
  const recursos = await getRecursos();
  return <Recursos recursos={recursos} />;
}