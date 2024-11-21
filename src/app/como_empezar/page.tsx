import { useTranslations } from "next-intl";

const PageComoEmpezar = () => {
  const t = useTranslations("ComoEmpezarPage");

  return (
    <section
      id="como_empezar"
      className="mt-32 sm:mt-40 grid comoEmpezar__Seccion"
    >
      <div className="justify-self-center">
        <h2 className="comoEmpezar__Titulo">{t("header")}</h2>
        <p className="mt-10 comoEmpezar__Contenido">{t("description1")}</p>
        <p className="mt-5 comoEmpezar__Contenido">{t("description2")}</p>
        <a
          href="/files/Como_empezar_el_equipo_y_los_profesionales_necesarios_para_implementar_Visor_Urbano.pdf"
          download={true}
          className="btn-primary mt-10 justify-self-center"
        >
          {t("button")}
        </a>
      </div>
    </section>
  );
};

export default PageComoEmpezar;
