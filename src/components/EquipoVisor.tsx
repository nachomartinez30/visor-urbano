"use client";
import Image, { StaticImageData } from "next/image";

import yunive_moreno from "../assets/images/equipo_visor/yunive.jpg";
import daniel from "../assets/images/equipo_visor/daniel.jpeg";
import dave from "../assets/images/equipo_visor/dave.jpeg";
import eliezer from "../assets/images/equipo_visor/eliezer.jpg";
import janeth from "../assets/images/equipo_visor/janeth.jpeg";
import victor from "../assets/images/equipo_visor/victor.jpg";

interface AvatarProps {
  person: {
    nombre: string;
    rol: string;
    imageUrl: StaticImageData;
  };
}

const equipo = [
  {
    nombre: "Yunive Moreno",
    rol: "Directora General",
    imageUrl: yunive_moreno,
  },
  {
    nombre: "Daniel Murillo",
    rol: "Gerente de Expansión",
    imageUrl: daniel,
  },
  {
    nombre: "David Bates",
    rol: "Gerente de Vinculación y Sostenibilidad",
    imageUrl: dave,
  },
  {
    nombre: "Eliezer Jerez",
    rol: "Desarrollador Senior",
    imageUrl: eliezer,
  },
  {
    nombre: "Janeth Vargas",
    rol: "Coordinadora de Enlaces Municipales",
    imageUrl: janeth,
  },
  {
    nombre: "Víctor Hernández",
    rol: "Gerente de Tecnología y mejora continua",
    imageUrl: victor,
  },
];

export const EquipoVisor = () => {
  return (
    <section id="equipo_visor" className="lg:h-screen sm:h-1/4">
      <h2 className="main-title">Equipo Visor</h2>
      <ul
        role="list"
        className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      >
        {equipo.map((person) => (
          <AvatarCard key={person.nombre} person={person} />
        ))}
      </ul>
    </section>
  );
};

const AvatarCard = ({ person }: AvatarProps) => {
  const { nombre, imageUrl, rol } = person;
  return (
    <li>
      <div>
        <Image
          className="origin-center hover:scale-110 transform transition duration-700 ease-in-out rounded-full"
          alt={nombre}
          src={imageUrl}
          width={224}
          height={224}
        />
      </div>
      <h3 className="mt-6 text-base/7 font-semibold ">
        {nombre}
      </h3>
      <p className="font-bold text-sm/6 text-VerdeTextos">{rol}</p>
    </li>
  );
};
