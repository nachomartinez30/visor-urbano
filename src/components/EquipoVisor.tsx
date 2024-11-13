"use client";
import Image from "next/image";

import yunive_moreno from "../assets/images/equipo_visor/yunive.jpg";
import daniel from "../assets/images/equipo_visor/daniel.jpeg";
import dave from "../assets/images/equipo_visor/dave.jpeg";
import eliezer from "../assets/images/equipo_visor/eliezer.jpg";
import janeth from "../assets/images/equipo_visor/janeth.jpeg";
import victor from "../assets/images/equipo_visor/victor.jpg";
import { ModalEquipo } from "./Modales/ModalEquipo";
import { useState } from "react";
import { Person } from "./types/person.interface";

interface AvatarProps {
  person: Person;
  onClick: (person: Person) => void;
}

const equipo: Person[] = [
  {
    nombre: "Yunive Moreno",
    rol: "Directora General",
    imageUrl: yunive_moreno,
    correo: "yunive@visorurbano.com",
    descripcion:
      "Comprometida con hacer que las cosas sucedan para generar procesos de transformación en organizaciones públicas y privadas, a través de la Gestión de Proyectos de Tecnología e Innovación y Cooperación. Fue reconocida como “Disruptor de IA del año” por los premios Woman in AI North America Awards en el año 2022. Co-creadora y Directora General de Visor Urbano. Anteriormente fue Directora General de Vinculación la Coordinación de Innovación del Gobierno de Jalisco y Jefa de proyectos de la Dirección de Innovación del Gobierno de Guadalajara.",
    redes: {
      instagram: "https://www.instagram.com/yunive_moreno/",
      linkedin: "https://www.linkedin.com/in/yunive-moreno-0b3b6b1b/",
    },
  },
  {
    nombre: "Daniel Murillo",
    rol: "Gerente de Expansión",
    imageUrl: daniel,
    correo: "yunive@visorurbano.com",
    descripcion:
      "Comprometida con hacer que las cosas sucedan para generar procesos de transformación en organizaciones públicas y privadas, a través de la Gestión de Proyectos de Tecnología e Innovación y Cooperación. Fue reconocida como “Disruptor de IA del año” por los premios Woman in AI North America Awards en el año 2022. Co-creadora y Directora General de Visor Urbano. Anteriormente fue Directora General de Vinculación la Coordinación de Innovación del Gobierno de Jalisco y Jefa de proyectos de la Dirección de Innovación del Gobierno de Guadalajara.",
    redes: {
      instagram: "https://www.instagram.com/yunive_moreno/",
      linkedin: "https://www.linkedin.com/in/yunive-moreno-0b3b6b1b/",
    },
  },
  {
    nombre: "David Bates",
    rol: "Gerente de Vinculación y Sostenibilidad",
    imageUrl: dave,
    correo: "yunive@visorurbano.com",
    descripcion:
      "Comprometida con hacer que las cosas sucedan para generar procesos de transformación en organizaciones públicas y privadas, a través de la Gestión de Proyectos de Tecnología e Innovación y Cooperación. Fue reconocida como “Disruptor de IA del año” por los premios Woman in AI North America Awards en el año 2022. Co-creadora y Directora General de Visor Urbano. Anteriormente fue Directora General de Vinculación la Coordinación de Innovación del Gobierno de Jalisco y Jefa de proyectos de la Dirección de Innovación del Gobierno de Guadalajara.",
    redes: {
      instagram: "https://www.instagram.com/yunive_moreno/",
      linkedin: "https://www.linkedin.com/in/yunive-moreno-0b3b6b1b/",
    },
  },
  {
    nombre: "Eliezer Jerez",
    rol: "Desarrollador Senior",
    imageUrl: eliezer,
    correo: "yunive@visorurbano.com",
    descripcion:
      "Comprometida con hacer que las cosas sucedan para generar procesos de transformación en organizaciones públicas y privadas, a través de la Gestión de Proyectos de Tecnología e Innovación y Cooperación. Fue reconocida como “Disruptor de IA del año” por los premios Woman in AI North America Awards en el año 2022. Co-creadora y Directora General de Visor Urbano. Anteriormente fue Directora General de Vinculación la Coordinación de Innovación del Gobierno de Jalisco y Jefa de proyectos de la Dirección de Innovación del Gobierno de Guadalajara.",
    redes: {
      instagram: "https://www.instagram.com/yunive_moreno/",
      linkedin: "https://www.linkedin.com/in/yunive-moreno-0b3b6b1b/",
    },
  },
  {
    nombre: "Janeth Vargas",
    rol: "Coordinadora de Enlaces Municipales",
    imageUrl: janeth,
    correo: "yunive@visorurbano.com",
    descripcion:
      "Comprometida con hacer que las cosas sucedan para generar procesos de transformación en organizaciones públicas y privadas, a través de la Gestión de Proyectos de Tecnología e Innovación y Cooperación. Fue reconocida como “Disruptor de IA del año” por los premios Woman in AI North America Awards en el año 2022. Co-creadora y Directora General de Visor Urbano. Anteriormente fue Directora General de Vinculación la Coordinación de Innovación del Gobierno de Jalisco y Jefa de proyectos de la Dirección de Innovación del Gobierno de Guadalajara.",
    redes: {
      instagram: "https://www.instagram.com/yunive_moreno/",
      linkedin: "https://www.linkedin.com/in/yunive-moreno-0b3b6b1b/",
    },
  },
  {
    nombre: "Víctor Hernández",
    rol: "Gerente de Tecnología y mejora continua",
    imageUrl: victor,
    correo: "yunive@visorurbano.com",
    descripcion:
      "Comprometida con hacer que las cosas sucedan para generar procesos de transformación en organizaciones públicas y privadas, a través de la Gestión de Proyectos de Tecnología e Innovación y Cooperación. Fue reconocida como “Disruptor de IA del año” por los premios Woman in AI North America Awards en el año 2022. Co-creadora y Directora General de Visor Urbano. Anteriormente fue Directora General de Vinculación la Coordinación de Innovación del Gobierno de Jalisco y Jefa de proyectos de la Dirección de Innovación del Gobierno de Guadalajara.",
    redes: {
      instagram: "https://www.instagram.com/yunive_moreno/",
      linkedin: "https://www.linkedin.com/in/yunive-moreno-0b3b6b1b/",
    },
  },
];

export const EquipoVisor = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState<Person>(equipo[0]);

  const handleSelectPerson = (person: Person) => {
    setSelectedPerson(person);
    setOpenModal(true);
  };

  return (
    <section id="equipo_visor" className="lg:h-screen sm:h-1/4">
      <ModalEquipo
        open={openModal}
        setOpen={setOpenModal}
        selectedPerson={selectedPerson}
      />
      <h2 className="main-title">Equipo Visor</h2>
      <ul
        role="list"
        className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      >
        {equipo.map((person: Person) => (
          <AvatarCard
            onClick={handleSelectPerson}
            key={person.nombre}
            person={person}
          />
        ))}
      </ul>
    </section>
  );
};

const AvatarCard = ({ person, onClick }: AvatarProps) => {
  const { nombre, imageUrl, rol } = person;
  return (
    <li onClick={() => onClick(person)}>
      <div>
        <Image
          className="origin-center hover:scale-110 transform transition duration-700 ease-in-out rounded-full"
          alt={nombre}
          src={imageUrl}
          width={224}
          height={224}
        />
      </div>
      <h3 className="mt-6 text-base/7 font-semibold ">{nombre}</h3>
      <p className="font-bold text-sm/6 text-VerdeTextos">{rol}</p>
    </li>
  );
};
