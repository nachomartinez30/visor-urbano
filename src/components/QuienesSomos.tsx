"use client";
import { YouTubeEmbed } from "@next/third-parties/google";

export const QuienesSomos = () => {
  return (
    <section
      id="quienes_somos"
      className="lg:h-screen sm:h-1/4 somosBackground"
    >
      <h2 className="somos__Titulo text-center mb-8">¿Qué es Visor Urbano?</h2>
      <div className="flex justify-center">
        <YouTubeEmbed
          videoid="CR6C86CtG1w"
        />
      </div>
    </section>
  );
};
