import { useTranslations } from "next-intl";

const PageDocumentacion = () => {
  const t = useTranslations("DocumentacionHerramientas");
  return (
    <section className="mt-3 flex flex-col gap-10 bg-white p-5 rounded-lg documentacion__Bloque">
      <h2 className="text-center documentacion__Titulos">{t("header")}</h2>
      <div className="documentacion__Contenido">
        <p>{t("description1")}</p>
        <p className="mt-6">{t("description2")}</p>
        <ul className="list-disc pl-8 sm:pl-14 mt-6">
          <li>{t("list.item1")}</li>
          <li>{t("list.item2")}</li>
          <li>{t("list.item3")}</li>
        </ul>
      </div>
    </section>
  );
};

export default PageDocumentacion;
