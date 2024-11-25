import { useTranslations } from "next-intl";
import Image from "next/image";
import check_icon from "../assets/images/caracteristicas/checkIcon.svg";

export const BeneficiosCertificar = () => {
  const t = useTranslations("BeneficiosCertificar");
  return (
    <section
      id="beneficios_certificar"
      className="pt-10 bg-GrisClaro flex flex-col items-center beneficios__Block"
    >
      <h2 className="mb-10 text-center beneficios__Titulo"> {t("header")}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:grid-flow-col gap-10 mb-10">
        <div className="bg-BlancoBase rounded-3xl p-8 sm:p-4 xl:p-8 grid grid-flow-col gap-2 justify-center">
          <Image
            height={28.71}
            width={28.71}
            alt="checkIcon"
            src={check_icon}
          />
          {t("item1")}
        </div>
        <div className="bg-BlancoBase rounded-3xl p-8 sm:p-4 xl:p-8 grid grid-flow-col gap-2 justify-center">
          <Image
            height={28.71}
            width={28.71}
            alt="checkIcon"
            src={check_icon}
          />
          {t("item2")}
        </div>
        <div className="bg-BlancoBase rounded-3xl p-8 sm:p-4 xl:p-8 grid grid-flow-col gap-2 justify-center">
          <Image
            height={28.71}
            width={28.71}
            alt="checkIcon"
            src={check_icon}
          />
          {t("item3")}
        </div>
      </div>

      <button className="btn-primary text-center flex-col items-center btn__Regular">
        {t("button")}
      </button>
    </section>
  );
};
