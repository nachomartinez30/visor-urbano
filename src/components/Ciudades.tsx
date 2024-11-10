"use client";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import icon_mapa from "../assets/images/btn-icon.svg";
import jalisco_logo from "../assets/images/ciudades/logo_jalisco.svg";
import gdl_logo from "../assets/images/ciudades/gdl_ico.svg";
import tepa_logo from "../assets/images/ciudades/tepa_logo.png";
import san_pedro_logo from "../assets/images/ciudades/san_pedro.svg";
import hidalgo_logo from "../assets/images/ciudades/hidalgo.png";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ciudades = [
  {
    title: "Jalisco",
    img: jalisco_logo,
    url: "/jalisco",
  },
  {
    title: "Guadalajara",
    img: gdl_logo,
    url: "/guadalajara",
  },
  {
    title: "Tepatitlan",
    img: tepa_logo,
    url: "/tepatitlan",
  },
  {
    title: "San Pedro Garza Garcia",
    img: san_pedro_logo,
    url: "/san_pedro_garza_garcia",
  },
  {
    title: "Hidalgo",
    img: hidalgo_logo,
    url: "/hidalgo",
  },
];

export const Ciudades = () => {
  return (
    <section id="ciudades" className="h-svh">
      <h3 className="text-center main-title">
        Explora Visor Urbano en distintas Ciudades
      </h3>
      <Carousel responsive={responsive} className="w-1/2 p-5 bg-green-200">
        {ciudades.map((ciudad) => (
          <Card
            key={ciudad.url}
            titulo={ciudad.title}
            logo={ciudad.img}
            url={ciudad.url}
          />
        ))}
      </Carousel>
    </section>
  );
};

const Card = ({
  titulo,
  logo,
  url,
}: {
  titulo: string;
  logo: string;
  url: string;
}) => {
  return (
    <div className="bg-yellow-200 shadow-xl w-64 h-96 rounded-xl p-10">
      <Image src={logo} alt={`logo_${titulo}`} />
      <a
        href={`#${url}`}
        className="bg-green-500 rounded-full py-2 px-7 text-white flex "
      >
        <Image src={icon_mapa} alt="icon-mapa" width={20} />
        Ver el mapa
      </a>
    </div>
  );
};
