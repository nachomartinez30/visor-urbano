import { CirclosNumerosIcon } from "@/components/icons/CirclosNumerosIcon";
import { useTranslations } from "next-intl";

const PageRecursosNecesarios = () => {
  const t = useTranslations("RecursosNecesarioPage");
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
          <CirclosNumerosIcon numero={1} />
        </div>
        <div className="col-span-8 sm:col-span-8 flex flex-col">
          <span className="pasoPaso__Descripcion">
            {t("steps.first.description")}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-9">
        <div className="col-span-1 sm:col-span-1 flex flex-col items-center text-center pr-2 sm:pr-0">
          <CirclosNumerosIcon numero={2} />
        </div>
        <div className="col-span-8 sm:col-span-8 flex flex-col">
          <span className="pasoPaso__Descripcion">
            {t("steps.second.description")}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-9">
        <div className="col-span-1 sm:col-span-1 flex flex-col items-center text-center pr-2 sm:pr-0">
          <CirclosNumerosIcon numero={3} />
        </div>
        <div className="col-span-8 sm:col-span-8 flex flex-col">
          <span className="pasoPaso__Descripcion">
            {t("steps.third.description")}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-9">
        <div className="col-span-1 sm:col-span-1 flex flex-col items-center text-center pr-2 sm:pr-0">
          <CirclosNumerosIcon numero={4} />
        </div>
        <div className="col-span-8 sm:col-span-8 flex flex-col">
          <span className="pasoPaso__Descripcion">
            {t("steps.fourth.description")}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-9">
        <div className="col-start-2 sm:col-start-2 col-span-8 sm:col-span-8 pasoPaso__Descripcion">
          {t("description2")}
        </div>
      </div>
      <a
        href="/files/Recursos_necesarios_que_datos_y_recursos_necesitara_para_la_implementacion.pdf"
        download={true}
        className="btn-primary mt-10 justify-self-center pasoPaso__Boton"
      >
        {t("button")}
      </a>
    </section>
  );
};

export default PageRecursosNecesarios;
