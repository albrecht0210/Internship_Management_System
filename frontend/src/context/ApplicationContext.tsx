import { createContext, FC, useContext, useState } from "react";
import { IApplicationContext, IApplicationProvider } from "../@types/application.context";

// Create a context for application-wide state management, initialized with undefined.
export const ApplicationContext = createContext<IApplicationContext | undefined>(undefined);

/**
 * The ApplicationProvider component wraps the entire application with application-wide state management.
 * It provides the necessary functionality for accessing application-specific data.
 */
export const ApplicationProvider: FC<IApplicationProvider> = ({ children }) => {
    // Store the current dark mode state in a boolean variable.
    const [darkMode, setDarkMode] = useState<boolean>(false);

    return (
        <ApplicationContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </ApplicationContext.Provider>
    );
};

/**
 * Custom hook to access the application context within an ApplicationProvider component.
 */
export const useApplicationContext = (): IApplicationContext => {
    const context = useContext(ApplicationContext);

    // If no context is available, throw an error indicating it must be used within an ApplicationProvider component.
    if (!context) {
        throw new Error('useApplicationContext must be used within an ApplicationProvider');
    }
    return context;
};
