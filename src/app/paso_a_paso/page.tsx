import { CirclosNumerosIcon } from "@/components/icons/CirclosNumerosIcon";
import { useTranslations } from "next-intl";

const PagePasoAPaso = () => {
  const t = useTranslations("PasoAPasoPage");
  return (
    <section className="flex flex-col gap-4">
      <h1>{t("header")}</h1>
      <div>{t("description1")}</div>
      <div>
        <CirclosNumerosIcon numero={1} />{" "}
        <strong className="text-VerdeTextos">{t("steps.first.strong")}</strong>
        {t("steps.first.description")}
      </div>
      <div>
        <CirclosNumerosIcon numero={2} />{" "}
        <strong className="text-VerdeTextos">{t("steps.second.strong")}</strong>
        {t("steps.second.description")}
      </div>
      <div>
        <CirclosNumerosIcon numero={3} />{" "}
        <strong className="text-VerdeTextos">{t("steps.third.strong")}</strong>
        {t("steps.third.description")}
      </div>
      <div>{t("description2")}</div>
      <button className="btn-primary">{t("button")}</button>
    </section>
  );
};

export default PagePasoAPaso;
