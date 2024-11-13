import { StaticImageData } from "next/image";

export interface Person {
  nombre: string;
  rol: string;
  correo: string;
  imageUrl: StaticImageData;
  descripcion: string;
  redes: {
    instagram: string;
    linkedin: string;
  };
}
