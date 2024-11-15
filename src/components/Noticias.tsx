import { useTranslations } from "next-intl";
import { ArticulosContainer } from "./ArticulosContainer";

export const Noticias = () => {
  const t = useTranslations("Noticias");
  return (
    <section id="noticias" className="py-10 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="noticiasBloque__Titulo">{t("header")}</h2>
        </div>
        <ArticulosContainer />
        <div className="flex flex-col items-center mt-10">
          <a
            href="https://visorurbano.jalisco.gob.mx/inicio#noticias"
            target="_blank"
            className="btn-primary text-center flex-col items-center noticias__Boton"
          >
            {t("button")}
          </a>
        </div>
      </div>
    </section>
  );
};
