import React from 'react';
import { Drawer } from '@material-ui/core';

const AppDrawer = props => {
    return(
        <Drawer anchor='left' open={props.showDrawer} onClose={props.toggleDrawer}>
      Drawer Content
    </Drawer>
    );
    
}

export default AppDrawer;