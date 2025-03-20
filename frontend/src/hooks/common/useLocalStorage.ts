import { useState } from "react"

/**
 * A custom hook for managing local storage.
 *
 * @returns {Array} An array containing the stored value and a function to update the stored value.
 */
const useLocalStorage = <T,>(keyName: string, defaultValue: T): [T, (newValue: T | null) => void] => {
    // Initialize a state variable to store the value retrieved from local storage
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const value = localStorage.getItem(keyName);
            return value ? JSON.parse(value) : defaultValue;
        } catch (err) {
            return defaultValue;
        }
    });

    /**
     * Updates the stored value and reflects changes in local storage.
     *
     * @param newValue The new value to store, or null to remove the value from local storage.
     */
    const setValue = (newValue: T | null) => {
        try {
            if (newValue !== null) {
                localStorage.setItem(keyName, JSON.stringify(newValue));
            } else {
                localStorage.removeItem(keyName);
            }
        } catch (err) {
            console.error(err);
        }
        setStoredValue(newValue ?? defaultValue);
    }

    return [storedValue, setValue];
}

export default useLocalStorage;