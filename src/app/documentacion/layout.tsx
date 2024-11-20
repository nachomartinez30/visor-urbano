"use client";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import Link from "next/link";
import CheckIcon from "./icons/CheckIcon";
import VideoIcon from "./icons/VideoIcon";
import ManualIcon from "./icons/ManualIcon";

interface LayoutDocumentacionProps {
  children: React.ReactNode;
}
const LayoutDocumentacion = ({ children }: LayoutDocumentacionProps) => {
  const t = useTranslations("DocumentacionHerramientas");
  const pathname = usePathname();

  return (
    <div className="mt-24 sm:mt-28 mb-6 grid grid-cols-7 gap-3 bg-[#F9F9FA]">
      <div className="col-span-7 sm:col-span-2 bg-white pt-0 sm:pt-10 px-4 pl-6 gap-4">
        <Link href="/documentacion/diagnostico" className="text-VerdeTextos" >
          <div className={`flex flex-row gap-2 ${ pathname === "/documentacion/diagnostico" ? "activePath" : "my-6" }`} >
            <CheckIcon fill={ pathname === "/documentacion/diagnostico" ? "#FFF" : "#65c65e" } />
            {t("sidebar.button1")}
          </div>
        </Link>
        <Link href="/documentacion/tutoriales" className="text-VerdeTextos" >
          <div className={`flex flex-row gap-2 ${ pathname === "/documentacion/tutoriales" ? "activePath" : "my-6" }`} >
            <VideoIcon fill={ pathname === "/documentacion/tutoriales" ? "#FFF" : "#65c65e" } />
            {t("sidebar.button2")}
          </div>
        </Link>
        <Link href="/documentacion/manual" className="text-VerdeTextos" >
          <div className={`flex flex-row gap-2 ${ pathname === "/documentacion/manual" ? "activePath" : "my-6" }`} >
            <ManualIcon fill={pathname === "/documentacion/manual" ? "#FFF" : "#65c65e"} />
            {t("sidebar.button3")}
          </div>
        </Link>
      </div>
      <div className="col-span-7 sm:col-span-5 ">{children}</div>
    </div>
  );
};

export default LayoutDocumentacion;
