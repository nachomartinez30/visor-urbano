import { useTranslations } from "next-intl";

const PageDiagnostico = () => {
  const t = useTranslations("DiagnosticoViabilidad");
  return (
    <section>
      <h2 className="main-title">{t("header")}</h2>
      <p>{t("descripcion1")}</p>
      <p>{t("descripcion2")}</p>
      <p>{t("descripcion3")}</p>
      <button className="btn-primary">{t("button")}</button>
    </section>
  );
};

export default PageDiagnostico;
