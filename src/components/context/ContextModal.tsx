import React, { createContext, ReactNode, useContext, useState } from "react";

interface ContextModalProps {
  children: ReactNode;
}

interface ModalContextType {
  isOpenContacto: boolean;
  isOpenSuccess: boolean;
  openModalContacto: () => void;
  openModalSuccess: () => void;
  closeModalContacto: () => void;
  closeModalSuccess: () => void;
}

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);

export const ModalProvider: React.FC<ContextModalProps> = ({ children }) => {
  const [isOpenContacto, setIsOpenContacto] = useState(false);
  const [isOpenSuccess, setIsOpenSuccess] = useState(false);

  const openModalContacto = () => setIsOpenContacto(true);
  const openModalSuccess = () => setIsOpenSuccess(true);
  const closeModalContacto = () => setIsOpenContacto(false);
  const closeModalSuccess = () => setIsOpenSuccess(false);

  return (
    <ModalContext.Provider
      value={{
        isOpenContacto,
        isOpenSuccess,
        openModalContacto,
        closeModalContacto,
        openModalSuccess,
        closeModalSuccess,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
