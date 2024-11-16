import { CirclosNumerosIcon } from "@/components/icons/CirclosNumerosIcon";
import { useTranslations } from "next-intl";

const PageRecursosNecesarios = () => {
  const t = useTranslations("RecursosNecesarioPage");
  return (
    <section className="flex flex-col gap-4">
      <h1>{t("header")}</h1>
      <div>{t("description1")}</div>
      <div>
        <CirclosNumerosIcon numero={1} />
        {t("steps.first.description")}
      </div>
      <div>
        <CirclosNumerosIcon numero={2} />
        {t("steps.second.description")}
      </div>
      <div>
        <CirclosNumerosIcon numero={3} />
        {t("steps.third.description")}
      </div>
      <div>
        <CirclosNumerosIcon numero={4} />
        {t("steps.fourth.description")}
      </div>
      <div>{t("description2")}</div>
      <button className="btn-primary">{t("button")}</button>
    </section>
  );
};

export default PageRecursosNecesarios;
