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
    <div className="mt-32 sm:mt-40 mb-6 grid grid-cols-5 gap-3 bg-[#F9F9FA]">
      <div className="col-span-1 bg-white gap-4">
        <Link
          href="/documentacion/diagnostico"
          className="text-VerdeTextos font-bold "
        >
          <div
            className={`hover:pl-5 ${
              pathname === "/documentacion/diagnostico" ? "activePath" : ""
            }`}
          >
            <CheckIcon
              fill={
                pathname === "/documentacion/diagnostico" ? "#FFF" : "#65c65e"
              }
            />
            {t("sidebar.button1")}
          </div>
        </Link>
        <Link
          href="/documentacion/tutoriales"
          className="text-VerdeTextos font-bold "
        >
          <div
            className={`hover:pl-5 ${
              pathname === "/documentacion/tutoriales" ? "activePath" : ""
            }`}
          >
            <VideoIcon
              fill={
                pathname === "/documentacion/tutoriales" ? "#FFF" : "#65c65e"
              }
            />
            {t("sidebar.button2")}
          </div>
        </Link>
        <Link
          href="/documentacion/manual"
          className="text-VerdeTextos font-bold "
        >
          <div
            className={`hover:pl-5 ${
              pathname === "/documentacion/manual" ? "activePath" : ""
            }`}
          >
            <ManualIcon
              fill={pathname === "/documentacion/manual" ? "#FFF" : "#65c65e"}
            />

            {t("sidebar.button3")}
          </div>
        </Link>
      </div>
      <div className="col-span-4 ">{children}</div>
    </div>
  );
};

export default LayoutDocumentacion;
