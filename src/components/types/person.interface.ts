import { StaticImageData } from "next/image";

export interface Person {
  nombre: string;
  rol: string;
  correo: string;
  imageUrl: StaticImageData;
  descripcion1: string;
  descripcion2: string;
  redes?: {
    instagram?: string;
    linkedin?: string;
  };
}
