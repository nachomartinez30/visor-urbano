import Image from "next/image";
import timeline_1 from "../assets/images/timeline_1.svg";
import timeline_2 from "../assets/images/timeline_2.svg";
import timeline_3 from "../assets/images/timeline_3.svg";
import timeline_4 from "../assets/images/timeline_4.svg";
import timeline_5 from "../assets/images/timeline_5.svg";
import timeline_6 from "../assets/images/timeline_6.svg";
import timeline_7 from "../assets/images/timeline_7.svg";
import timeline_8 from "../assets/images/timeline_8.svg";

export const NuestraHistoria = () => {
  return (
    <section id="nuestra_historia" className="nuestraHistoriaBackground">
      <div className="pb-[250px]">
        <h2 className="text-white text-2xl">Nuestra Historia</h2>

        <Image alt="timeline_1" src={timeline_1} />
        <h2 className="year">2016</h2>
        <p className="text">
          Guadalajara gana el Premio “Mayors Challenge” de Bloomberg
          Philanthropies
        </p>

        <Image alt="timeline_2" src={timeline_2} />
        <h2 className="year">2018</h2>
        <p className="text">
          Visor Urbano Guadalajara gana el Premio Nacional de Innovación en
          Transparencia
        </p>

        <Image alt="timeline_3" src={timeline_3} />
        <h2 className="year">2020</h2>
        <p className="text">
          Ganador del Future Cities Award de los Emiratos Árabes Unidos
        </p>

        <Image alt="timeline_4" src={timeline_4} />
        <h2 className="year">2022</h2>
        <p className="text">Lanzamiento de Visor Urbano en Hidalgo</p>
        <Image
          alt="
        timeline_5"
          src={timeline_5}
        />
        <h2 className="year">2017</h2>
        <p className="text">
          Lanzamiento de primera versión de Visor Urbano en Guadalajara, Jalisco
        </p>

        <Image alt="timeline_6" src={timeline_6} />
        <h2 className="year">2019</h2>
        <p className="text">
          Primera réplica de Visor Urbano, en San Pedro Garza García, Nuevo León
        </p>

        <Image alt="timeline_7" src={timeline_7} />
        <h2 className="year">2021</h2>
        <p className="text">
          Consolidación de Visor Urbano en 33 municipios de Jalisco
        </p>

        <Image alt="timeline_8" src={timeline_8} />
        <h2 className="year">2023</h2>
        <p className="text">Meta de expansión a más de 50 ciudades en México</p>
      </div>
    </section>
  );
};
