import Image from "next/image";
import clock from "../assets/images/features/ico_licencias_negocio_2.png";
import list from "../assets/images/features/ico_licencias_negocio.png";
import map from "../assets/images/features/ico_licencias_negocio_3.png";
import mail from "../assets/images/features/ico_licencias_negocio_4.png";
import like from "../assets/images/features/ico_licencias_negocio_5.png";
import speaker from "../assets/images/features/ico_licencias_negocio_6.png";

const features = [
  {
    content: "Promueve trámites ágiles y transparentes",
    image: clock,
  },
  {
    content: "Permite la apertura y georreferenciación de la información",
    image: list,
  },
  {
    content: "Propicia la colaboración entre entidades gubernamentales",
    image: map,
  },
  {
    content: "Acelera tiempos y reduce costos de los trámites",
    image: mail,
  },
  {
    content: "Fomenta una relación más cercana entre gobierno y ciudadanía",
    image: like,
  },
  {
    content: "Fomenta una relación más cercana entre gobierno y ciudadanía",
    image: speaker,
  },
  {
    content: "Fomenta una relación más cercana entre gobierno y ciudadanía",
    image: clock,
  },
];

export const PorQueSerParte = () => {
  return (
    <section id="por_que_ser_parte" className="bg-yellow-300 h-svh">
      <h3 className="text-blue-500">¿Por qué ser parte de Visor Urbano?</h3>
      {features.map((feature, index) => (
        <Item key={index} {...feature} />
      ))}

      <button className="bg-blue-500 rounded-full py-3 px-5 text-white">
        Quiero implementar Visor Urbano
      </button>
      <button className="bg-blue-500 rounded-full py-3 px-5 text-white">
        ¿Necesitas ayuda? Contáctanos
      </button>
    </section>
  );
};

import { StaticImageData } from "next/image";

const Item = ({
  content,
  image,
}: {
  content: string;
  image: StaticImageData;
}) => {
  return (
    <div className="flex flex-col items-center">
      <Image src={image} alt="icon" width={35} height={35} />
      <p>{content}</p>
    </div>
  );
};
