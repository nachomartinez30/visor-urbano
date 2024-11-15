interface ArticuloProps {
  id: number;
  title: string;
  href: string;
  description: string;
  imageUrl: string;
  date: string;
}

export interface PostResponse {
  id: number;
  titulo: string;
  img: string;
  link: string;
  resumen: string;
  fecha_noticia: Date;
  type: number;
  body: string;
  publicado: number;
  created_at: null;
  updated_at: null;
}

const postsDTO = (postResponse: PostResponse[]): ArticuloProps[] => {
  return postResponse.slice(0, 3).map((post) => ({
    id: post.id,
    title: post.titulo,
    href: post.link,
    description: post.resumen,
    imageUrl: post.img,
    date: new Date(post.fecha_noticia).toLocaleDateString("es-MX", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  }));
};

const res = await fetch("https://api-visorurbano.jalisco.gob.mx/blog", {
  cache: "reload",
});
const { data } = await res.json();
const posts = postsDTO(data.data); /* asi esta el API de visor urbano */

export const ArticulosContainer = () => {
  return (
    <div className="mx-auto mt-4 sm:mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {posts.map((post: ArticuloProps) => (
        <Articulo key={post.id} {...post} />
      ))}
    </div>
  );
};

const Articulo = (post: ArticuloProps) => {
  const { id, title, href, description, imageUrl, date } = post;
  return (
    <a
      href={href}
      target="_blank"
      key={id}
      className="flex flex-col items-start justify-between shadow-gray-200 shadow-md rounded-2xl"
    >
      <div className="relative w-full hover:scale-105 transition-transform duration-300">
        <img
          className="aspect-[16/9] w-full rounded-2xl object-cover sm:aspect-[2/1] lg:aspect-[3/2] noticias__Image"
          alt={title}
          src={imageUrl}
        />
      </div>
      <div className="max-w-xl p-5">
        <div className="group relative">
          <h2 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
            <span className="noticias__Titulo">{title}</span>
          </h2>
          <div className="my-5">
            <time className="text-VerdeTextos noticias__Fecha">{date}</time>
          </div>
          <p className="line-clamp-3 text-sm/6 text-gray-600 noticias__Descripcion">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
};
