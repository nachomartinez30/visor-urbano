"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";

import { useTranslations } from "next-intl";
import Image from "next/image";
import {
  startTransition,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import logo from "../assets/images/logo_visor_header.png";
import { ModalContacto } from "./Modales/ModalContacto";
import { ModalSuccess } from "./Modales/ModalSuccess";
import { ModalContext } from "./context/ContextModal";
import { IdiomasIcon } from "./icons/IdiomasIcon";
import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/services/locale";
import Link from "next/link";

function classNames(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export const Header = () => {
  const t = useTranslations("Header");
  const [domLoaded, setDomLoaded] = useState<boolean>(false);
  const menuItems = [
    {
      description: t("submenu.option1"),
      href: "/como_empezar",
    },
    {
      description: t("submenu.option2"),
      href: "/paso_a_paso",
    },
    {
      description: t("submenu.option3"),
      href: "/recursos",
    },
    {
      description: t("submenu.option4"),
      href: "/codigo_abierto",
    },
    {
      description: t("submenu.option5"),
      href: "/documentacion",
    },
  ];
  const tGlobal = useTranslations("global");
  const navigation = [
    { name: t("option1"), href: "/#nuestra_historia", current: false },
    { name: t("option2"), href: "/#noticias", current: false },
    { name: t("option3"), href: "/#ciudades", current: false },
  ];

  const modalCtx = useContext(ModalContext);

  const handleLangChange = (value: string) => {
    const locale = value as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  };

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const buttonARef = useRef<HTMLButtonElement>(null);

  const handleButtonClickB = () => {
    if (buttonARef.current) {
      buttonARef.current.click();
    }
  };

  return (
    <>
      {domLoaded && (
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
                    <Link href="/">
                      <Image alt="logo" className="h-14 w-auto" src={logo} />
                    </Link>
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
                      className="hidden size-8 group-data-[open]:block"
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
                <div className="space-y-1 px-6 sm:px-2 pb-3 pt-14 sm:pt-2">
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
                        <div
                          onClick={() => handleLangChange("es")}
                          className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                        >
                          {tGlobal("spanish")}
                        </div>
                      </MenuItem>
                      <MenuItem>
                        <div
                          onClick={() => handleLangChange("en")}
                          className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                        >
                          {tGlobal("english")}
                        </div>
                      </MenuItem>
                      <MenuItem>
                        <div
                          onClick={() => handleLangChange("pt")}
                          className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                        >
                          {tGlobal("portuguese")}
                        </div>
                      </MenuItem>
                    </MenuItems>
                  </Menu>
                  {navigation.map((item) => (
                    <DisclosureButton
                      key={item.name}
                      as="a"
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        item.current
                          ? "bg-gray-900"
                          : "hover:bg-VerdeFondosIconos",
                        "block rounded-md sm:px-3 py-2 text-base font-medium"
                      )}
                    >
                      {item.name}
                    </DisclosureButton>
                  ))}

                  <button
                    onClick={() => modalCtx?.openModalContacto()}
                    className="btn-primary mt-5 navVisor__link"
                  >
                    {tGlobal("button2")}
                  </button>
                </div>
              </DisclosurePanel>

              <Menu as="div" className="relative navVisor__Display">
                <MenuButton
                  ref={buttonARef}
                  className="flex navVisor__link justify-center align-middle"
                >
                  {tGlobal("button1")}
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="size-5 ml-2 "
                  />
                </MenuButton>
                <MenuItems className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in">
                  <div className="p-4">
                    {menuItems.map((item) => (
                      <MenuItem key={item.description}>
                        <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
                          <div className="flex-auto">
                            <Link
                              onClick={handleButtonClickB}
                              href={item.href}
                              className="mt-1 text-gray-600"
                            >
                              {item.description}
                            </Link>
                          </div>
                        </div>
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Menu>
              <button
                onClick={() => modalCtx?.openModalContacto()}
                className="btn-primary navVisor__link navVisor__Display"
              >
                {tGlobal("button2")}
              </button>

              <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 hidden sm:block">
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
                      <div
                        onClick={() => handleLangChange("es")}
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                      >
                        {tGlobal("spanish")}
                      </div>
                    </MenuItem>
                    <MenuItem>
                      <div
                        onClick={() => handleLangChange("en")}
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                      >
                        {tGlobal("english")}
                      </div>
                    </MenuItem>
                    <MenuItem>
                      <div
                        onClick={() => handleLangChange("pt")}
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                      >
                        {tGlobal("portuguese")}
                      </div>
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </Disclosure>
        </header>
      )}
    </>
  );
};
