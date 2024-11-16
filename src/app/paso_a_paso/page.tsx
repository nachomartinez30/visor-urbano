import { CirclosNumerosIcon } from "@/components/icons/CirclosNumerosIcon";
import { useTranslations } from "next-intl";

const PagePasoAPaso = () => {
  const t = useTranslations("PasoAPasoPage");
  return (
    <section className="flex flex-col gap-4">
      <h1>{t("header")}</h1>
      <p>{t("description1")}</p>
      <p>
        <CirclosNumerosIcon numero={1} />
        {" "}
        <strong className="text-VerdeTextos">{t("steps.first.strong")}</strong>
        {t("steps.first.description")}
      </p>
      <p>
        <CirclosNumerosIcon numero={2} />
        {" "}
        <strong className="text-VerdeTextos">{t("steps.second.strong")}</strong>
        {t("steps.second.description")}
      </p>
      <p>
        <CirclosNumerosIcon numero={3} />
        {" "}
        <strong className="text-VerdeTextos">{t("steps.third.strong")}</strong>
        {t("steps.third.description")}
      </p>
      <p>{t("description2")}</p>
      <button className="btn-primary">{t("button")}</button>
    </section>
  );
};

export default PagePasoAPaso;
