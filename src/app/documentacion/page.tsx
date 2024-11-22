import { useTranslations } from "next-intl";

const PageDocumentacion = () => {
  const t = useTranslations("DocumentacionHerramientas");
  return (
    <section className="mt-3 flex flex-col gap-10 bg-white p-5 rounded-lg documentacion__Bloque">
      <h2 className="text-center documentacion__Titulos">{t("header")}</h2>
      <div className="documentacion__Contenido">
        <p>{t("description1")}</p>
        <p className="mt-6">{t("description2")}</p>
        <ul className="list-disc marker:text-VerdeTextos pl-8 sm:pl-14 mt-6">
          <li>
            {t.rich("list.item1", {
              span: (children) => <span className="text-VerdeTextos font-bold">{children}</span>,
            })}
          </li>
          <li>
            {t.rich("list.item2", {
              span: (children) => <span className="text-VerdeTextos font-bold">{children}</span>,
            })}
          </li>
          <li>
            {t.rich("list.item3", {
              span: (children) => <span className="text-VerdeTextos font-bold">{children}</span>,
            })}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PageDocumentacion;
