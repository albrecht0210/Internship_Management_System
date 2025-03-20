import { Button, IconButton, InputAdornment, Paper, Stack, SxProps, TextField, Theme, Typography } from "@mui/material";
import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { validateLoginForm } from "../../../utils/validation";
import useToken from "../../../hooks/token/useToken";
import { ICredentials } from "../../../@types/form";
import { ICredentialsValidation } from "../../../@types/validation.form";
import { DEFAULT_LOGIN_DATA, DEFAULT_LOGIN_VALIDATION, ERROR, SUCCESS } from "../../../utils/constant";
import { useNavigate } from "react-router-dom";

/**
 * Styles for the login form.
 */
const formStyle: SxProps<Theme> = {
    p: 3,
}

/**
 * Style for the submit button.
 */
const submitButtonStyle: SxProps<Theme> = {
    backgroundColor: '#292C52'
}

/**
 * Login card component.
 *
 * This component renders the login form with validation and submission handling.
 */
const LoginCard: FC = () => {
    const { status, message, generateToken } = useToken();
    const navigate = useNavigate();

    const [formData, setFormData] = useState<ICredentials>(DEFAULT_LOGIN_DATA);
    const [errorFlag, setErrorFlag] = useState<ICredentialsValidation>(DEFAULT_LOGIN_VALIDATION);

    const [showPassword, setShowPassword] = useState<boolean>(false);

    useEffect(() => {
        if (status === SUCCESS) {
            navigate("/", { replace: true });
        }
        // eslint-disable-next-line
    }, [status]);

    /**
     * Handles form change events by updating the form data and clearing error flags.
     *
     * @param {ChangeEvent<HTMLInputElement>} e The ChangeEvent of the HTML input element that triggered the event.
     */
    const handleFormChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { id, value } = e.currentTarget;
        setFormData({
            ...formData,
            [id]: value
        });
        setErrorFlag({
            ...errorFlag,
            [id]: false
        });
    }

    /**
     * Toggles the password visibility when clicked.
     */
    const handleClickShowPassword = () => setShowPassword((showPassword) => !showPassword);

    /**
     * Submits the form data and handles validation, token generation, and form reset.
     *
     * @param {FormEvent<HTMLFormElement>} e The FormEvent of the HTML form element that triggered the event.
     * @returns A Promise that resolves when the form submission is complete.
     */
    const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        const validationErrors: ICredentialsValidation = validateLoginForm(formData);

        if (validationErrors.email || validationErrors.password) {
            setErrorFlag((previous) => ({
                ...previous,
                ...validationErrors,
            }));
            setFormData({
                ...formData,
                password: ''
            });
            return;
        }

        await generateToken(formData);
        setFormData(DEFAULT_LOGIN_DATA);
    }

    return (
        <Paper
            sx={formStyle}
            component="form"
            elevation={3}
            onSubmit={handleSubmit}
        >
            <Stack spacing={2.5}>
                <Typography
                    variant="h4"
                    textAlign="center"
                    fontWeight="bold"
                >
                    Login - Ollopa
                </Typography>
                {status === ERROR && <Typography color="error" variant="body1" textAlign="center">{message}</Typography>}
                <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    type="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    error={errorFlag.email}
                    helperText={errorFlag.email ? 'Email is required' : ''}
                />
                <Stack spacing={1}>
                    <TextField
                        id="password"
                        label="Password"
                        variant="outlined"
                        type={showPassword ? 'text' : 'password'}
                        value={formData.password}
                        onChange={handleFormChange}
                        error={errorFlag.password}
                        helperText={errorFlag.password ? 'Password is required' : ''}
                        slotProps={{
                            input: {
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label={
                                                showPassword ? 'hide the password' : 'display the password'
                                            }
                                            onClick={handleClickShowPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }
                        }}
                    />
                    <Typography variant="body2">Forgot Password?</Typography>
                </Stack>
                <Button
                    sx={submitButtonStyle}
                    variant="contained"
                    type="submit"
                >
                    Login
                </Button>
            </Stack>
        </Paper>
    );
}

export default LoginCard;
