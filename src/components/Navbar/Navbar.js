import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

import Avatar from "../Avatar/Avatar";
import EnhanchedGrid from "../Grid/EnhanchedGrid";

import logo from "../../assets/logo.svg";

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: "none"
  },
  link: {
    textDecoration: "none",
    color: theme.palette.text.primary
  }
}));

export default function MenuAppBar({ logOut, handelRoute }) {
  const classes = useStyles();
  const [auth] = React.useState(localStorage.getItem("token") ? true : false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDualFunc = () => {
    handleClose();
    handelRoute("setting", 3);
  };

  return (
    <AppBar position="absolute" className={classes.appBar}>
      <EnhanchedGrid>
        <Toolbar>
          <Avatar
            style={{ cursor: "pointer" }}
            src={logo}
            alt=""
            variant="square"
            onClick={() => handelRoute("dashboard", 0)}
          />

          <Typography variant="h6" className={classes.title}>
            Alpha-POS
          </Typography>

          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Avatar src="" alt="" variant="square" />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleDualFunc}>Setting</MenuItem>
                <MenuItem onClick={handleClose}>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={auth}
                          onChange={logOut}
                          aria-label="login switch"
                        />
                      }
                      label={localStorage.getItem("token") ? "Logout" : "Login"}
                    />
                  </FormGroup>
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </EnhanchedGrid>
    </AppBar>
  );
}
