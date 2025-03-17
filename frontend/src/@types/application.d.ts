import { ReactNode } from "react";

export interface IApplicationContext {
    darkMode: boolean;
    setDarkMode: (darkMode: boolean) => void;
}

export interface IApplicationProvider {
    children: ReactNode;
}
