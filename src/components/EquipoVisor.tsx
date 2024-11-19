"use client";
import Image from "next/image";

import daniel from "../assets/images/equipo_visor/daniel2.png";
import dave from "../assets/images/equipo_visor/dave2.png";
import yunive_moreno from "../assets/images/equipo_visor/yunive2.png";
// import eliezer from "../assets/images/equipo_visor/eliezer2.png";
import janeth from "../assets/images/equipo_visor/janeth2.png";
// import victor from "../assets/images/equipo_visor/victor2.png";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { ModalEquipo } from "./Modales/ModalEquipo";
import { Person } from "./types/person.interface";

interface AvatarProps {
  person: Person;
  onClick: (person: Person) => void;
}

export const EquipoVisor = () => {
  const t = useTranslations("EquipoVisor");
  const equipo: Person[] = [
    {
      nombre: t("yunive.nombre"),
      rol: t("yunive.rol"),
      imageUrl: yunive_moreno,
      correo: t("yunive.correo"),
      descripcion1: t("yunive.descripcion1"),
      descripcion2: t("yunive.descripcion2"),
      redes: {
        instagram: t("yunive.instagram"),
        linkedin: t("yunive.linkedin"),
      },
    },
    {
      nombre: t("daniel.nombre"),
      rol: t("daniel.rol"),
      imageUrl: daniel,
      correo: t("daniel.correo"),
      descripcion1: t("daniel.descripcion1"),
      descripcion2: t("daniel.descripcion2"),
      redes: {
        instagram: t("daniel.instagram"),
        linkedin: t("daniel.linkedin"),
      },
    },
    {
      nombre: t("david.nombre"),
      rol: t("david.rol"),
      imageUrl: dave,
      correo: t("david.correo"),
      descripcion1: t("david.descripcion1"),
      descripcion2: t("david.descripcion2"),
      redes: {
        instagram: t("david.instagram"),
        linkedin: t("david.linkedin"),
      },
    },
    {
      nombre: t("janeth.nombre"),
      rol: t("janeth.rol"),
      imageUrl: janeth,
      correo: t("janeth.correo"),
      descripcion1: t("janeth.descripcion1"),
      descripcion2: t("janeth.descripcion2"),
      redes: {
        instagram: t("janeth.instagram"),
        linkedin: t("janeth.linkedin"),
      },
    },
    /* {
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
    }, */
  ];
  const [openModal, setOpenModal] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState<Person>(equipo[0]);

  const handleSelectPerson = (person: Person) => {
    setSelectedPerson(person);
    setOpenModal(true);
  };

  return (
    <section id="equipo_visor" className="">
      <ModalEquipo
        open={openModal}
        setOpen={setOpenModal}
        selectedPerson={selectedPerson}
      />
      <h2 className="text-center pt-0 sm:pt-9 mb-2 sm:mb-9 equipo__Titulo">{t("header")}</h2>
      <ul
        role="list"
        className="mx-auto mt-10 sm:mt-20 grid grid-cols-8 flex justify-items-center equipo__Grid"
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
    <li
      onClick={() => onClick(person)}
      className="col-span-8 sm:col-span-2 flex flex-col items-center text-center mb-10 sm:mb-0 equipo__Person"
    >
      <div>
        <Image
          className="origin-center hover:scale-110 transform transition duration-700 ease-in-out equipo__Image"
          alt={nombre}
          src={imageUrl}
        />
        <h3 className="mt-6 text-2xl font-semibold ">{nombre}</h3>
        <p className="font-bold text-sm/6 text-VerdeTextos">{rol}</p>
      </div>
    </li>
  );
};
