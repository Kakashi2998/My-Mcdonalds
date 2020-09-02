import React from 'react';
import {SwipeableDrawer, List, ListItem, ListItemText, Divider } from '@material-ui/core';
import classes from './AppDrawer.module.css';
import { NavLink } from 'react-router-dom';

const AppDrawer = props => {
    return(
      <SwipeableDrawer anchor='left' open={props.showDrawer}
       onClose={props.toggleDrawer} onOpen={props.toggleDrawer}
       style={{zIndex: '25'}}>
         <div className={classes.List}>
           <List>
            <NavLink to='/burgerBuilder' className={classes.ListButtons}>
              <ListItem button onClick={props.toggleDrawer}>
                <ListItemText primary='Build Burger'/>
              </ListItem>
             </NavLink>
             <Divider/>
             <NavLink to='/cart' className={classes.ListButtons}>
              <ListItem button onClick={props.toggleDrawer}>
                <ListItemText primary='Cart'/>
              </ListItem>
             </NavLink>
             <Divider/>
           </List>
         </div>
      </SwipeableDrawer>
    );
    
}

export default AppDrawer;