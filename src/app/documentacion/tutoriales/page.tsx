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
      url: "https: //",
    },
    video2: {
      title: t("videos.title2"),
      url: "https://",
    },
    video3: {
      title: t("videos.title3"),
      url: "https://",
    },
    video4: {
      title: t("videos.title4"),
      url: "https://",
    },
    video5: {
      title: t("videos.title5"),
      url: "https://",
    },
    video6: {
      title: t("videos.title6"),
      url: "https://",
    },
    video7: {
      title: t("videos.title7"),
      url: "https://",
    },
  };
  return (
    <section>
      <h2 className="main-title">{t("header")}</h2>
      <p>{t("descripcion1")}</p>
      <p>{t("descripcion2")}</p>
      <div className="grid">
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
    </section>
  );
};

const VideoItem = ({ title, url, buttonText }: VideoItemProps) => {
  return (
    <div>
      <h3 className="font-bold">{title}</h3>
      <div className="flex flex-row text-VerdeTextos hover:underline">
        <Image src={icoManual} alt="icono" width={55} height={55} />
        {buttonText}
      </div>
      <div className="">{/* video aqui */ url}</div>
    </div>
  );
};

export default PageTutoriales;
