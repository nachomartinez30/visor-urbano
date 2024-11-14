"use client";
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { PhoneIcon, PlayCircleIcon } from "@heroicons/react/20/solid";
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { useContext } from "react";
import logo from "../assets/images/logo_visor_header.png";
import { ModalContacto } from "./Modales/ModalContacto";
import { ModalSuccess } from "./Modales/ModalSuccess";
import { IdiomasIcon } from "./icons/IdiomasIcon";
import { ModalContext } from "./context/ContextModal";

/* TODO: quitar products por las options  */
const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

export const Header = () => {
  const modalCtx = useContext(ModalContext);

  return (
    <header className="bg-gradient-to-t from-dark to-primary text-white fixed top-0 w-full z-10">
      <ModalContacto />
      <ModalSuccess />
      <nav
        aria-label="Global"
        className="mx-auto flex justify-between items-center p-6 navVisor"
      >
        <div className="flex">
          <a href="#">
            <Image alt="logo" className="h-14 w-auto" src={logo} />
          </a>
        </div>
        <PopoverGroup className="flex items-center">
          <a
            href="#nuestra_historia"
            className="text-sm/6 GRegular navVisor__link"
          >
            Historia
          </a>
          <a href="#noticias" className="text-sm/6 GRegular navVisor__link">
            Noticias
          </a>
          <a href="#ciudades" className="text-sm/6 GRegular navVisor__link">
            Explora Visor Urbano
          </a>
          <Popover className="relative">
            <PopoverButton className="btn-primary navVisor__link">
              Implementar por mi cuenta
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon
                        aria-hidden="true"
                        className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                      />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold ">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold  hover:bg-gray-100"
                  >
                    <item.icon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none text-gray-400"
                    />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
          <button
            onClick={() => modalCtx?.openModalContacto()}
            className="btn-primary navVisor__link"
          >
            Solicitar ayuda para implementar
          </button>
          <button className="flex items-center rounded-full">
            <IdiomasIcon />
          </button>
        </PopoverGroup>
      </nav>
    </header>
  );
};
