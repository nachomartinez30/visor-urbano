"use client";

import Image, { StaticImageData } from "next/image";
import img_noticia_1 from "../assets/images/noticias/img-noticia-1.png";
import img_noticia_2 from "../assets/images/noticias/img-noticia-2.png";
import img_noticia_3 from "../assets/images/noticias/img-noticia-3.png";
interface ArticuloProps {
  id: number;
  title: string;
  href: string;
  description: string;
  imageUrl: StaticImageData;
  date: string;
}
const posts = [
  {
    id: 1,
    title: "Capacitación sobre Visor Urbano Morelos",
    href: "#",
    description:
      "La CEMER Hidalgo y el equipo de Visor Urbano capacitan a 36 municipios del estado sobre el uso de la plataform...",
    imageUrl: img_noticia_1,
    date: "28 febrero, 2024",
  },
  {
    id: 2,
    title: "Titulo de la noticia",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl: img_noticia_2,
    date: "17 Enero, 2020",
  },
  {
    id: 3,
    title: "Titulo de la noticia",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl: img_noticia_3,
    date: "17 Enero, 2020",
  },
  // More posts...
];

export const Noticias = () => {
  return (
    <section id="noticias" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="main-title">Ló último de Visor Urbano</h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <Articulo key={post.id} {...post} />
          ))}
        </div>
        <div className="flex flex-col items-center mt-10">
          <button className="btn-primary text-center flex-col items-center noticias__Boton">Ver todas las noticias</button>
        </div>
      </div>
    </section>
  );
};

const Articulo = (post: ArticuloProps) => {
  const { id, title, href, description, imageUrl, date } = post;
  return (
    <article
      key={id}
      className="flex flex-col items-start justify-between shadow-gray-200 shadow-md rounded-2xl"
    >
      <div className="relative w-full hover:scale-105 transition-transform duration-300">
        <Image
          className="aspect-[16/9] w-full rounded-2xl object-cover sm:aspect-[2/1] lg:aspect-[3/2] noticias__Image"
          alt={title}
          src={imageUrl}
        />
      </div>
      <div className="max-w-xl p-5">
        <div className="group relative">
          <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
            <a href={href} className="noticias__Titulo">
              {title}
            </a>
          </h3>
          <div className="my-5">
            <time className="text-VerdeTextos noticias__Fecha">{date}</time>
          </div>
          <p className="line-clamp-3 text-sm/6 text-gray-600 noticias__Descripcion">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
};
