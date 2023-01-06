import { createTheme, CssBaseline, Grid, ThemeProvider } from "@mui/material";
import Navbar from "./Navbar";
import { Container } from "@mui/system";
import Catalog from "../../features/catalog/Catalog";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import AboutPage from "../../features/about/AboutPage";
import ProductDetails from "../../features/catalog/ProductDetails";
import ContactPage from "../../features/contact/ContactPage";
import HomePage from "../../features/home/HomePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ServerError from "../errors/ServerError";
import NotFound from "../errors/NotFound";
import BasketPage from "../../features/basket/BasketPage";
import CheckoutPage from "../../features/checkout/CheckoutPage";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const PaletteType = darkMode ? "dark" : "light";
  const theme = createTheme({
    palette: {
      mode: PaletteType,
      background: {
        default: PaletteType === "light" ? "#eaeaea" : "#121212",
      },
    },
  });
  const handleChange = () => {
    setDarkMode((prevState) => !prevState);
  };
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
      <CssBaseline />
      <Navbar darkMode={darkMode} handleChange={handleChange} />
      <Container>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route exact path="/catalog" component={Catalog} />
          <Route path="/catalog/:id" component={ProductDetails} />
          <Route path="/basket" component={BasketPage} />
          <Route path="/checkout" component={CheckoutPage} />
          {/* <Route path="/login" component={Login} />
          <Route path="/register" component={Register} /> */}
          <Route path="not-found" component={NotFound} />
          <Route path="/server-error" component={ServerError} />
        </Switch>
      </Container>
    </ThemeProvider>
  );
}

export default App;
