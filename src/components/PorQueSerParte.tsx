"use client";
import Image from "next/image";
import clock from "../assets/images/features/ico_licencias_negocio_2.svg";
import list from "../assets/images/features/ico_licencias_negocio.svg";
import map from "../assets/images/features/ico_licencias_negocio_3.svg";
import mail from "../assets/images/features/ico_licencias_negocio_4.svg";
import like from "../assets/images/features/ico_licencias_negocio_5.svg";
import speaker from "../assets/images/features/ico_licencias_negocio_6.svg";

import timeline from "../assets/images/timeline.svg";
import timeline_1 from "../assets/images/timeline_1.svg";
import timeline_2 from "../assets/images/timeline_2.svg";
import timeline_3 from "../assets/images/timeline_3.svg";
import timeline_4 from "../assets/images/timeline_4.svg";
import timeline_5 from "../assets/images/timeline_5.svg";
import timeline_6 from "../assets/images/timeline_6.svg";
import timeline_7 from "../assets/images/timeline_7.svg";
import timeline_8 from "../assets/images/timeline_8.svg";

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
    <section id="por_que_ser_parte" className="mt-10 porQueBackground">
      <h3 className="text-center porQue__Titulo">{t("header")}</h3>

      <div className="grid grid-cols-3 grid-rows-2 grid-flow-col flex justify-center porQue__Grid">
        {features.map((feature, index) => (
          <Item key={index} {...feature} />
        ))}
      </div>

      <div className="grid grid-cols-2 grid-flow-col flex justify-center porQue__Botones">
        <button className="mx-4 btn-primary justify-center porQue__Botones--Boton">
          {tGlobal("button1")}
        </button>
        <button
          className="mx-4 btn-primary justify-center porQue__Botones--Boton"
          onClick={() => modalCtx?.openModalContacto()}
        >
          {tGlobal("button2")}
        </button>
      </div>

      {/* <!----> */}
      <section id="nuestra_historia" className="">
        <div className="nuestraHistoria__Section">
          <div className="historia__Grid">
            <h2 className="mb-8 historia__Titulo">{t("header2")}</h2>
          </div>
          <div className="grid grid-cols-9 flex justify-items-center historia__Grid historia__Grid--left">
            <div className="col-span-2 flex flex-col items-center text-center historiaGrid__Element">
              <Image
                className="porQue_Imagenes"
                alt="timeline_1"
                src={timeline_1}
              />
              <h2 className="year historia__Anios">2016</h2>
              <p className="text historia__Contenido">
                {t("timeline1")}
              </p>
            </div>

            <div className="col-span-2 flex flex-col items-center text-center historiaGrid__Element">
              <Image
                className="porQue_Imagenes"
                alt="timeline_2"
                src={timeline_2}
              />
              <h2 className="year historia__Anios">2018</h2>
              <p className="text historia__Contenido">
                {t("timeline2")}
              </p>
            </div>

            <div className="col-span-2 flex flex-col items-center text-center historiaGrid__Element">
              <Image
                className="porQue_Imagenes"
                alt="timeline_3"
                src={timeline_3}
              />
              <h2 className="year historia__Anios">2020</h2>
              <p className="text historia__Contenido">
               {t("timeline3")}
              </p>
            </div>

            <div className="col-span-2 flex flex-col items-center text-center historiaGrid__Element">
              <Image
                className="porQue_Imagenes"
                alt="timeline_4"
                src={timeline_4}
              />
              <h2 className="year historia__Anios">2022</h2>
              <p className="text historia__Contenido">
              {t("timeline4")}
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <Image src={timeline} alt="icon" className="historia_TimeLine" />
          </div>

          <div className="grid grid-cols-9  justify-items-center historia__Grid historia__Grid--right">
            <div className="col-span-2 flex flex-col items-center text-center historiaGrid__Element">
              <Image
                className="porQue_Imagenes"
                alt="timeline_5"
                src={timeline_5}
              />
              <h2 className="year historia__Anios">2017</h2>
              <p className="text historia__Contenido">
               {t("timeline5")}
              </p>
            </div>

            <div className="col-span-2 flex flex-col items-center text-center historiaGrid__Element">
              <Image
                className="porQue_Imagenes"
                alt="timeline_6"
                src={timeline_6}
              />
              <h2 className="year historia__Anios">2019</h2>
              <p className="text historia__Contenido">
               {t("timeline6")}
              </p>
            </div>

            <div className="col-span-2 flex flex-col items-center text-center historiaGrid__Element">
              <Image
                className="porQue_Imagenes"
                alt="timeline_7"
                src={timeline_7}
              />
              <h2 className="year historia__Anios">2021</h2>
              <p className="text historia__Contenido">
               {t("timeline7")}
              </p>
            </div>

            <div className="col-span-2 flex flex-col items-center text-center historiaGrid__Element">
              <Image
                className="porQue_Imagenes"
                alt="timeline_8"
                src={timeline_8}
              />
              <h2 className="year historia__Anios">2023</h2>
              <p className="text historia__Contenido">
               {t("timeline8")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

import { StaticImageData } from "next/image";
import { ModalContext } from "./context/ContextModal";
import { useContext } from "react";
import { useTranslations } from "next-intl";

const Item = ({
  content,
  image,
}: {
  content: string;
  image: StaticImageData;
}) => {
  return (
    <div className="col-span-1 mx-4 my-6 flex justify-around flex-col items-center">
      <Image src={image} alt="icon" className="porQue_Imagenes" />
      <p className="text-center porQue_Textos">{content}</p>
    </div>
  );
};
