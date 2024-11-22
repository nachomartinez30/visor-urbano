import { useTranslations } from "next-intl";

export const Badge = () => {
  const t = useTranslations("Badge");
  return (
    <section id="home" className="badgeBackground">
      <div className="grid grid-cols-3 grid-flow-col">
        <div className="lg:col-span-2 col-span-3 badge__Container">
          <h2 className="badge__Titulo">
            <strong>{t("header1")}</strong>
            {" "} {t("header2")}
            <br />
            {t("header3")}
            <strong>
              {" "}
              {t("header4")}
              <br />
              {t("header5")}
            </strong>
          </h2>
          <p className="badge__Contenido">{t("header6")}</p>
        </div>
      </div>
    </section>
  );
};
