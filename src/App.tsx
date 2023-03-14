import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { LigthTheme } from "./shared/themes";

export const App = () => {
  return (
    <BrowserRouter>
    <ThemeProvider theme={LigthTheme}>
      <AppRoutes />
    </ThemeProvider>
    </BrowserRouter>
  );
}
