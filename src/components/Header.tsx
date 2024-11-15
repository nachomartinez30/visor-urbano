"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  PhoneIcon,
  PlayCircleIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useContext } from "react";
import logo from "../assets/images/logo_visor_header.png";
import { ModalContacto } from "./Modales/ModalContacto";
import { ModalSuccess } from "./Modales/ModalSuccess";
import { ModalContext } from "./context/ContextModal";
import { IdiomasIcon } from "./icons/IdiomasIcon";
import Link from "next/link";

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

function classNames(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export const Header = () => {
  const t = useTranslations("Header");
  const tGlobal = useTranslations("global");
  const navigation = [
    { name: t("home"), href: "#home", current: false },
    { name: t("option1"), href: "#nuestra_historia", current: false },
    { name: t("option2"), href: "#noticias", current: false },
    { name: t("option3"), href: "#ciudades", current: false },
  ];

  const modalCtx = useContext(ModalContext);

  return (
    <header className="bg-gradient-to-t from-dark to-primary text-white fixed top-0 fullWidth z-10">
      <ModalContacto />
      <ModalSuccess />
      <Disclosure
        as="nav"
        className="mx-auto flex justify-between p-2 sm:p-6 navVisor"
      >
        <div className="flex items-center navVisor__Display">
          <div className="relative flex h-16 items-center justify-self-start">
            <div className="flex flex-1 items-center justify-self-start sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <a href="#">
                  <Image alt="logo" className="h-14 w-auto" src={logo} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center ">
          <div className="flex h-16 items-center justify-start">
            <div className="inset-y-0 items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group inline-flex items-center justify-center rounded-md p-2 text-white-400 hover:bg-verdeFondoIconos hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white navVisor__Control--nav">
                <span className="" />
                <span className="sr-only">Menú</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block size-6 group-data-[open]:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden size-6 group-data-[open]:block"
                />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        item.current
                          ? "navVisor__link"
                          : "hover:bg-VerdeFondosIconos navVisor__link",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-6 sm:px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current ? "bg-gray-900" : "hover:bg-VerdeFondosIconos",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}

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
                          <p className="mt-1 text-gray-600">
                            {item.description}
                          </p>
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
                className="btn-primary mt-5 navVisor__link"
              >
                Solicitar ayuda para implementar
              </button>
            </div>
          </DisclosurePanel>

          <Popover className="relative navVisor__Display">
            <PopoverButton className="btn-primary navVisor__link">
              {tGlobal("button1")}
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
            className="btn-primary navVisor__link navVisor__Display"
          >
            {tGlobal("button2")}
          </button>

          <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Profile dropdown */}
            <Menu as="div" className="ml-3">
              <div>
                <MenuButton className="flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 navVisor__Control--idioma">
                  <span className="" />
                  <span className="sr-only">Idiomas</span>
                  <IdiomasIcon />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <Link
                    href="/es"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    {tGlobal("spanish")}
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    href="/en"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    {tGlobal("english")}
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    href="/pt"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    {tGlobal("portuguese")}
                  </Link>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </Disclosure>
    </header>
  );
};
