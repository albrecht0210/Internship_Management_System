import { ILoginFormData, IValidationLoginError } from "../@types/login";

export const validateLoginForm = (formData: ILoginFormData): IValidationLoginError => {
    const errors: IValidationLoginError = {
        email: false,
        password: false
    };

    if (!formData.email) errors.email = true;
    if (!formData.password) errors.password = true;

    return errors;
}