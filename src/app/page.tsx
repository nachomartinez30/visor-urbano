import { Badge } from "@/components/Badge";
import { Caracteristicas } from "@/components/Caracteristicas";
import { Ciudades } from "@/components/Ciudades";
import { EquipoVisor } from "@/components/EquipoVisor";
import { Noticias } from "@/components/Noticias";
import { PorQueSerParte } from "@/components/PorQueSerParte";
import { NuestraHistoria } from "@/components/NuestraHistoria";
import { QuienesSomos } from "@/components/QuienesSomos";

export default function Home() {
  return (
    <>
      <Badge />
      <QuienesSomos />
      <Ciudades />
      <PorQueSerParte />
      <Caracteristicas/>
      <NuestraHistoria/>
      <EquipoVisor />
      <Noticias />
    </>
  );
}
