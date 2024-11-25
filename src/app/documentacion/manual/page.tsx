import { useTranslations } from "next-intl";

const PageManual = () => {
  const t = useTranslations("ManualUsoMarca");
  return (
    <section className="mt-3 flex flex-col gap-2 sm:gap-10 bg-white p-5 rounded-lg documentacion__Bloque">
      <h2 className="text-center documentacion__Titulos">{t("header")}</h2>
      <div className="documentacion__Contenido">
        <p>{t("descripcion1")}</p>
        <ul className="list-disc pl-14 mt-6">
          <li>{t("list.item1")}</li>
          <li>{t("list.item2")}</li>
          <li>{t("list.item3")}</li>
          <li>{t("list.item4")}</li>
          <li>{t("list.item5")}</li>
          <li>{t("list.item6")}</li>
          <li>{t("list.item7")}</li>
          <li>{t("list.item8")}</li>
          <li>{t("list.item9")}</li>
          <li>{t("list.item10")}</li>
          <li>{t("list.item11")}</li>
          <li>{t("list.item12")}</li>
        </ul>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-10 py-10">
          <a
            href="/files/Logotipo_Visor_Urbano.zip"
            className="col-span-1 btn-primary text-center flex-col justify-self-center"
          >
            {t("button1")}
          </a>
          <a
            href="/files/Manual_de_uso_de_marca_de_Visor_Urbano.pdf"
            download={true}
            className="col-span-1 btn-primary text-center flex-col justify-self-center"
          >
            {t("button2")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default PageManual;
