import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSideBarOpen, SetSideBarOpen] = useState(false);

  const [isModalOpen, SetModalOpen] = useState(false);

  const openSidebar = () => {
    SetSideBarOpen(true);
  };

  const closeSideBar = () => {
    SetSideBarOpen(false);
  };

  const openModal = () => {
    SetModalOpen(true);
  };

  const closeModal = () => {
    SetModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        isSideBarOpen,
        openSidebar,
        closeSideBar,
        openModal,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
