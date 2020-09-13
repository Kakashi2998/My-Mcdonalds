import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { IconButton, Toolbar, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import classes from './AppToolbar.module.css'
import MenuIcon from '@material-ui/icons/Menu';
import BurgerLogo from '../../Assets/Images/burger-logo.png'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


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
          <Link to='/auth' style={{textDecoration: 'none', color: 'white'}}>
            <Button color="inherit">{props.name}</Button>
          </Link>
        </Toolbar>
      </AppBar>
        
    );
}

const stateToProps = state => {
  return{
      name: state.authReducer.name
  }
}

export default connect(stateToProps)(AppToolbar);