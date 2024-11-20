import { useTranslations } from "next-intl";

const PageDiagnostico = () => {
  const t = useTranslations("DiagnosticoViabilidad");
  return (
    <section className="mt-3 flex flex-col gap-2 sm:gap-10 bg-white p-5 rounded-lg documentacion__Bloque">
      <h2 className="text-center documentacion__Titulos">{t("header")}</h2>
      <div className="documentacion__Contenido">
        <p className="mt-6">{t("descripcion1")}</p>
        <p className="mt-6">{t("descripcion2")}</p>
        <p>{t("descripcion3")}</p>
        <div className="flex flex-col">
        <a href="/files/Diagnostico_para_la_implementacion_de_Visor_Urbano.pdf" download={true} className="btn-primary text-center flex-col items-center mt-10 mx-5 sm:mx-40">{t("button")}</a>
        </div>
      </div>
    </section>
  );
};

export default PageDiagnostico;
