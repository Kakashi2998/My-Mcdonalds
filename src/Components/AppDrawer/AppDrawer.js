import React from 'react';
import {SwipeableDrawer, List, ListItem, ListItemText, Divider, createMuiTheme, MenuItem } from '@material-ui/core';
import classes from './AppDrawer.module.css';
import { Link } from 'react-router-dom';

const AppDrawer = props => {

    const [selected, changeSelected] = React.useState(1);

    const select = (id) => {
      props.toggleDrawer();
      changeSelected(id);
    }

    return(
      <SwipeableDrawer anchor='left' open={props.showDrawer}
       onClose={props.toggleDrawer} onOpen={props.toggleDrawer}
       style={{zIndex: '25'}}>
         <div className={classes.List}>
           <List>
            <Link to='/burgerBuilder' className={classes.ListButtons}>
              <MenuItem button onClick={() => select(1)} selected={selected === 1}
                className={classes.MenuItem}>
                <ListItemText primary='Build Burger'/>
              </MenuItem>
             </Link>
             <Divider/>
             <Link to='/cart' className={classes.ListButtons}>
              <MenuItem button onClick={() => select(2)} selected={selected === 2}
              className={classes.MenuItem}>
                <ListItemText primary='Cart'/>
              </MenuItem>
             </Link>
             <Divider/>
             <Link to='/orders' className={classes.ListButtons}>
              <MenuItem button onClick={() => select(3)} selected={selected === 3}
                classes={{root: classes.MenuItem}}>
                <ListItemText primary='Orders'/>
              </MenuItem>
             </Link>
             <Divider/>
           </List>
         </div>
      </SwipeableDrawer>
    );
    
}

export default AppDrawer;