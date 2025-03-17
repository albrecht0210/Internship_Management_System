import Cookies from "js-cookie";
import { useState } from "react";

const useCookieStorage = (keyName: string, defaultValue: any): [string, (newValue: string | null) => void] => {
    const [storedValue, setStoredValue] = useState<string>(() => {
        try {
            const value = Cookies.get(keyName);
            return value ?? defaultValue;
        } catch (err) {
            return defaultValue;
        }
    });

    const setValue = (newValue: string | null): void => {
        try {
            if (newValue) {
                Cookies.set(keyName, newValue);
            } else {
                Cookies.remove(keyName);
            }
        } catch (err) {
            console.error(err);
        }
        setStoredValue(newValue ?? "");
    };

    return [storedValue, setValue];
}

export default useCookieStorage;