import React from 'react';
import {SwipeableDrawer, List, ListItem, ListItemText, Divider } from '@material-ui/core';
import classes from './AppDrawer.module.css';

const AppDrawer = props => {
    return(
      <SwipeableDrawer anchor='left' open={props.showDrawer}
       onClose={props.toggleDrawer} onOpen={props.toggleDrawer}
       style={{zIndex: '25'}}>
         <div className={classes.List}>
           <List>
             <ListItem button>
               <ListItemText primary='Build Burger'/>
             </ListItem>
             <Divider/>
             <ListItem button>
               <ListItemText primary='Orders'/>
             </ListItem>
             <Divider/>
           </List>
         </div>
      </SwipeableDrawer>
    );
    
}

export default AppDrawer;