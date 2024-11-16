import { useTranslations } from "next-intl";

export const Caracteristicas = () => {
  const t = useTranslations("Caracteristicas");
  return (
    <section id="caracterisrticas">
      <h2 className="main-title">{t("header")}</h2>
      <p>{t("description")}</p>
      <div className="grid grid-flow-col">
        <div>
          <h3 className="text-VerdeTextos font-bold">{t("column1.header")}</h3>
          <div className="text-VerdeTextos">{t("column1.headerFeature1")}</div>
          <div>{t("column1.feature1")}</div>
          <div className="text-VerdeTextos">{t("column1.headerFeature2")}</div>
          <div>{t("column1.feature2")}</div>
        </div>
        <div>
          <h3 className="text-VerdeTextos font-bold">{t("column2.header")}</h3>
          <div className="text-VerdeTextos">{t("column2.headerFeature1")}</div>
          <div>{t("column2.feature1")}</div>
          <div className="text-VerdeTextos">{t("column2.headerFeature2")}</div>
          <div>{t("column2.feature2")}</div>
        </div>
      </div>
    </section>
  );
};
