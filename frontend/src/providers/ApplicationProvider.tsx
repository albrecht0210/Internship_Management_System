import { createContext, FC, ReactNode, useContext, useState } from "react";
import { ApplicationContextType } from "../@types/application";

export const ApplicationContext = createContext<ApplicationContextType | undefined>(undefined);

type ApplicationProviderProps = {
    children: ReactNode;
}

export const ApplicationProvider: FC<ApplicationProviderProps> = ({ children }) => {
    const [darkMode, setDarkMode] = useState<boolean>(false);

    return (
        <ApplicationContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </ApplicationContext.Provider>
    );
};

export const useApplicationContext = (): ApplicationContextType => {
    const context = useContext(ApplicationContext);
    if (!context) {
        throw new Error('useApplicationContext must be used within an ApplicationProvider');
    }
    return context;
};