import { IStatusAction } from "../@types/application.context";
import { ICredentials } from "../@types/form";
import { ICredentialsValidation } from "../@types/validation.form";

// Status for Hooks
export const IDLE = "IDLE";
export const LOADING = "LOADING";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";

// Axios Responses
// Error
export const ERROR_400 = "Hmm, something seems off with your request. Could you double-check and try again?";
export const ERROR_401_SESSION_EXPIRED = "Your tokens has expired. Please log in again to continue.";
export const ERROR_401_LOGIN = "It seems there was an issue logging you in. Please check your credentials and try again.";
export const ERROR_403 = "You don’t have permission to access this resource. Please contact support if you believe this is a mistake.";
export const ERROR_404 = "We couldn’t find what you’re looking for. Maybe check the URL or try searching again?";
export const ERROR_409 = "There’s a conflict with your request. Please review the data and try again.";
export const ERROR_500 = "Oops, something went wrong on our end. We’re working on it—please try again in a bit.";

// Success
export const SUCCESS_200 = "Your request was successful. Everything went as expected.";
export const SUCCESS_201 = "The resource was successfully created.";
export const SUCCESS_204 = "The request was successful, but there is no content to return.";

// Response Code map
export const STATUS_ACTIONS: Record<number, IStatusAction> = {
    200: { status: SUCCESS, message: SUCCESS_200 },
    201: { status: SUCCESS, message: SUCCESS_201 },
    204: { status: SUCCESS, message: SUCCESS_204 },
    400: { status: ERROR, message: ERROR_400 },
    401: { status: ERROR, message: ERROR_401_SESSION_EXPIRED },
    403: { status: ERROR, message: ERROR_403 },
    404: { status: ERROR, message: ERROR_404 },
    500: { status: ERROR, message: ERROR_500 }
};

/**
 * Default login data and error state.
 */
export const DEFAULT_LOGIN_DATA: ICredentials = {
    email: '',
    password: ''
};

export const DEFAULT_LOGIN_VALIDATION: ICredentialsValidation = {
    email: false,
    password: false
}

// ROLE CONSTANT
export const INTERN_ROLE = 'intern';
export const STAFF_ROLE = 'staff';
export const ADMIN_ROLE = 'admin';