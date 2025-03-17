import { createContext, FC, ReactNode, useContext, useState } from "react";
import { IApplicationContext, IApplicationProvider } from "../@types/application";

export const ApplicationContext = createContext<IApplicationContext | undefined>(undefined);

export const ApplicationProvider: FC<IApplicationProvider> = ({ children }) => {
    const [darkMode, setDarkMode] = useState<boolean>(false);

    return (
        <ApplicationContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </ApplicationContext.Provider>
    );
};

export const useApplicationContext = (): IApplicationContext => {
    const context = useContext(ApplicationContext);
    if (!context) {
        throw new Error('useApplicationContext must be used within an ApplicationProvider');
    }
    return context;
};
