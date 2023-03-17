import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./ThemeConfig";

import AppRouter from "./Router/AppRouter";
import { useSelector } from "react-redux";

function App() {
  const { user } = useSelector((state) => state.authSlice);

  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        {user ? (
          <Navbar>
            <AppRouter />
          </Navbar>
        ) : (
          <AppRouter />
        )}
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
