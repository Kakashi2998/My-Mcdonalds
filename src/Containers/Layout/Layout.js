import React from 'react';
import Toolbar from '../../Components/AppToolbar/AppToolbar';
import AppDrawer from '../../Components/AppDrawer/AppDrawer';

const Layout = props => {

    const [showDrawer, setShowDrawer] = React.useState(false);

    const toggleDrawer = () => {
        setShowDrawer(!showDrawer);
    }

    return (
        <React.Fragment>
            <Toolbar toggleDrawer={toggleDrawer}/>
            <AppDrawer showDrawer={showDrawer} toggleDrawer={toggleDrawer}/>
            <main>{props.children}</main>
        </React.Fragment>
    );
}



export default Layout;