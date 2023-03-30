import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { theme } from "../../../ThemeConfig";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../store/auth/authSlice";
import { navigation } from "../../../Router/Navigation";
import { Avatar} from "@mui/material";
import LogoutIcon from "@mui/icons-material/ShoppingCart";



const drawerWidth = 200;

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const dispatch = useDispatch();
  const { accessToken, user } = useSelector((state) => state.authSlice);
  const navigate = useNavigate();
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
      <Box
        display={"flex"}
        flexDirection="column"
        spacing={0}
        justifyContent="center"
        alignItems={"center"}
      >
        <Avatar
          alt="Remy Sharp"
          src={user.photo}
          // onClick={() => console.log("hola")}
        />
      </Box>
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
      <ListItem disablePadding>
        <ListItemButton onClick={logOut}>
          <ListItemIcon>
            <LogoutIcon color={"secondary"} />
          </ListItemIcon>
          <ListItemText primary={"Cerrar sesion"} sx={{ color: "white" }} />
        </ListItemButton>
      </ListItem>
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
        <Toolbar sx={{ gap: "20px", display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" color={"secondary.primary"}>Calme</Typography>
          <IconButton
            color="secondary.primary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon color="secondary.primary" />
          </IconButton>
          
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
          anchor={"right"}
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
