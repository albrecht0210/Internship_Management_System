import { SnackbarProvider } from "notistack";
import { CssBaseline } from "@mui/material";
import { ApplicationProvider } from "./context/ApplicationContext";
import { AuthProvider } from "./context/AuthContext";
import AppRouter from "./routes";

function App() {
  return (
    <ApplicationProvider>
      <AuthProvider>
        <SnackbarProvider maxSnack={3}>
          <CssBaseline />
          <AppRouter />
        </SnackbarProvider>
      </AuthProvider>
    </ApplicationProvider>
  );
}

export default App;
