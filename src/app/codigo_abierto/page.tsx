import { useTranslations } from "next-intl";

const PageCodigoAbierto = () => {
  const t = useTranslations("CodigoAbiertoPage");
  return (
    <section className="mt-32 sm:mt-40 grid comoEmpezar__Seccion">
      <div className="justify-self-center">
        <h2 className="comoEmpezar__Titulo">{t("header")}</h2>
        <p className="mt-10 comoEmpezar__Contenido">{t("description1")}</p>
        <p className="mt-5 comoEmpezar__Contenido">{t("description2")}</p>
        <a href="https://gitlab.com/visorurbano" target="_blank" className="btn-primary mt-10 justify-self-center">{t("button")}</a>
      </div>
    </section>
  );
};

export default PageCodigoAbierto;
