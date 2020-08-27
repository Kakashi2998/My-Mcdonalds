import React from 'react';
import classes from './App.module.css';
import Layout from './Containers/Layout/Layout';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';

class App extends React.Component{

  render(){
    return (
      <div className={classes.App}>
        <Layout>
          <BurgerBuilder/>
        </Layout>
      </div>
    );
  }
  
}

export default App;
