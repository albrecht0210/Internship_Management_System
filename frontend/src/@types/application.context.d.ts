import { ReactNode } from "react";

/**
 * An interface representing the application context, which provides a single value indicating the current dark 
 * mode state and an associated setter function.
 */
export interface IApplicationContext {
    darkMode: boolean;
    setDarkMode: (darkMode: boolean) => void;
}

/**
 * An interface representing the application provider component, which is used to wrap a React component with 
 * access to the application context.
 */
export interface IApplicationProvider {
    children: ReactNode;
}

export interface IStatusAction {
    status: string,
    message: string
}
