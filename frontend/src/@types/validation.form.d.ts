/**
 * An interface representing validation errors for login form data, which includes boolean flags indicating 
 * whether each field has an error.
 */
export interface ICredentialsValidation {
    email: boolean;
    password: boolean;
}
