"use client";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

import contacto_img from "../../assets/images/contacto-bg.png";

import { useTranslations } from "next-intl";
import { useContext } from "react";
import { ModalContext } from "../context/ContextModal";

export const ModalContacto = () => {
  const t = useTranslations("ModalContacto");
  const modalCtx = useContext(ModalContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("https://api-visorurbano.jalisco.gob.mx/contactFormLanding", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          nombre: e.currentTarget.nombre.value,
          pais: e.currentTarget.pais.value,
          ciudad: e.currentTarget.ciudad.value,
          mail: e.currentTarget.mail.value,
          telefono: e.currentTarget.telefono.value,
          mensaje: e.currentTarget.mensaje.value,
          funcionario: e.currentTarget.funcionario.value,
          cargo: e.currentTarget.cargo.value,
          dependencia: e.currentTarget.dependencia.value,
          estado: e.currentTarget.estado.value,
        },
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(() => {
        modalCtx?.openModalSuccess();
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        modalCtx?.closeModalContacto();
      });
  };
  return (
    <Dialog
      open={modalCtx?.isOpenContacto}
      onClose={() => modalCtx?.closeModalContacto()}
      className="relative z-10"
    >
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
                onClick={() => modalCtx?.closeModalContacto()}
                /* TODO: Cambiar a text-white cuando este alineado */
                className="rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="sr-only">{t("closeBtn")}</span>
                <XMarkIcon aria-hidden="true" className="size-8 text-white" />
              </button>
            </div>
            <div className="flex flex-col grid grid-cols-10 sm:grid-cols-12 justify-between">
              <div className="grid col-span-12 sm:col-span-7 flex flex-col items-center text-center py-4 sm:py-10">
                {/* TITULO */}
                <h2 className="modalContacto__Titulo">
                  {t.rich("header", {
                    br: () => <br />,
                  })}
                </h2>

                {/* FORM */}
                <div className="justify-self-center px-2 sm:px-0 modalContacto__Izquierda">
                  <form
                    className="grid grid-cols-10 sm:grid-cols-12 gap-1 sm:gap-4"
                    onSubmit={handleSubmit}
                  >
                    {/* NOMBRE COMPLETO */}
                    <div className="col-span-10 sm:col-span-12 mt-5">
                      <label
                        htmlFor="nombre"
                        className="text-left block text-sm/6 font-medium text-[#545F65] izquierda__Labels"
                      >
                        {t("name")}
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-[#DFE8EB] focus-within:ring-2 focus-within:ring-inset focus-within:ring-VerdeBase">
                          <input
                            id="nombre"
                            required
                            name="nombre"
                            type="text"
                            placeholder=""
                            autoComplete="nombre"
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                          />
                        </div>
                      </div>
                    </div>
                    {/* FUNCIONARIO */}
                    <div className="col-span-10 sm:col-span-12">
                      <label
                        htmlFor="funcionario"
                        className="text-left block text-sm/6 font-medium text-[#545F65] izquierda__Labels"
                      >
                        {t("funcionario")}
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-[#DFE8EB] focus-within:ring-2 focus-within:ring-inset focus-within:ring-VerdeBase">
                          <input
                            id="funcionario"
                            required
                            name="funcionario"
                            type="text"
                            placeholder=""
                            autoComplete="funcionario"
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                          />
                        </div>
                      </div>
                    </div>
                    {/* DEPENDENCIA */}
                    <div className="col-span-10 sm:col-span-12">
                      <label
                        htmlFor="dependencia"
                        className="text-left block text-sm/6 font-medium text-[#545F65] izquierda__Labels"
                      >
                        {t("dependencia")}
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-[#DFE8EB] focus-within:ring-2 focus-within:ring-inset focus-within:ring-VerdeBase">
                          <input
                            id="dependencia"
                            required
                            name="dependencia"
                            type="text"
                            placeholder=""
                            autoComplete="dependencia"
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                          />
                        </div>
                      </div>
                    </div>
                    {/* CARGO */}
                    <div className="col-span-10 sm:col-span-6">
                      <label
                        htmlFor="cargo"
                        className="text-left block text-sm/6 font-medium text-[#545F65] izquierda__Labels"
                      >
                        {t("cargo")}
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-[#DFE8EB] focus-within:ring-2 focus-within:ring-inset focus-within:ring-VerdeBase">
                          <input
                            id="cargo"
                            required
                            name="cargo"
                            type="text"
                            placeholder=""
                            autoComplete="cargo"
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                          />
                        </div>
                      </div>
                    </div>
                    {/* ESTADO */}
                    <div className="col-span-10 sm:col-span-6">
                      <label
                        htmlFor="estado"
                        className="text-left block text-sm/6 font-medium text-[#545F65] izquierda__Labels"
                      >
                        {t("estado")}
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-[#DFE8EB] focus-within:ring-2 focus-within:ring-inset focus-within:ring-VerdeBase">
                          <input
                            id="estado"
                            required
                            name="estado"
                            type="text"
                            placeholder=""
                            autoComplete="estado"
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                          />
                        </div>
                      </div>
                    </div>
                    {/* PAIS */}
                    <div className="col-span-10 sm:col-span-6">
                      <label
                        htmlFor="pais"
                        className="text-left block text-sm/6 font-medium text-[#545F65] izquierda__Labels"
                      >
                        {t("country")}
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-[#DFE8EB] focus-within:ring-2 focus-within:ring-inset focus-within:ring-VerdeBase">
                          <input
                            id="pais"
                            required
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
                    <div className="col-span-10 sm:col-span-6">
                      <label
                        htmlFor="ciudad"
                        className="text-left block text-sm/6 font-medium text-[#545F65] izquierda__Labels"
                      >
                        {t("city")}
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-[#DFE8EB] focus-within:ring-2 focus-within:ring-inset focus-within:ring-VerdeBase">
                          <input
                            id="ciudad"
                            required
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
                    <div className="col-span-10 sm:col-span-6">
                      <label
                        htmlFor="mail"
                        className="text-left block text-sm/6 font-medium text-[#545F65] izquierda__Labels"
                      >
                        {t("email")}
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-[#DFE8EB] focus-within:ring-2 focus-within:ring-inset focus-within:ring-VerdeBase">
                          <input
                            id="mail"
                            required
                            name="mail"
                            type="text"
                            placeholder=""
                            autoComplete="mail"
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                          />
                        </div>
                      </div>
                    </div>
                    {/* CELULAR */}
                    <div className="col-span-10 sm:col-span-6">
                      <label
                        htmlFor="telefono"
                        className="text-left block text-sm/6 font-medium text-[#545F65] izquierda__Labels"
                      >
                        {t("phone")}
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-[#DFE8EB] focus-within:ring-2 focus-within:ring-inset focus-within:ring-VerdeBase">
                          <input
                            id="telefono"
                            required
                            name="telefono"
                            type="text"
                            placeholder=""
                            autoComplete="telefono"
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                          />
                        </div>
                      </div>
                    </div>
                    {/* MENSAJE */}
                    <div className="col-span-10 sm:col-span-12">
                      <label
                        htmlFor="mensaje"
                        className="text-left block text-sm/6 font-medium text-[#545F65] izquierda__Labels"
                      >
                        {t("message")}
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
                    <div className="col-span-10 sm:col-span-12 flex flex-col items-center mt-5">
                      <button className="btn-primary text-center flex-col items-center modalContacto__Boton">
                        {t("send")}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="grid col-span-12 sm:col-span-5 flex flex-col items-center text-center">
                {/* INFO LATERAL */}
                <div className="bg-gradient-to-t from-dark to-primary content-center modalDerecha__Gradiente">
                  <p className="flex flex-row text-white justify-center text-center modalDerecha__Texto">
                    {t("rightText")}
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
