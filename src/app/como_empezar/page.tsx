import { useTranslations } from "next-intl";

const PageComoEmpezar = () => {
  const t = useTranslations("ComoEmpezarPage");

  return (
    <section id="como_empezar">
      <h1 className="main-title">{t("header")}</h1>
      <p>{t("description1")}</p>
      <p>{t("description2")}</p>
      <button className="btn-primary">{t("button")}</button>
    </section>
  );
};

export default PageComoEmpezar;
