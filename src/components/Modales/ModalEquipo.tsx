import React from "react";
import { ModalProps } from "./modal.interface";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { Person } from "../types/person.interface";
import Image from "next/image";

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
            className="h-[557px] w-[1212px] relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-md text-[#CFD4D6] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="sr-only">Close</span>
                <XMarkIcon aria-hidden="true" className="size-8" />
              </button>
            </div>
            <div className="flex flex-col justify-center items-center w-1/2">
              <Image
                alt={selectedPerson.nombre}
                className="rounded-full w-48 h-48"
                src={selectedPerson.imageUrl}
                height={300}
                width={300}
              />
              <div className="font-bold">{selectedPerson.nombre}</div>
              <div className="text-VerdeTextos">{selectedPerson.rol}</div>
              <p>{selectedPerson.descripcion}</p>
              <div>{selectedPerson.redes.instagram}</div>
              <div>{selectedPerson.redes.linkedin}</div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};
