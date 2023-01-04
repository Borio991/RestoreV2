import { createTheme, CssBaseline, Grid, ThemeProvider } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Navbar from "./Navbar";
import { ProductModel } from "../models/productModel";
import { Container } from "@mui/system";
import ProductCard from "../../features/catalog/ProductCard";
import Catalog from "../../features/catalog/Catalog";
import { useState } from "react";

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
      <CssBaseline />
      <Navbar darkMode={darkMode} handleChange={handleChange} />
      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>
  );
}

export default App;
