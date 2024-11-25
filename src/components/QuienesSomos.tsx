"use client";
import { YouTubeEmbed } from "@next/third-parties/google";
import { useTranslations } from "next-intl";

export const QuienesSomos = () => {
  const t = useTranslations("QuienesSomos");
  return (
    <section
      id="quienes_somos"
      className="somosBackground"
    >
      <h2 className="somos__Titulo text-center mb-8">{t("header")}</h2>
      <div className="flex justify-center">
        <YouTubeEmbed
          videoid="CR6C86CtG1w"
        />
      </div>
    </section>
  );
};
