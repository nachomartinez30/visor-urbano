import { useTranslations } from "next-intl";

const PageCodigoAbierto = () => {
  const t = useTranslations("CodigoAbiertoPage");
  return (
    <section className="flex flex-col gap-4">
      <h1 className="main-title">{t("header")}</h1>
      <p>{t("description1")}</p>
      <p>{t("description2")}</p>
    </section>
  );
};

export default PageCodigoAbierto;
