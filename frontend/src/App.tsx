import { SnackbarProvider } from "notistack";
import { CssBaseline } from "@mui/material";
import { ApplicationProvider } from "./providers/ApplicationProvider";
import UrlRouter from "./routes";

function App() {
  return (
    <ApplicationProvider>
      <SnackbarProvider maxSnack={3}>
        <CssBaseline />
        <UrlRouter />
      </SnackbarProvider>
    </ApplicationProvider>
  );
}

export default App;
