"use client";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import icon_mapa from "../assets/images/btn-icon.svg";
import jalisco_logo from "../assets/images/ciudades/logo_jalisco.svg";
import gdl_logo from "../assets/images/ciudades/gdl_ico.svg";
import tepa_logo from "../assets/images/ciudades/tepa_logo.png";
import san_pedro_logo from "../assets/images/ciudades/san_pedro.svg";
import hidalgo_logo from "../assets/images/ciudades/hidalgo.svg";
import { useTranslations } from "next-intl";

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
    url: "https://visorurbano.jalisco.gob.mx/inicio",
  },
  {
    title: "Guadalajara",
    img: gdl_logo,
    url: "https://visorurbano.guadalajara.gob.mx/",
  },
  {
    title: "Tepatitlan",
    img: tepa_logo,
    url: "https://tepatitlan.visorurbano.com/inicio",
  },
  {
    title: "San Pedro Garza Garcia",
    img: san_pedro_logo,
    url: "https://visorurbano.sanpedro.gob.mx/",
  },
  {
    title: "Hidalgo",
    img: hidalgo_logo,
    url: "https://visorurbano.hidalgo.gob.mx/inicio",
  },
];

export const Ciudades = () => {
  const t = useTranslations("Ciudades");
  return (
    <section id="ciudades" className="ciudades__Background pb-10 sm:pb-20">
      <h2 className="text-center pt-9 mb-4 sm:mb-9 ciudades__Titulo">{t("header")}</h2>
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
  const t = useTranslations("Ciudades");
  return (
    <a
      href={`${url}`}
      target="_blank"
      className="hover:shadow-xl rounded-3xl py-5 sm:py-10 grid grid-cols-1 content-around card__cards"
    >
      <Image src={logo} alt={`logo_${titulo}`} className="cards__City" />
      <div className="rounded-full bg-gradient-to-t from-VerdeBase to-VerdeBaseClaro cards__Button">
        <div className="flex justify-center">
          <Image
            className="hover:scale-150 transform transition duration-700 ease-in-out"
            src={icon_mapa}
            alt="icon-mapa"
          />
          <p className="pl-4">{t("map")}</p>
        </div>
      </div>
    </a>
  );
};
