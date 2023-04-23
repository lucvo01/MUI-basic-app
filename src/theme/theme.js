import CssBaseline from "@mui/material/CssBaseline";
import {
  // alpha,
  createTheme,
  ThemeProvider as MUIThemeProvider
} from "@mui/material/styles";

function ThemeProvider({ children }) {
  const darktheme = createTheme({
    palette: {
      mode: "dark"
    }
  });
  return (
    <MUIThemeProvider theme={darktheme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}
export default ThemeProvider;
