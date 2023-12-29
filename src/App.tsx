import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import { RootState } from "./features/store";
import { lightTheme } from "./utils/theme/light";
import { darkTheme } from "./utils/theme/dark";
import { mainRoutes } from "./routes/Routes";
import "./App.css";

interface Route {
  pathName: string;
  element: JSX.Element;
}

function App() {
  const themeMode = useSelector((state: RootState) => state.app.theme);

  return (
    <ThemeProvider theme={themeMode === "light" ? lightTheme : darkTheme}>
      <BrowserRouter>
        <Routes>
          {(mainRoutes as Route[]).map((route, index) => (
            <Route path={route.pathName} element={route.element} key={index} />
          ))}
        </Routes>
        <Toaster
          reverseOrder={false}
          position="bottom-center"
          containerStyle={{ fontFamily: "Poppins" }}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
