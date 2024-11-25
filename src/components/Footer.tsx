"use client";
import Image from "next/image";
import visor_urbano_logo from "../assets/images/logo_visor.svg";
import boomergang_logo from "../assets/images/logo_bloomberg.svg";
import jalisco_logo from "../assets/images/logo_jal.svg";
/* redes sociales */
import facebook_logo from "../assets/images/facebook.svg";
import twitter_logo from "../assets/images/twitter.svg";
import instagram_logo from "../assets/images/instagram.svg";
import { ModalAvisoPrivacidad } from "./Modales/ModalAvisoPrivacidad";
import { useState } from "react";

export const Footer = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="flex flex-col items-center sm:h-[400px] footerBg">
      <ModalAvisoPrivacidad open={openModal} setOpen={setOpenModal} />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 flex-col items-center footer__Bloque">
        <Image
          className="mx-auto mt-11"
          src={visor_urbano_logo}
          alt="visor_urbano_logo"
          width={222}
          height={99.48}
        />
        <Image
          className="mx-auto mt-11 footer__Logos"
          src={boomergang_logo}
          alt="boomergang_logo"
        />
        <Image
          className="mx-auto mt-11 footer__Logos"
          src={jalisco_logo}
          alt="jalisco_logo"
        />
        <div className="grid grid-flow-col flex-col items-center text-center justify-self-center footer__Redes">
          <a href="https://www.facebook.com/VisorUrbano.mxx" target="_blank">
            <Image
              alt="facebook_logo_logo"
              src={facebook_logo}
              className="justify-self-center redes__Iconos"
            />
          </a>
          <a href="https://x.com/VisorUrbanoMx" target="_blank">
            <Image
              alt="twitter_logo"
              src={twitter_logo}
              className="justify-self-center redes__Iconos"
            />
          </a>
          <a href="https://www.instagram.com/visorurbano.mx/" target="_blank">
            <Image
              alt="instagram_logo"
              src={instagram_logo}
              className="justify-self-center redes__Iconos"
            />
          </a>
        </div>
        <div className="">
          <h3
            className="text-VerdeTextos text-center cursor-pointer"
            onClick={() => setOpenModal(true)}
          >
            AVISO DE PRIVACIDAD
          </h3>
        </div>
      </div>
    </div>
  );
};
