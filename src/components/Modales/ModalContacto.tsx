'use client'
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

import contacto_img from "../../assets/images/contacto-bg.png";
import { ModalProps } from "../types/modal.interface";

export const ModalContacto = ({ open, setOpen }: ModalProps) => {
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
            className="h-[686.52px] w-[1212px] relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
              <button
                type="button"
                onClick={() => setOpen(false)}
                /* TODO: Cambiar a text-white cuando este alineado */
                className="rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="sr-only">Close</span>
                <XMarkIcon aria-hidden="true" className="size-8" />
              </button>
            </div>
            {/* TITULO */}
            <div>
              <h2 className="main-title">
                Contáctanos para obtener Visor Urbano en tu ciudad
              </h2>
            </div>
            {/* FORM */}
            <div className="w-[200px]">
              <form>
                {/* NOMBRE COMPLETO */}
                <div className="sm:col-span-4">
                  <label
                    htmlFor="nombre"
                    className="block text-sm/6 font-medium text-[#545F65]"
                  >
                    Nombre completo*
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-[#DFE8EB] focus-within:ring-2 focus-within:ring-inset focus-within:ring-VerdeBase sm:max-w-md">
                      <input
                        id="nombre"
                        name="nombre"
                        type="text"
                        placeholder=""
                        autoComplete="nombre"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                      />
                    </div>
                  </div>
                </div>
                {/* PAIS */}
                <div className="sm:col-span-4">
                  <label
                    htmlFor="pais"
                    className="block text-sm/6 font-medium text-[#545F65]"
                  >
                    País
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-[#DFE8EB] focus-within:ring-2 focus-within:ring-inset focus-within:ring-VerdeBase sm:max-w-md">
                      <input
                        id="pais"
                        name="pais"
                        type="text"
                        placeholder=""
                        autoComplete="pais"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                      />
                    </div>
                  </div>
                </div>
                {/* CIUDAD */}
                <div className="sm:col-span-4">
                  <label
                    htmlFor="ciudad"
                    className="block text-sm/6 font-medium text-[#545F65]"
                  >
                    Ciudad
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-[#DFE8EB] focus-within:ring-2 focus-within:ring-inset focus-within:ring-VerdeBase sm:max-w-md">
                      <input
                        id="ciudad"
                        name="ciudad"
                        type="text"
                        placeholder=""
                        autoComplete="ciudad"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                      />
                    </div>
                  </div>
                </div>
                {/* CORREO */}
                <div className="sm:col-span-4">
                  <label
                    htmlFor="correo"
                    className="block text-sm/6 font-medium text-[#545F65]"
                  >
                    Correo electrónico
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-[#DFE8EB] focus-within:ring-2 focus-within:ring-inset focus-within:ring-VerdeBase sm:max-w-md">
                      <input
                        id="correo"
                        name="correo"
                        type="text"
                        placeholder=""
                        autoComplete="correo"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                      />
                    </div>
                  </div>
                </div>
                {/* CELULAR */}
                <div className="sm:col-span-4">
                  <label
                    htmlFor="tel_contacto"
                    className="block text-sm/6 font-medium text-[#545F65]"
                  >
                    Celular o teléfono de contacto
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-[#DFE8EB] focus-within:ring-2 focus-within:ring-inset focus-within:ring-VerdeBase sm:max-w-md">
                      <input
                        id="tel_contacto"
                        name="tel_contacto"
                        type="text"
                        placeholder=""
                        autoComplete="tel_contacto"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                      />
                    </div>
                  </div>
                </div>
                {/* MENSAJE */}
                <div className="sm:col-span-4">
                  <label
                    htmlFor="mensaje"
                    className="block text-sm/6 font-medium text-[#545F65]"
                  >
                    Mensaje
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-[#DFE8EB] focus-within:ring-2 focus-within:ring-inset focus-within:ring-VerdeBase sm:max-w-md">
                      <textarea
                        id="mensaje"
                        name="mensaje"
                        rows={3}
                        placeholder=""
                        autoComplete="mensaje"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                      />
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn-primary">
                  Enviar
                </button>
              </form>
            </div>
            {/* INFO LATERAL */}
            <div className="bg-gradient-to-t from-dark to-primary h-full w-[544.37px]">
              <p className="flex flex-row text-white justify-center text-center">
                Replicar Visor Urbano es un proceso sencillo ya que, además de
                ser una plataforma intuitiva y fácil de usar, puede ser adaptada
                de acuerdo a las necesidades, retos y contexto de cualquier
                ciudad
              </p>
              <Image
                src={contacto_img}
                alt="contacto"
                width={409.3}
                height={222.33}
              />
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};
