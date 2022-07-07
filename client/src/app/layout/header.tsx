import { ShoppingCart } from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  List,
  ListItem,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

interface Props {
  darkMode: boolean;
  onThemeChange: () => void;
}

const middleLinks = [
  { title: "catalog", path: "/catalog" },
  { title: "about", path: "/about" },
  { title: "contact", path: "/contact" },
];

const rightSideLinks = [
  { title: "login", path: "/login" },
  { title: "register", path: "/register" },
];

const linkStyles = {
  color: "inherit",
  typography: "h6",
  "&:hover": {
    color: "grey.500",
  },
  "&.active": {
    color: "text.secondary",
  },
  textDecoration: "none",
};

export default function Header({ darkMode, onThemeChange }: Props) {
  return (
    <AppBar sx={{ mb: 4 }} position="static">
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h6" component={NavLink} to={"/"} sx={linkStyles}>
            RE-STORE
          </Typography>
          <Switch checked={darkMode} onChange={onThemeChange} />
        </Box>
        <List sx={{ display: "flex" }}>
          {middleLinks.map(({ title, path }) => (
            <ListItem component={NavLink} to={path} key={title} sx={linkStyles}>
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton size="large" sx={{ color: "inherit" }}>
            <Badge badgeContent={4} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>

          <List sx={{ display: "flex" }}>
            {rightSideLinks.map(({ title, path }) => (
              <ListItem
                component={NavLink}
                to={path}
                key={title}
                sx={linkStyles}
              >
                {title.toUpperCase()}
              </ListItem>
            ))}
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
