import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { IconButton, Toolbar, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import classes from './AppToolbar.module.css'
import MenuIcon from '@material-ui/icons/Menu';
import BurgerLogo from '../../Assets/Images/burger-logo.png'


const AppToolbar = props => {


    return(
      <AppBar position="fixed" style={{zIndex: '50'}} >
        <Toolbar className={classes.AppBar}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" 
            aria-label="menu" onClick={props.toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title} >
            <img src={BurgerLogo} style={{height: '50px', width: '50px'}} alt='not found'/>
              Burger Builder
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
        
    );
}

export default AppToolbar;