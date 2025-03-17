import { useState } from "react"

const useLocalStorage = <T,>(keyName: string, defaultValue: T): [T, (newValue: T | null) => void] => {
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const value = localStorage.getItem(keyName);
            return value ? JSON.parse(value) : defaultValue;
        } catch (err) {
            return defaultValue;
        }
    });

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