import React from "react";
import { ModalProps } from "../types/modal.interface";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/20/solid";

export const ModalAvisoPrivacidad = ({ open, setOpen }: ModalProps) => {
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="h-auto w-auto relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-md text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="sr-only">Close</span>
                <XMarkIcon aria-hidden="true" className="size-8" />
              </button>
            </div>
            <div className="flex gap-5 flex-col p-2">
              <h2 className="font-bold">AVISO DE PRIVACIDAD INTEGRAL</h2>
              <p>Introduccción</p>
              <p>
                De conformidad con la LEY FEDERAL DE PROTECCIÓN DE DATOS
                PERSONALES EN POSESIÓN DE SUJETOS OBLIGADOS y demás normativa,
                ponemos a su disposición nuestro AVISO DE PRIVACIDAD, con la
                finalidad de hacer de su conocimiento el uso y tratamiento a sus
                datos personales, así como los derechos que puede ejercer como
                titular de sus datos personales. Le solicitamos leer
                cuidadosamente, el presente AVISO DE PRIVACIDAD, toda vez que
                otorga su consentimiento tácito para permitirnos tratar sus
                datos personales con base a lo establecido en el presente AVISO
                DE PRIVACIDAD, lo anterior atendiendo a lo establecido en el
                artículo 21 de La Ley General de Protección de Datos Personales
                en Posesión de Sujetos Obligados.
              </p>
              <p>IDENTIDAD DEL RESPONSABLE</p>
              <p>
                LA COORDINACIÓN GENERAL DE INNOVACIÓN GUBERNAMENTAL, con el
                objetivo de impulsar y eficientar el trabajo de la
                administración pública, con el uso de las tecnologías y
                contribuir al desarrollo e innovación, crea sistemas y
                proporciona herramientas que permitan cumplir con dicha tarea,
                siendo el medio la plataforma digital identificada como VISOR
                URBANO JALISCO, al ser una plataforma tecnológica de gestión
                urbana que contiene de manera digital los planes de desarrollo
                urbano, facilita las tareas y trabajo a los municipios del
                Estado; conforme a las facultades conferidas en el artículo 8
                del capítulo II del Reglamento Interno de la Jefatura de
                Gabinete del Gobierno del Estado de Jalisco; con domicilio
                fiscal físico en calle Independencia número 55, piso 5, colonia
                Centro, dentro de la Torre A del Complejo Ciudad Creativa
                Digital.
              </p>
              <p>
                LA COORDINACIÓN GENERAL DE INNOVACIÓN GUBERNAMENTAL, es la
                responsable del tratamiento de sus datos personales aplicando en
                todo momento los principios de confidencialidad,
                proporcionalidad, licitud, consentimiento, información, calidad,
                finalidad, lealtad, y responsabilidad, tal como lo estipula el
                artículo 16 de la Ley General de Protección de Datos Personales
                en Posesión de Sujetos Obligados.
              </p>
              <p>
                Puesta a disposición del Aviso de Privacidad Usted puede
                consultar en cualquier momento nuestro aviso de privacidad en la
                página de internet https://visorurbano.jalisco.gob.mx/inicio,
                deslizar hasta la parte inferior y entrar al apartado de “Aviso
                de Privacidad”. Visor Urbano tiene el compromiso de brindarle
                toda aquella información necesaria para garantizar que tenga el
                control sobre el tratamiento de sus datos personales. La
                principal finalidad para la cual Visor Urbano, trata sus datos
                personales es para proveer aquellos servicios que se contemplan
                en la plataforma, por lo que únicamente recaba y hace uso de los
                datos personales necesarios tales como:
              </p>
              <p>DATOS PERSONALES QUE PODEMOS OBTENER</p>
              <p>
                Nombre Domicilio particular CURP Puesto laboral Correo
                electrónico Número de teléfono
              </p>
              <p>DEL TRATAMIENTO DE DATOS</p>
              <p>
                LA COORDINACIÓN GENERAL DE INNOVACIÓN GUBERNAMENTAL recaba datos
                personales de particulares, servidores públicos, estudiantes,
                así como de personas interesadas en conocer la plataforma Visor
                Urbano, con el fin de: Brindar una experiencia personalizada,
                enfocada al perfil de los asistentes. Difusión publicitaria a
                futuros eventos y/o foros. Evaluar la calidad general y
                específica de los eventos. Difundir información afín al trabajo
                de Visor Urbano, con el objeto de compartir invitaciones a
                eventos futuros.
              </p>
              <p>FORMAS EN LAS QUE SE OBTIENEN LOS DATOS</p>
              <p>
                Sus datos personales son recabados de forma directa al momento
                en que usted realiza el registro en nuestra página web o cuando
                alguno de nuestros colaboradores y/o aliados recaba sus datos
                personales de manera física, al momento en que acude a los foros
                y/o eventos organizados por LA COORDINACIÓN GENERAL DE
                INNOVACIÓN GUBERNAMENTAL.
              </p>
              <p>
                Asimismo, podemos obtener sus datos personales indirectamente de
                otras fuentes permitidas por la Ley General de Protección de
                Datos Personales en Posesión de Sujetos Obligados, en su
                artículo 5º, como lo son directorios electrónicos, páginas web
                gubernamentales, medios de comunicación social, registros
                públicos, o de terceros con quienes tengamos relación jurídica.
                En el caso de que hubiéramos obtenido sus datos personales
                indirectamente, estamos obligados a informarle sobre el presente
                AVISO DE PRIVACIDAD al momento en que le contactemos y/o nos
                comuniquemos con usted, ya sea por medios electrónicos, físicos
                o cualquier otra tecnología permitida por la ley.
              </p>
              <p>MEDIDAS DE SEGURIDAD</p>
              <p>
                Para prevenir la vulneración, robo, extravío, uso indebido o el
                acceso no autorizado a sus datos personales, y con el fin de
                asegurar que la información sea utilizada para los fines
                señalados en este AVISO DE PRIVACIDAD, hemos establecido
                diversos procedimientos, medidas de seguridad administrativas,
                así como políticas internas para gestionar el uso de dichos
                datos, y desarrollado herramientas digitales y técnicas con la
                finalidad de evitar el uso y la divulgación no autorizados de
                sus datos, permitiéndonos tratarlos debidamente, cumpliendo
                cabalmente con lo establecido en los artículos 30, 31, 32, 33,
                34, 35 de la Ley General de Protección de Datos Personales en
                Posesión de Sujetos Obligados, así como demás disposiciones
                aplicables.
              </p>
              <p>
                OPCIONES Y MEDIOS PARA LIMITAR EL USO O DIVULGACIÓN DE DATOS
                PERSONALES.
              </p>
              <p>
                El tratamiento de sus datos personales para los fines
                principales establecidos en el presente aviso y, en general,
                para el cumplimiento de las obligaciones derivadas de su
                relación con LA COORDINACIÓN GENERAL DE INNOVACIÓN GUBERNAMENTAL
                no es limitable en modo alguno, pero si usted desea limitar el
                uso o divulgación de sus datos personales para alguno de los
                fines secundarios establecidos en el presente aviso de
                privacidad, favor de comunicarlo así mediante correo electrónico
                dirigido a la siguiente dirección: contactovisorurbano.com,
                detallando los datos y finalidades concretas que desea limitar.
              </p>
              <p>Derechos ARCO.</p>
              <p>
                Usted tiene derecho a: Conocer qué datos personales tenemos de
                usted, para qué los utilizamos y las condiciones del uso que les
                damos (Acceso); Solicitar la corrección de su información
                personal en caso de que esté desactualizada, sea inexacta o
                incompleta (Rectificación); Que la eliminemos de nuestros
                registros o bases de datos cuando considere que la misma no está
                siendo utilizada adecuadamente (Cancelación); Así como oponerse
                al uso de sus datos personales para fines específicos
                (Oposición).
              </p>
              <p>
                Estos derechos se conocen como derechos ARCO. Puede ejercer sus
                derechos ARCO, mediante comunicación escrita, que debe contener
                y acompañar lo siguiente: I. El nombre del titular y domicilio u
                otro medio para comunicarle la respuesta a su solicitud. II. Los
                documentos que acrediten la identidad, o en su caso, la
                representación legal del titular. III. La descripción clara y
                precisa de los datos personales respecto de los que se busca
                ejercer alguno de los derechos ARCO. IV. Cualquier otro elemento
                o documentos que faciliten la localización de los datos
                personales. V. Deberá indicar las modificaciones a realizarse
                por escrito y aportar la documentación que acredite su
                identidad, dirigiéndose al siguiente correo electrónico
              </p>
              <p>DOMICILIO DE LA UNIDAD DE TRANSPARENCIA</p>
              <p>
                Calle Independencia número 55, piso 5, colonia Centro, dentro de
                la Torre A del Complejo Ciudad Creativa Digital.
              </p>
              <p>TRANSFERENCIA DE DATOS.</p>
              <p>
                Para el cumplimiento de los fines principales establecidos en el
                presente aviso de privacidad, LA COORDINACIÓN GENERAL DE
                INNOVACIÓN GUBERNAMENTAL de conformidad con lo establecido en el
                artículo 22 de la Ley General de Protección de Datos Personales
                en Posesión de Sujetos Obligados, si usted no se opone, podrá
                compartir aquellos datos que resulten estrictamente
                indispensable con Autoridades, lo anterior sin necesidad de
                obtener el consentimiento del titular, únicamente asegurándose
                de que el tercero receptor de la información conozca el
                contenido del presente aviso y los fines a los que el titular ha
                sujetado el tratamiento de sus datos.
              </p>
              <p>
                Para el cumplimiento de los fines principales y secundarios
                establecidos en el presente aviso, y a menos de que el titular
                manifieste oposición expresa y por escrito en ese sentido, dicha
                solicitud podrá ser enviada al correo
              </p>
              <p>
                LA COORDINACIÓN GENERAL DE INNOVACIÓN GUBERNAMENTAL podrá
                compartir información con otras instituciones, asegurando en
                todo momento que los terceros receptores de la información
                asuman las mismas obligaciones que corresponden a LA
                COORDINACIÓN GENERAL DE INNOVACIÓN GUBERNAMENTAL en relación con
                el respeto a la confidencialidad y la autodeterminación
                informativa de todas las personas.
              </p>
              <p>CONSERVACIÓN DE SU INFORMACIÓN PERSONAL</p>
              <p>
                Conservaremos su información personal desde el momento en el que
                se lleve a cabo el registro en la página web de la Plataforma
                identificada como “VISOR URBANO JALISCO”, derivada de LA
                COORDINACIÓN GENERAL DE INNOVACIÓN GUBERNAMENTAL, esto
                únicamente con las finalidades debidamente establecidas en su
                apartado conforme a lo establecido en el artículo 23 párrafo
                cuarto de Ley General de Protección de Datos Personales en
                Posesión de Sujetos Obligados. En cualquier momento podemos
                eliminar su información personal si se hace la solicitud por
                escrito al correo electrónico
              </p>
              <p>MODIFICACIONES AL AVISO DE PRIVACIDAD</p>
              <p>
                Nos reservamos el derecho de efectuar, en cualquier momento y
                sin previo aviso, modificaciones o actualizaciones al presente
                aviso de privacidad, para la atención de novedades legislativas
                o jurisprudenciales, políticas internas o nuevos requerimientos
                para la prestación u ofrecimiento de nuestros servicios. Estas
                modificaciones estarán disponibles en nuestra plataforma.
              </p>
              <p>
                De acuerdo con el artículo 21 de la Ley Federal de Protección de
                Datos Personales en Posesión de Sujetos Obligados, se entenderá
                que el titular consiente tácitamente el tratamiento de sus datos
                personales conforme el presente aviso de privacidad consultable
                en la página web cuando, al proporcionar sus datos, no
                manifieste oposición al mismo.
              </p>
              <p>
                Reconozco que he leído y entiendo el alcance y significado del
                presente aviso a lo cual manifiesto mi consentimiento, así como
                de los mecanismos que la Ley Federal de Protección de Datos
                Personales en Posesión de Sujetos Obligados, demás lineamientos,
                y el presente aviso de privacidad me confieren para el ejercicio
                de mis derechos de acceso, rectificación, cancelación y
                oposición, así como la limitación del uso, transferencia y
                divulgación de datos que pueda realizar LA COORDINACIÓN GENERAL
                DE INNOVACIÓN GUBERNAMENTAL. Mediante el uso de nuestra página
                web y aplicación, usted da su consentimiento para el tratamiento
                y transferencias, uso para las finalidades necesarias
                anteriormente establecidas en este aviso.
              </p>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};
