import { Badge } from "@/components/Badge";
import { Caracteristicas } from "@/components/Caracteristicas";
import { Ciudades } from "@/components/Ciudades";
import { EquipoVisor } from "@/components/EquipoVisor";
import { Noticias } from "@/components/Noticias";
import { PorQueSerParte } from "@/components/PorQueSerParte";
import { NuestraHistoria } from "@/components/NuestraHistoria";
import { QuienesSomos } from "@/components/QuienesSomos";
import { BeneficiosCertificar } from "@/components/BeneficiosCertificar";

export default function Home() {
  return (
    <>
      <Badge />
      <QuienesSomos />
      <Ciudades />
      <PorQueSerParte />
      <Caracteristicas />
      <BeneficiosCertificar />
      <NuestraHistoria />
      <EquipoVisor />
      <Noticias />
    </>
  );
}
