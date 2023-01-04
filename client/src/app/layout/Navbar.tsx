import { ShoppingCart } from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Box,
  Container,
  IconButton,
  List,
  ListItem,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import SignedInMenu from "./SignInMenu";

interface Props {
  darkMode: boolean;
  handleChange: () => void;
}

const navStyles = {
  color: "inherit",
  textDecoration: "none",
  Typography: "h6",
  "&:hover": {
    color: "grey.500",
  },
  "&.active": {
    color: "text.secondary",
  },
};

function Navbar({ darkMode, handleChange }: Props) {
  const midNavLinks = [
    { title: "Catalog", path: "/catalog" },
    { title: "About", path: "/about" },
    { title: "contact", path: "/contact" },
  ];
  const leftNavLinks = [
    { title: "login", path: "/login" },
    { title: "register", path: "/register" },
  ];
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Container>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography component={NavLink} to="/" variant="h6" sx={navStyles} exact>
              Re-Store
            </Typography>
            <Switch checked={darkMode} onChange={handleChange} />
          </Box>
          <List sx={{ display: "flex" }}>
            {midNavLinks.map(({ title, path }) => (
              <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
                {title.toUpperCase()}
              </ListItem>
            ))}
          </List>
          <Box display={"flex"}>
            <IconButton component={Link} to="/basket" size="large" color="inherit">
              <Badge badgeContent={5} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
            <List sx={{ display: "flex" }}>
              {leftNavLinks.map(({ title, path }) => (
                <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
                  {title.toUpperCase()}
                </ListItem>
              ))}
            </List>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
