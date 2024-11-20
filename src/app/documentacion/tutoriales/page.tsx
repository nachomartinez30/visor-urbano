import { useTranslations } from "next-intl";
import Image from "next/image";
import icoManual from "../../../assets/images/videos/ico_enlace.svg";

interface VideoItemProps {
  title: string;
  url: string;
  buttonText: string;
}

const PageTutoriales = () => {
  const t = useTranslations("TutorialesManuales");
  const videos: { [key: string]: { title: string; url: string } } = {
    video1: {
      title: t("videos.title1"),
      url: "/videos/1_mi_municipio.mp4",
    },
    video2: {
      title: t("videos.title2"),
      url: "/videos/2_requisitos.mp4",
    },
    video3: {
      title: t("videos.title3"),
      url: "/videos/3_giros.mp4",
    },
    video4: {
      title: t("videos.title4"),
      url: "/videos/.mp4",
    },
    video5: {
      title: t("videos.title5"),
      url: "/videos/5_emision_licencias.mp4",
    },
    video6: {
      title: t("videos.title6"),
      url: "/videos/.mp4",
    },
    video7: {
      title: t("videos.title7"),
      url: "/videos/7_dibujar_predio.mp4",
    },
  };
  return (
    <section className="mt-3 flex flex-col gap-2 sm:gap-10 bg-white p-5 rounded-lg documentacion__Bloque">
      <h2 className="text-center documentacion__Titulos">{t("header")}</h2>
      <div className="documentacion__Contenido">
        <p>{t("descripcion1")}</p>
        <p>{t("descripcion2")}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 col-row-4 sm:col-row-9 gap-4 py-10">
          {Object.keys(videos).map((key) => {
            const { title, url } = videos[key];
            return (
              <VideoItem
                key={key}
                buttonText={t("watchManualButton")}
                title={title}
                url={url}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

const VideoItem = ({ title, url, buttonText }: VideoItemProps) => {
  return (
    <div className="col-span-1">
      <h3 className="docVideos__Titulos mb-6">{title}</h3>
      <div className="flex flex-row text-VerdeTextos hover:underline mb-6">
        <Image src={icoManual} alt="icono" width={55} height={55} />
        {buttonText}
      </div>
      <div className="">
        <video controls preload="none" className="documentacion__Videos">
          <source src={url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default PageTutoriales;
