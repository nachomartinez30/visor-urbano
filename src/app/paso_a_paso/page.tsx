import { CirclosNumerosIcon } from "@/components/icons/CirclosNumerosIcon";
import { useTranslations } from "next-intl";

const PagePasoAPaso = () => {
  const t = useTranslations("PasoAPasoPage");
  return (
    <section className="gap-4 mt-32 sm:mt-40 grid pasoPaso__Seccion">
      <div className="grid grid-cols-9">
        <h2 className="col-start-2 sm:col-start-2 col-span-8 sm:col-span-8 pasoPaso__Titulo">
          {t("header")}
        </h2>
      </div>
      <div className="grid grid-cols-9">
        <div className="col-start-2 sm:col-start-2 col-span-8 sm:col-span-8 pasoPaso__Descripcion">
          {t("description1")}
        </div>
      </div>
      <div className="grid grid-cols-9">
        <div className="col-span-1 sm:col-span-1 flex flex-col items-center text-center pr-2 sm:pr-0">
          <CirclosNumerosIcon numero={1} />{" "}
        </div>
        <div className="col-span-8 sm:col-span-8 flex flex-col">
          <strong className="text-VerdeTextos">
            {t("steps.first.strong")}{" "}
          </strong>
          <span className="pasoPaso__Descripcion">
            {t("steps.first.description")}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-9">
        <div className="col-span-1 sm:col-span-1 flex flex-col items-center text-center pr-2 sm:pr-0">
          <CirclosNumerosIcon numero={2} />{" "}
        </div>
        <div className="col-span-8 sm:col-span-8 flex flex-col">
          <strong className="text-VerdeTextos">
            {t("steps.second.strong")}{" "}
          </strong>
          <span className="pasoPaso__Descripcion">
            {t("steps.second.description")}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-9">
        <div className="col-span-1 sm:col-span-1 flex flex-col items-center text-center pr-2 sm:pr-0">
          <CirclosNumerosIcon numero={3} />{" "}
        </div>
        <div className="col-span-8 sm:col-span-8 flex flex-col">
          <strong className="text-VerdeTextos">
            {t("steps.third.strong")}{" "}
          </strong>
          <span className="pasoPaso__Descripcion">
            {t("steps.third.description")}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-9">
        <div className="col-start-2 sm:col-start-2 col-span-8 sm:col-span-8 pasoPaso__Descripcion">
          {t("description2")}
        </div>
      </div>
      <a
        href="/files/Paso_a_paso_para_la_implementacion_de_Visor_Urbano_en_su_ciudad.pdf"
        download={true}
        className="btn-primary mt-10 justify-self-center pasoPaso__Boton"
      >
        {t("button")}
      </a>
    </section>
  );
};

export default PagePasoAPaso;
