import { useState } from "react";
import HomePage from "./components/HomePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const queryClient = new QueryClient();

//MUI theme configuration. not in css
const theme = createTheme({
  palette: {
    background: {
      default: "#EFECE3",
      paper: "#FAFAF8",
    },
    primary: {
      main: "#4A70A9",
      light: "#8FABD4",
      dark: "#2D4A6F",
    },
    secondary: {
      main: "#8FABD4",
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: { fontFamily: "'Nunito', sans-serif" },
    h2: { fontFamily: "'Nunito', sans-serif" },
    h3: { fontFamily: "'Nunito', sans-serif" },
    h4: { fontFamily: "'Nunito', sans-serif" },
    h5: { fontFamily: "'Nunito', sans-serif" },
    h6: { fontFamily: "'Nunito', sans-serif" },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <HomePage />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
