import { Button, IconButton, InputAdornment, Paper, Stack, SxProps, TextField, Theme, Typography } from "@mui/material";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import { ILoginFormData, IValidationLoginError } from "../../../@types/login";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { validateLoginForm } from "../../../utils/validation";

const formStyle: SxProps<Theme> = {
    p: 3,
}

const submitButtonStyle: SxProps<Theme> = {
    backgroundColor: '#292C52'
}

const defaultLoginData: ILoginFormData = {
    email: '',
    password: ''
};

const defaultLoginError: IValidationLoginError = {
    email: false,
    password: false
}

const LoginCard: FC = () => {
    const [formData, setFormData] = useState<ILoginFormData>(defaultLoginData);
    const [errorFlag, setErrorFlag] = useState<IValidationLoginError>(defaultLoginError);

    const [showPassword, setShowPassword] = useState<boolean>(false);

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

    const handleClickShowPassword = () => setShowPassword((showPassword) => !showPassword);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        const validationErrors: IValidationLoginError = validateLoginForm(formData);

        const validationKeys = Object.keys(validationErrors);
        if (validationKeys.length !== 0) {
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

        setFormData(defaultLoginData);
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