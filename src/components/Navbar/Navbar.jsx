import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { theme } from "../../ThemeConfig";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
// import HomeIcon from "@mui/icons-material/Home";
// import StoreIcon from "@mui/icons-material/Store";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { Logout } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/auth/authSlice";
import { navigation } from "../../Router/Navigation";

const drawerWidth = 200;

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const dispatch = useDispatch();
  const { accessToken } = useSelector((state) => state.authSlice);
  const navigate = useNavigate();
  const isLogged = accessToken ? true : false;
  const navigateCustom = (path) => {
    navigate(path);
    setMobileOpen(false);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const logOut = () => {
    dispatch(logout());
    navigate("/login");
  };

  const drawer = (
    <div>
      <Toolbar />
      <List>
        {navigation.map(({ id, path, title, Icon }) => {
          return (
            <ListItem disablePadding key={id}>
              <ListItemButton onClick={() => navigateCustom(path)}>
                <ListItemIcon>
                  <Icon color={"secondary"} />
                </ListItemIcon>
                <ListItemText primary={title} sx={{ color: "white" }} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar sx={{ gap: "20px" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="subtitle1" noWrap component="div" flexGrow={1}>
            Brand
          </Typography>
          {isLogged && (
            <Button
              variant="contained"
              sx={{ textTransform: "none" }}
              onClick={logOut}
            >
              Cerrar sesion
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: theme.palette.primary.main,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: theme.palette.primary.main,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          backgroundColor: theme.palette.secondary.main,
          minHeight: "100vh",
        }}
      >
        <Toolbar />
        {props.children}
      </Box>
    </Box>
  );
}

export default Navbar;
