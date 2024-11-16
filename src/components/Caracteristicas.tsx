import { useTranslations } from "next-intl";
import Image from "next/image";
import check_icon from "../assets/images/caracteristicas/checkIcon.svg";

import column1_feature1 from "../assets/images/caracteristicas/column1_feature1.svg";
import column1_feature2 from "../assets/images/caracteristicas/column1_feature2.svg";
import column2_feature1 from "../assets/images/caracteristicas/column2_feature1.svg";
import column2_feature2 from "../assets/images/caracteristicas/column2_feature2.svg";

export const Caracteristicas = () => {
  const t = useTranslations("Caracteristicas");
  return (
    <section id="caracterisrticas">
      <h2 className="main-title">{t("header")}</h2>
      <p>{t("description")}</p>
      <div className="grid grid-flow-col">
        <div>
          <Image
            width={54.71}
            height={57.72}
            alt="checkIcon"
            src={check_icon}
          />
          <h3 className="text-VerdeTextos font-bold">{t("column1.header")}</h3>
          <div className="text-VerdeTextos">
            <Image
              src={column1_feature1}
              height={120}
              width={120}
              alt="feature1"
            />
            {t("column1.headerFeature1")}
          </div>
          <div>{t("column1.feature1")}</div>
          <div className="text-VerdeTextos">
            <Image
              src={column1_feature2}
              height={120}
              width={120}
              alt="feature2"
            />
            {t("column1.headerFeature2")}
          </div>
          <div>{t("column1.feature2")}</div>
        </div>
        <div>
          <Image
            width={54.71}
            height={57.72}
            alt="checkIcon"
            src={check_icon}
          />
          <h3 className="text-VerdeTextos font-bold">{t("column2.header")}</h3>
          <div className="text-VerdeTextos">
            <Image
              src={column2_feature1}
              height={120}
              width={120}
              alt="feature1"
            />
            {t("column2.headerFeature1")}
          </div>
          <div>{t("column2.feature1")}</div>
          <div className="text-VerdeTextos">
            <Image
              src={column2_feature2}
              height={120}
              width={120}
              alt="feature2"
            />
            {t("column2.headerFeature2")}
          </div>
          <div>{t("column2.feature2")}</div>
        </div>
      </div>
    </section>
  );
};
