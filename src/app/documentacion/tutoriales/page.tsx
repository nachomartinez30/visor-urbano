import { useTranslations } from "next-intl";

const PageTutoriales = () => {
  const t = useTranslations("TutorialesManuales");
  return (
    <section>
      <h2 className="main-title">{t("header")}</h2>
      <p>{t("descripcion1")}</p>
      <p>{t("descripcion2")}</p>
    </section>
  );
};

export default PageTutoriales;
