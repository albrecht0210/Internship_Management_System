export interface ILoginFormData {
    email: string;
    password: string;
}

export interface IValidationLoginError {
    email: boolean;
    password: boolean;
}