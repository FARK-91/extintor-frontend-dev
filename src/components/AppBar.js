import React from "react";
// import logo from '../img/app-logo.jpg';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Grid } from "@material-ui/core";
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import { grey } from '@material-ui/core/colors';

import {
  BrowserRouter as Router,
  Link,
  NavLink
} from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  offset: {
    ...theme.mixins.toolbar, // min-height: 56px;
  },
  text: {
    color: "white",
    "&:hover":{
      color: grey[900],
      textDecoration: "none",
    }
  },
  rightSideNavbar: {
    float: "right",
  }
}));

const Navbar = () => {
  const classes = useStyle();

  return (
    <React.Fragment>
      <AppBar position="fixed" color="primary">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={6} className={classes.fondo}>
            <Toolbar>
              <div className="btn-group">
                <Link to="/dashboard" className={classes.text}><HomeRoundedIcon/></Link>&nbsp;&nbsp;
              </div>
            </Toolbar>
          </Grid>
          <Grid item xs={12} md={6} lg={6} className={classes.fondo}>
            <Toolbar className="btn-group" className={classes.rightSideNavbar}>
              <div className="btn-group">
                <Link to="/extintor" className={classes.text}>Registrar Extintor</Link>&nbsp;&nbsp;&nbsp;
                <NavLink to="/" className={classes.text} activeClassName="active">Salir</NavLink>&nbsp;&nbsp;
              </div>
            </Toolbar>
          </Grid>
        </Grid>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;