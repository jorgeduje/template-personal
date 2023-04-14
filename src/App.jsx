import { BrowserRouter, HashRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./ThemeConfig";

import AppRouter from "./Router/AppRouter";
import { useSelector } from "react-redux";
import Navbar from "./components/layout/Navbar/Navbar";

function App() {
  const { accessToken } = useSelector((state) => state.authSlice);

  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        {accessToken ? (
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
