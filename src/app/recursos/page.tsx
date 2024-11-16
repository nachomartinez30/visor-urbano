import { CirclosNumerosIcon } from "@/components/icons/CirclosNumerosIcon";
import { useTranslations } from "next-intl";

const PageRecursosNecesarios = () => {
  const t = useTranslations("RecursosNecesarioPage");
  return (
    <section className="flex flex-col gap-4">
      <h1>{t("header")}</h1>
      <p>{t("description1")}</p>
      <p>
        <CirclosNumerosIcon numero={1} />
        {t("steps.first.description")}
      </p>
      <p>
        <CirclosNumerosIcon numero={2} />
        {t("steps.second.description")}
      </p>
      <p>
        <CirclosNumerosIcon numero={3} />
        {t("steps.third.description")}
      </p>
      <p>
        <CirclosNumerosIcon numero={4} />
        {t("steps.fourth.description")}
      </p>
      <p>{t("description2")}</p>
      <button className="btn-primary">{t("button")}</button>
    </section>
  );
};

export default PageRecursosNecesarios;
