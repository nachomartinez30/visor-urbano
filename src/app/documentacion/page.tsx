import { useTranslations } from "next-intl";

const PageDocumentacion = () => {
  const t = useTranslations("DocumentacionHerramientas");
  return (
    <section className="mt-3 flex flex-col gap-10 bg-white p-5 rounded-lg">
      <h1 className="main-title">{t("header")}</h1>
      <p>{t("description1")}</p>
      <p>{t("description2")}</p>
      <ul className="list-disc">
        <li>{t("list.item1")}</li>
        <li>{t("list.item2")}</li>
        <li>{t("list.item3")}</li>
      </ul>
    </section>
  );
};

export default PageDocumentacion;
