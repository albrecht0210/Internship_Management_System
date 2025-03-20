import Cookies from "js-cookie";
import { useState } from "react";

/**
 * A custom hook for managing cookie storage.
 *
 * @returns {Array} An array containing the stored value and a function to update the stored value.
 */
const useCookieStorage = (keyName: string, defaultValue: any): [string, (newValue: string | null) => void] => {
    // Initialize a state variable to store the value retrieved from cookies
    const [storedValue, setStoredValue] = useState<string>(() => {
        try {
            const value = Cookies.get(keyName);
            return value ?? defaultValue;
        } catch (err) {
            return defaultValue;
        }
    });

    /**
     * Updates the stored value and reflects changes in the cookies.
     *
     * @param newValue The new value to store, or null to remove the value from cookies.
     */
    const setValue = (newValue: string | null,): void => {
        try {
            if (newValue) {
                Cookies.set(keyName, newValue, {

                });
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