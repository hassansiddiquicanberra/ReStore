import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import Header from "./header";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "../../features/home/HomePage";
import Catalog from "../../features/catalog/Catalog";
import ContactPage from "../../features/contact/ContactPage";
import AboutPage from "../../features/about/AboutPage";
import ProductDetails from "../../features/catalog/ProductDetails";
import ServerError from "../errors/ServerError";
import {Route, Routes} from "react-router-dom";
import NotFound from "../errors/NotFound";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? "dark" : "light";
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === "dark" ? "#121212" : "#eaeaea",
      },
    },
  });

  function onThemeChange() {
    setDarkMode(!darkMode);
  }
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position="bottom-right" theme="colored" hideProgressBar />
      <CssBaseline />
      <Header darkMode={darkMode} onThemeChange={onThemeChange} />
      <Container>
        <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/catalog" element={<Catalog/>}/>
        <Route path="/catalog/:id" element={<ProductDetails/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/server-error" element={<ServerError/>}/>
        <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
