import { Badge } from "@/components/Badge";
import { Ciudades } from "@/components/Ciudades";
import { EquipoVisor } from "@/components/EquipoVisor";
import { Noticias } from "@/components/Noticias";
import { NuestraHistoria } from "@/components/NuestraHistoria";
import { PorQueSerParte } from "@/components/PorQueSerParte";
import { QuienesSomos } from "@/components/QuienesSomos";

export default function Home() {
  return (
    <>
      <Badge />
      <QuienesSomos />
      <Ciudades />
      <PorQueSerParte />
      {/* <NuestraHistoria /> */} {/* TODO: revisar background */}
      <EquipoVisor />
      <Noticias />
    </>
  );
}
