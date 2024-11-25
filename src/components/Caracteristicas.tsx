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
    <section id="caracterisrticas" className="pt-10 caracteristicas__Background">
      <div className="grid flex justify-center px-5 sm:px-40 caracteristicas__TextosTop">
        <h3 className="text-center pt-5 caracteristicas__Titulo">{t("header")}</h3>
        <p className="text-center py-5 sm:py-10 px-10 sm:px-10 xl:px-60 caracteristicas__Descripcion">{t("description")}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-flow-col flex justify-center caracteristicas__Grid">
        <div className="grid sm:grid-flow-col my-5 sm:my-0">
          <div className="grid content-between caracteristicas__Cards">
            <div className="grid grid-cols-1 sm:grid-cols-4 my-4">
              <div className="flex justify-center col-span-4 sm:col-span-1">
                <Image
                  className="caraCards__Icon--check"
                  alt="checkIcon"
                  src={check_icon}
                />
              </div>
              <div className="col-span-4 sm:col-span-3 text-center sm:text-left px-4">
                <h3 className="text-VerdeTextos font-bold">{t("column1.header")}</h3>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 my-4">
              <div className="flex justify-center col-span-4 sm:col-span-1">
                <Image
                  className="caraCards__Icons"
                  alt="feature1"
                  src={column1_feature1}
                />
              </div>
              <div className="col-span-4 sm:col-span-3 text-center sm:text-left px-4">
                <div className="text-VerdeTextos">
                  {t("column1.headerFeature1")}
                </div>
                <div>
                  {t("column1.feature1")}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 my-4">
              <div className="flex justify-center col-span-4 sm:col-span-1">
                <Image
                  className="caraCards__Icons"
                  alt="feature2"
                  src={column1_feature2}
                />
              </div>
              <div className="col-span-4 sm:col-span-3 text-center sm:text-left px-4">
                <div className="text-VerdeTextos">
                  {t("column1.headerFeature2")}
                </div>
                <div>
                  {t("column1.feature2")}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-flow-col my-5 sm:my-0">
          <div className="grid content-between caracteristicas__Cards">
            <div className="grid grid-cols-1 sm:grid-cols-4 my-4">
              <div className="flex justify-center col-span-4 sm:col-span-1">
                <Image
                  className="caraCards__Icon--check"
                  alt="checkIcon"
                  src={check_icon}
                />
              </div>
              <div className="col-span-4 sm:col-span-3 text-center sm:text-left px-4">
                <h3 className="text-VerdeTextos font-bold">{t("column2.header")}</h3>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 my-4">
              <div className="flex justify-center col-span-4 sm:col-span-1">
                <Image
                  className="caraCards__Icons"
                  alt="feature1"
                  src={column2_feature1}
                />
              </div>
              <div className="col-span-4 sm:col-span-3 text-center sm:text-left px-4">
                <div className="text-VerdeTextos">
                  {t("column2.headerFeature1")}
                </div>
                <div>
                  {t("column2.feature1")}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 my-4">
              <div className="flex justify-center col-span-4 sm:col-span-1">
                <Image
                  className="caraCards__Icons"
                  alt="feature2"
                  src={column2_feature2}
                />
              </div>
              <div className="col-span-4 sm:col-span-3 text-center sm:text-left px-4">
                <div className="text-VerdeTextos">
                  {t("column2.headerFeature2")}
                </div>
                <div>
                  {t("column2.feature2")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
