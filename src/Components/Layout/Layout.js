import React from 'react';
import classes from './Layout.module.css'
import Toolbar from '../AppToolbar/AppToolbar';
import AppDrawer from '../UI/AppDrawer/AppDrawer';

const Layout = props => {

    const [showDrawer, setShowDrawer] = React.useState(false);

    const toggleDrawer = () => {
        setShowDrawer(!showDrawer);
    }

    return (
        <div className={classes.Layout}>
            <Toolbar toggleDrawer={toggleDrawer}/>
            <AppDrawer showDrawer={showDrawer} toggleDrawer={toggleDrawer}/>
            <main>{props.children}</main>
        </div>
    );
}

export default Layout;