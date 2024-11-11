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
    items: 4,
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
    <section id="ciudades" className="lg:h-screen sm:h-1/4 ciudades__Background">
      <h2 className="text-center ciudades__Titulo pt-9 mb-9">
        Explora Visor Urbano en distintas Ciudades
      </h2>
      <div className="flex justify-center">
        <Carousel responsive={responsive} className="p-5 ciudades__carousel">
          {ciudades.map((ciudad) => (
            <Card
              key={ciudad.url}
              titulo={ciudad.title}
              logo={ciudad.img}
              url={ciudad.url}
            />
          ))}
        </Carousel>
      </div>
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
    <div className="shadow-xl rounded-xl py-10 grid grid-cols-1 content-around card__cards">
      <Image src={logo} alt={`logo_${titulo}`} className="cards__City"/>
      <a
        href={`#${url}`}
        className="rounded-full bg-gradient-to-t from-VerdeBase to-VerdeBaseClaro cards__Button"
      >
        <div className='flex justify-center'>
          <Image src={icon_mapa} alt="icon-mapa"/>
          <p className="pl-4">Ver el mapa</p>
        </div>
      </a>
    </div>
  );
};
