// import { ShoppingCart } from "@mui/icons-material";
// import {
//   AppBar,
//   Badge,
//   Box,
//   Container,
//   IconButton,
//   List,
//   ListItem,
//   Switch,
//   Toolbar,
//   Typography,
// } from "@mui/material";
// import { Link, NavLink } from "react-router-dom";
// import { useAppSelector } from "../store/configureStore";
// import SignedInMenu from "./SignInMenu";

// interface Props {
//   darkMode: boolean;
//   handleChange: () => void;
// }

// const navStyles = {
//   color: "inherit",
//   textDecoration: "none",
//   Typography: "h6",
//   "&:hover": {
//     color: "grey.500",
//   },
//   "&.active": {
//     color: "text.secondary",
//   },
// };

// function Header({ darkMode, handleChange }: Props) {
//   const { user } = useAppSelector((state) => state.account);

//   const { basket } = useAppSelector((state) => state.basket);
//   const itemsCount = basket?.items.reduce((sum, item) => sum + item.quantity, 0);
//   const midNavLinks = [
//     { title: "Catalog", path: "/catalog" },
//     { title: "About", path: "/about" },
//     { title: "contact", path: "/contact" },
//   ];
//   const leftNavLinks = [
//     { title: "login", path: "/login" },
//     { title: "register", path: "/register" },
//   ];
//   return (
//     <AppBar position="static" sx={{ mb: 4 }}>
//       <Container>
//         <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
//           <Box>
//             <Typography component={NavLink} to="/" variant="h6" sx={navStyles} exact>
//               Re-Store
//             </Typography>
//             <Switch checked={darkMode} onChange={handleChange} />
//           </Box>
//           <List sx={{ display: "flex" }}>
//             {midNavLinks.map(({ title, path }) => (
//               <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
//                 {title.toUpperCase()}
//               </ListItem>
//             ))}
//           </List>
//           <Box display={"flex"}>
//             <IconButton component={Link} to="/basket" size="large" color="inherit">
//               <Badge badgeContent={itemsCount} color="secondary">
//                 <ShoppingCart />
//               </Badge>
//             </IconButton>
//             <List sx={{ display: "flex" }}>
//               {user ? (
//                 <SignedInMenu />
//               ) : (
//                 leftNavLinks.map(({ title, path }) => (
//                   <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
//                     {title.toUpperCase()}
//                   </ListItem>
//                 ))
//               )}
//             </List>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }

// export default Header;
