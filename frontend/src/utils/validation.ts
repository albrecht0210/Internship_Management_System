import { ICredentials } from "../@types/form";
import { ICredentialsValidation } from "../@types/validation.form";

export const validateLoginForm = (formData: ICredentials): ICredentialsValidation => {
    const errors: ICredentialsValidation = {
        email: false,
        password: false
    };

    if (!formData.email) errors.email = true;
    if (!formData.password) errors.password = true;

    return errors;
}