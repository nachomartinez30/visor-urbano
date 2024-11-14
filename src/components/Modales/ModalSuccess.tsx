import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/20/solid";

import Image from "next/image";
import success_pic from "../../assets/images/successModalPic.svg";
import { useContext } from "react";
import { ModalContext } from "../context/ContextModal";

export const ModalSuccess = () => {
  const modalCtx = useContext(ModalContext);
  return (
    <Dialog
      open={modalCtx?.isOpenSuccess}
      onClose={() => modalCtx?.closeModalSuccess()}
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
            className="h-[585px] w-[544px] relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
              <button
                type="button"
                onClick={() => modalCtx?.closeModalSuccess()}
                className="rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="sr-only">Close</span>
                <XMarkIcon aria-hidden="true" className="size-8" />
              </button>
            </div>
            <div className="h-full bg-gradient-to-t from-dark to-primary grid-flow-row">
              <p className=" text-white">
                ¡Gracias por tu mensaje! en breve nos comunicaremos contigo
              </p>
              <Image alt="success" src={success_pic} className="h-48 w-auto" />
              <button
                className="btn-primary"
                onClick={() => modalCtx?.closeModalSuccess()}
              >
                Aceptar
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};
