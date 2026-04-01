import DesarrolladoresHero from "@/components/sections/DesarrolladoresHero";
import DesarrolladoresTrack from "@/components/sections/DesarrolladoresTrack";
import Modalidades from "@/components/sections/Modalidades";
import PorQueEpicus from "@/components/sections/PorQueEpicus";

export const metadata = {
  title: "Para Desarrolladores",
};

export default function DesarrolladoresPage() {
  return (
    <>
      <DesarrolladoresHero />
      <DesarrolladoresTrack />
      <Modalidades />
      <PorQueEpicus />
    </>
  );
}