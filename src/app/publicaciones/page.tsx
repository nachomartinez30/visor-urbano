import { useTranslations } from "next-intl";
import Image from "next/image";

import image1 from "../../assets/images/publicaciones/GovTech y el Futuro del Gobierno@2x.png";
import image2 from "../../assets/images/publicaciones/Manual de ciudades Inteligentes 2.0@2x.png";
import image3 from "../../assets/images/publicaciones/Govtech y el futuro del gobierno_el caso de Visor Urbano en México@2x.png";
import image4 from "../../assets/images/publicaciones/Transformación Pública Digital en Latinoamérica@2x.png";
import image5 from "../../assets/images/publicaciones/The_GovTech_Index_2020@2x.png";
import image6 from "../../assets/images/publicaciones/Open by design@2x.png";
import image7 from "../../assets/images/publicaciones/Visor Urbano y el Futuro del Gobierno@2x.png";
import image8 from "../../assets/images/publicaciones/Examples of Collaboration Between Civic Tech Communities and Governments Around the World@2x.png";
import image9 from "../../assets/images/publicaciones/Guía Gobiernos Digitales@2x.png";
import image10 from "../../assets/images/publicaciones/The role of the govtech in the achievement of the Sustainable Development Goals@2x.png";
import image11 from "../../assets/images/publicaciones/Group 8959@2x.png";
import image12 from "../../assets/images/publicaciones/Group 8961@2x.png";
import image13 from "../../assets/images/publicaciones/Group 8963@2x.png";

import { StaticImport } from "next/dist/shared/lib/get-img-props";

const publicaciones = [
  { image: image1, file: "GovTech y el Futuro del Gobierno.pdf" },
  { image: image2, file: "Manual de ciudades Inteligentes 2.0.pdf" },
  {
    image: image3,
    file: "Govtech y el futuro del gobierno_el caso de Visor Urbano en México.pdf",
  },
  {
    image: image4,
    file: "Transformación Digital en América Latina.pdf",
  },
  { image: image5, file: "The_GovTech_Index_2020.pdf" },
  {
    image: image6,
    file: "Open by design - How open-source can drive sustainable urban development.pdf",
  },
  { image: image7, file: "Visor Urbano_Entregable_Policy Brief_2.pdf" },
  {
    image: image8,
    file: "Examples of Collaboration Between Civic Tech Communities and Governments Around the World.pdf",
  },
  { image: image9, file: "Guía Gobiernos Digitales.pdf" },
  {
    image: image10,
    file: "The role of the govtech in the achievement of the Sustainable Development Goals.pdf",
  },
  {
    image: image11,
    file: "Evaluación de impacto del sistema Visor Urbano.pdf",
  },
  {
    image: image12,
    file: "Tackling corruption in urban development through open data.pdf",
  },
  {
    image: image13,
    file: "Una innovación tecnológica que permite el desarrollo urbano.pdf",
  },
];

const PagePublicaciones = () => {
  const t = useTranslations("Publicaciones");
  return (
    <section className="mt-32 sm:mt-40">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="col-start-2 sm:col-start-2 col-span-8 sm:col-span-8 main-title">
          {t("header")}
        </h2>
      </div>
      <ul
        role="list"
        className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-[10%] pt-9 mb-10"
      >
        {publicaciones.map((publicacion, index) => (
          <Card key={index} image={publicacion.image} file={publicacion.file} />
        ))}
      </ul>
    </section>
  );
};

export default PagePublicaciones;

const Card = ({ image, file }: { image: StaticImport; file: string }) => {
  return (
    <a
      href={`/files/publicaciones/${file}`}
      target="_blank"
      className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-xl bg-white text-center shadow transition-transform transform hover:scale-105"
    >
      <Image alt="imgUrl" src={image} height={320} width={408.57} />
    </a>
  );
};
