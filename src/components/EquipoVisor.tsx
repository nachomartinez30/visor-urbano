"use client";
import Image from "next/image";

import yunive_moreno from "../assets/images/equipo_visor/yunive2.png";
import daniel from "../assets/images/equipo_visor/daniel2.png";
import dave from "../assets/images/equipo_visor/dave2.png";
// import eliezer from "../assets/images/equipo_visor/eliezer2.png";
import janeth from "../assets/images/equipo_visor/janeth2.png";
// import victor from "../assets/images/equipo_visor/victor2.png";
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
    descripcion1:
      "Comprometida con hacer que las cosas sucedan para generar procesos de transformación en organizaciones públicas y privadas, a través de la Gestión de Proyectos de Tecnología e Innovación y Cooperación. Fue reconocida como “Disruptor de IA del año” por los premios Woman in AI North America Awards en el año 2022.",
    descripcion2:
      "Co-creadora y Directora General de Visor Urbano. Anteriormente fue Directora General de Vinculación la Coordinación de Innovación del Gobierno de Jalisco y Jefa de proyectos de la Dirección de Innovación del Gobierno de Guadalajara.",
    redes: {
      instagram: "https://www.instagram.com/yunive_moreno/",
      linkedin: "https://www.linkedin.com/in/yunive-moreno-0b3b6b1b/",
    },
  },
  {
    nombre: "Daniel Murillo",
    rol: "Gerente de Expansión",
    imageUrl: daniel,
    correo: "daniel@visorurbano.com",
    descripcion1:
      "Daniel es abogado especializado en Derecho Administrativo por la Universidad de Guadalajara y maestrante en Propiedad Industrial, Derechos de Autor y Nuevas Tecnologías por la Universidad Panamericana.",
    descripcion2:
      "Dedicado a la mejora continua de los trámites y servicios gubernamentales a través de la innovación y el uso de la tecnología ha formado parte de Visor Urbano desde su creación e implementación en el municipio de Guadalajara en 2018 así como de las diversas réplicas que se han hecho de la plataforma en diversas ciudades a nivel nacional.",
    redes: {
      instagram: "",
      linkedin: "https://www.linkedin.com/in/murillodani/",
    },
  },
  {
    nombre: "David Bates",
    rol: "Gerente de Vinculación y Sostenibilidad",
    imageUrl: dave,
    correo: "dbates@visorurbano.com",
    descripcion1:
      "David promueve el uso de tecnologías exponenciales para desarrollar soluciones creativas y escalables a los desafíos globales. Es graduado de la licenciatura en Ciencias de la Comunicación, y cuenta con especialidades en Administración Pública, Medición de Impacto para el Desarrollo y en Diseño Centrado en las Personas para la Innovación Social.",
    descripcion2:
      "Es asesor y consultor para instituciones del ecosistema de innovación en la implementación de proyectos enfocados en tecnología, política pública, innovación social y desarrollo socioeconómico. Actualmente, lidera la Vinculación Estratégica de Visor Urbano, proyecto de la Coordinación General de Innovación Gubernamental de Jalisco, en colaboración con la Fundación Bloomberg Philanthropies.",
    redes: {
      instagram: "",
      linkedin: "https://www.linkedin.com/in/davidbatesf/",
    },
  },
  {
    nombre: "Janeth Vargas",
    rol: "Coordinadora de Enlaces Municipales",
    imageUrl: janeth,
    correo: "yunive@visorurbano.com",
    descripcion1:
      "Daniel es abogado especializado en Derecho Administrativo por la Universidad de Guadalajara y maestrante en Propiedad Industrial, Derechos de Autor y Nuevas Tecnologías por la Universidad Panamericana.",
    descripcion2:
      "Dedicado a la mejora continua de los trámites y servicios gubernamentales a través de la innovación y el uso de la tecnología ha formado parte de Visor Urbano desde su creación e implementación en el municipio de Guadalajara en 2018 así como de las diversas réplicas que se han hecho de la plataforma en diversas ciudades a nivel nacional.",
    redes: {
      instagram: "",
      linkedin: "",
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

export const EquipoVisor = () => {
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
      <h2 className="text-center pt-9 mb-9 equipo__Titulo">Equipo Visor</h2>
      <ul role="list" className="mx-auto mt-20 grid grid-cols-8 flex justify-items-center equipo__Grid"
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
    <li onClick={() => onClick(person)} className="col-span-2 flex flex-col items-center text-center equipo__Person">
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
