import { useTranslations } from "next-intl";
import Image from "next/image";
import icoManual from "../../../assets/images/videos/ico_enlace.svg";
import { YouTubeEmbed } from "@next/third-parties/google";

interface VideoItemProps {
  title: string;
  url: string;
  buttonText: string;
  file: string;
}

const PageTutoriales = () => {
  const t = useTranslations("TutorialesManuales");
  const videos: {
    [key: string]: { title: string; url: string; file: string };
  } = {
    video1: {
      title: t("videos.title1"),
      url: "XwQUpCS1C_M",
      file: "APznzaYYMAQOhtiGTuH4csd0abdY7DDyT308RltSVc4gQUdoam6VqlA7XWEuep1Ey6DbVvtaJ8SIyfErrEpdiyEXQHBa_EJBzg94ndU3L3znPEbhpJhQxZFHzSGnSocz3ZhnIaV41_Tjjx-lgDEfnuYsi84Na2JzSkYsetLEoShryiaZgCywqzzAJhWUcU1z6W4EJA0.pdf",
    },
    video2: {
      title: t("videos.title2"),
      url: "NL3FP6LwAhg",
      file: "APznzaYYMAQOhtiGTuH4csd0abdY7DDyT308RltSVc4gQUdoam6VqlA7XWEuep1Ey6DbVvtaJ8SIyfErrEpdiyEXQHBa_EJBzg94ndU3L3znPEbhpJhQxZFHzSGnSocz3ZhnIaV41_Tjjx-lgDEfnuYsi84Na2JzSkYsetLEoShryiaZgCywqzzAJhWUcU1z6W4EJA0.pdf",
    },
    video3: {
      title: t("videos.title3"),
      url: "B_5mqtII7zM",
      file: "APznzaYYMAQOhtiGTuH4csd0abdY7DDyT308RltSVc4gQUdoam6VqlA7XWEuep1Ey6DbVvtaJ8SIyfErrEpdiyEXQHBa_EJBzg94ndU3L3znPEbhpJhQxZFHzSGnSocz3ZhnIaV41_Tjjx-lgDEfnuYsi84Na2JzSkYsetLEoShryiaZgCywqzzAJhWUcU1z6W4EJA0.pdf",
    },
    video4: {
      title: t("videos.title4"),
      url: "BhFYs0-Rrn4",
      file: "APznzaYYMAQOhtiGTuH4csd0abdY7DDyT308RltSVc4gQUdoam6VqlA7XWEuep1Ey6DbVvtaJ8SIyfErrEpdiyEXQHBa_EJBzg94ndU3L3znPEbhpJhQxZFHzSGnSocz3ZhnIaV41_Tjjx-lgDEfnuYsi84Na2JzSkYsetLEoShryiaZgCywqzzAJhWUcU1z6W4EJA0.pdf",
    },
    video5: {
      title: t("videos.title5"),
      url: "iMF8HOTo1Ec",
      file: "",
    },
    video6: {
      title: t("videos.title6"),
      url: "EbspVsKc4oI",
      file: "",
    },
    video7: {
      title: t("videos.title7"),
      url: "nTP2HVbE0No",
      file: "",
    },
  };
  return (
    <section className="mt-3 flex flex-col gap-2 sm:gap-10 bg-white p-5 rounded-lg documentacion__Bloque">
      <h2 className="text-center documentacion__Titulos">{t("header")}</h2>
      <div className="documentacion__Contenido">
        <p>{t("descripcion1")}</p>
        <p>{t("descripcion2")}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 col-row-4 sm:col-row-9 gap-4 py-10 content-between">
          {Object.keys(videos).map((key) => {
            const { title, url, file } = videos[key];
            return (
              <VideoItem
                key={key}
                buttonText={t("watchManualButton")}
                title={title}
                url={url}
                file={file}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

const VideoItem = ({ title, url, buttonText, file }: VideoItemProps) => {
  return (
    <div className="col-span-1 grid docVideos__Background">
      <h3 className="docVideos__Titulos mb-6">{title}</h3>
      <a
        href={`/files/tutoriales/${file}`}
        target="_blank"
        className="flex flex-row text-VerdeTextos hover:underline mb-6"
      >
        <Image src={icoManual} alt="icono" width={35} height={35} />
        {buttonText}
      </a>
      <div className="documentacion__Videos self-end">
        <YouTubeEmbed videoid={url} />
      </div>
    </div>
  );
};

export default PageTutoriales;
