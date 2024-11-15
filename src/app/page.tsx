import { Badge } from "@/components/Badge";
import { Ciudades } from "@/components/Ciudades";
import { EquipoVisor } from "@/components/EquipoVisor";
import { Noticias } from "@/components/Noticias";
import { PorQueSerParte } from "@/components/PorQueSerParte";
import { QuienesSomos } from "@/components/QuienesSomos";

export default function Home() {
  return (
    <>
      <Badge />
      <QuienesSomos />
      <Ciudades />
      <PorQueSerParte />
      <EquipoVisor />
      <Noticias />
    </>
  );
}
