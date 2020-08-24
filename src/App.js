import React from 'react';
import classes from './App.module.css';
import Layout from './Components/Layout/Layout';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';

class App extends React.Component{

  render(){
    return (
      <div className={classes.App}>
        <h1>Hello</h1>
        <Layout>
          <BurgerBuilder/>
        </Layout>
      </div>
    );
  }
  
}

export default App;
