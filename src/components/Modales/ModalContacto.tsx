"use client";
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
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 contactoModal__Bloque"
          >
            <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
              <button
                type="button"
                onClick={() => setOpen(false)}
                /* TODO: Cambiar a text-white cuando este alineado */
                className="rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="sr-only">Cerrar</span>
                <XMarkIcon aria-hidden="true" className="size-8" />
              </button>
            </div>
            <div className="flex flex-col grid grid-cols-12 justify-between">
              <div className="grid col-span-7 flex flex-col items-center text-center py-10">
                {/* TITULO */}
                <h2 className="modalContacto__Titulo">
                  Contáctanos para obtener <br/>Visor Urbano en tu ciudad
                </h2>

                {/* FORM */}
                <div className="justify-self-center modalContacto__Izquierda">
                  <form className="grid grid-cols-12 gap-4">
                    {/* NOMBRE COMPLETO */}
                    <div className="sm:col-span-12 mt-10">
                      <label
                        htmlFor="nombre"
                        className="text-left block text-sm/6 font-medium text-[#545F65] izquierda__Labels"
                      >
                        Nombre completo*
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-[#DFE8EB] focus-within:ring-2 focus-within:ring-inset focus-within:ring-VerdeBase">
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
                    <div className="sm:col-span-6">
                      <label
                        htmlFor="pais"
                        className="text-left block text-sm/6 font-medium text-[#545F65] izquierda__Labels"
                      >
                        País
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-[#DFE8EB] focus-within:ring-2 focus-within:ring-inset focus-within:ring-VerdeBase">
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
                    <div className="sm:col-span-6">
                      <label
                        htmlFor="ciudad"
                        className="text-left block text-sm/6 font-medium text-[#545F65] izquierda__Labels"
                      >
                        Ciudad
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-[#DFE8EB] focus-within:ring-2 focus-within:ring-inset focus-within:ring-VerdeBase">
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
                    <div className="sm:col-span-6">
                      <label
                        htmlFor="correo"
                        className="text-left block text-sm/6 font-medium text-[#545F65] izquierda__Labels"
                      >
                        Correo electrónico
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-[#DFE8EB] focus-within:ring-2 focus-within:ring-inset focus-within:ring-VerdeBase">
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
                    <div className="sm:col-span-6">
                      <label
                        htmlFor="tel_contacto"
                        className="text-left block text-sm/6 font-medium text-[#545F65] izquierda__Labels"
                      >
                        Celular o teléfono de contacto
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-[#DFE8EB] focus-within:ring-2 focus-within:ring-inset focus-within:ring-VerdeBase">
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
                    <div className="sm:col-span-12">
                      <label
                        htmlFor="mensaje"
                        className="text-left block text-sm/6 font-medium text-[#545F65] izquierda__Labels"
                      >
                        Mensaje
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-[#DFE8EB] focus-within:ring-2 focus-within:ring-inset focus-within:ring-VerdeBase">
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
                    <div className="sm:col-span-12 flex flex-col items-center mt-10">
                      <button className="btn-primary text-center flex-col items-center modalContacto__Boton">Enviar</button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="grid col-span-5 flex flex-col items-center text-center">
                {/* INFO LATERAL */}
                <div className="bg-gradient-to-t from-dark to-primary content-center modalDerecha__Gradiente">
                  <p className="flex flex-row text-white justify-center text-center modalDerecha__Texto">
                    Replicar Visor Urbano es un proceso sencillo ya que, además de
                    ser una plataforma intuitiva y fácil de usar, puede ser
                    adaptada de acuerdo a las necesidades, retos y contexto de
                    cualquier ciudad
                  </p>
                  <Image
                    src={contacto_img}
                    alt="contacto"
                    className="justify-self-center"
                    width={409.3}
                    height={222.33}
                  />
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};