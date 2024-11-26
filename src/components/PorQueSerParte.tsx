"use client";

import { StaticImageData } from "next/image";
import { ModalContext } from "./context/ContextModal";
import { useContext } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import clock from "../assets/images/features/ico_licencias_negocio_2.svg";
import list from "../assets/images/features/ico_licencias_negocio.svg";
import map from "../assets/images/features/ico_licencias_negocio_3.svg";
import mail from "../assets/images/features/ico_licencias_negocio_4.svg";
import like from "../assets/images/features/ico_licencias_negocio_5.svg";
import speaker from "../assets/images/features/ico_licencias_negocio_6.svg";
import Link from "next/link";

export const PorQueSerParte = () => {
  const t = useTranslations("PorQueSerParte");
  const tGlobal = useTranslations("global");
  const features = [
    {
      content: t("feature1"),
      image: clock,
    },
    {
      content: t("feature2"),
      image: list,
    },
    {
      content: t("feature3"),
      image: map,
    },
    {
      content: t("feature4"),
      image: mail,
    },
    {
      content: t("feature5"),
      image: like,
    },
    {
      content: t("feature6"),
      image: speaker,
    },
  ];
  const modalCtx = useContext(ModalContext);
  return (
    <section id="por_que_ser_parte" className="porQueBackground">
      <h3 className="text-center mt-10 porQue__Titulo">{t("header")}</h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 grid-rows-6 sm:grid-rows-2 grid-flow-col flex justify-center porQue__Grid">
        {features.map((feature, index) => (
          <Item key={index} {...feature} />
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-flow-col flex justify-center porQue__Botones">
        <Link
          href="como_empezar"
          className="mx-4 btn-primary justify-center porQue__Botones--Boton"
        >
          {tGlobal("button1")}
        </Link>
        <button
          className="mx-4 btn-primary justify-center porQue__Botones--Boton"
          onClick={() => modalCtx?.openModalContacto()}
        >
          {tGlobal("button2")}
        </button>
      </div>
    </section>
  );
};

const Item = ({
  content,
  image,
}: {
  content: string;
  image: StaticImageData;
}) => {
  return (
    <div className="col-span-1 mx-4 my-6 flex flex-col items-center">
      <Image src={image} alt="icon" className="porQue_Imagenes" />
      <p className="text-center porQue_Textos">{content}</p>
    </div>
  );
};
