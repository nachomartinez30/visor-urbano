import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { ModalProps } from "../types/modal.interface";
import { Person } from "../types/person.interface";
import iconoCorreo from "../../assets/images/email_icon.svg";
import iconoInsta from "../../assets/images/instagram.svg";
import iconoLinkedIn from "../../assets/images/linkedin.png";

interface ModalEquipoProps extends ModalProps {
  selectedPerson: Person;
}

export const ModalEquipo = ({
  open,
  setOpen,
  selectedPerson,
}: ModalEquipoProps) => {
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
            className="relative transform rounded-lg bg-white shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 equipoModal_Bloque"
          >
            <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-md text-[#CFD4D6] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="sr-only">Cerrar</span>
                <XMarkIcon aria-hidden="true" className="size-8" />
              </button>
            </div>
            <div className="flex flex-col grid grid-cols-12 justify-between equipoModal">
              <div className="col-start-2 col-span-3 flex flex-col items-center text-center">
                <Image
                  alt={selectedPerson.nombre}
                  className="equipoModal__Image"
                  src={selectedPerson.imageUrl}
                />
                <div className="mt-5 flex flex-row items-center">
                  <Image
                    alt="icono de correo"
                    className="mr-2"
                    src={iconoCorreo}
                  />
                  <a
                    href={`mailto:${selectedPerson.correo}`}
                    className="imageModal__Correo"
                  >
                    {selectedPerson.correo}
                  </a>
                </div>
              </div>
              <div className="col-start-6 col-span-6 flex flex-col text-left">
                <div className="font-bold equipoModal__Nombre">
                  {selectedPerson.nombre}
                </div>
                <div className="text-VerdeTextos mb-10 equipoModal__Puesto">
                  {selectedPerson.rol}
                </div>
                <div className="mb-10 equipoModal__Contenido">
                  <p className="mb-10">{selectedPerson.descripcion1}</p>
                  <p>{selectedPerson.descripcion2}</p>
                </div>
                {selectedPerson.redes && (
                  <div className="mt-5 flex flex-row items-center">
                    <a href={selectedPerson.redes.instagram}>
                      <Image
                        alt="icono de correo"
                        className="equipoModal__Redes mr-2"
                        src={iconoInsta}
                      />
                    </a>
                    <a href={selectedPerson.redes.linkedin}>
                      <Image
                        alt="icono de correo"
                        className="equipoModal__Redes"
                        src={iconoLinkedIn}
                      />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};
