import { useTranslations } from "next-intl";

const PageManual = () => {
  const t = useTranslations("ManualUsoMarca");
  return (
    <section>
      <h2 className="main-title">{t("header")}</h2>
      <p>{t("descripcion1")}</p>
      <button className="btn-primary">{t("button1")}</button>
      <button className="btn-primary">{t("button2")}</button>
      <ul className="list-disc">
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
    </section>
  );
};

export default PageManual;
