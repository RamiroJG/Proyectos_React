import { createContext, useContext, useState } from "react";

const AppContext = createContext()



export const AppProvider = ({ children }) => {
    const [isSiderbarOpen, setIsSiderbarOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openSidebar = () => {
        setIsSiderbarOpen(true);
    }
    const closeSidebar = () => {
        setIsSiderbarOpen(false);
    }

    const openModal = () => {
        setIsModalOpen(true);
     }
    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
        <AppContext.Provider 
            value={{ 
                isSiderbarOpen, 
                isModalOpen, 
                openModal, 
                openSidebar, 
                closeModal, 
                closeSidebar 
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext)
