import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import Instructions from './Instructions';
import Acceuil from './component/Acceuil';
import Formulaire from './component/Formulaire';
import Info from './component/Info';


const App = () => {
  return (
    <div className="App">
    
  <Router>

      <div className="content">
      <Switch>

        <Route exact path="/acceuil" component={Acceuil} />
          <Route exact path="/formulaire" component={Formulaire} />
          <Route exact path="/info" component={Info} />
      </Switch>

      </div>
  </Router>
      <Header />
      <Instructions/>
      <Acceuil />
      <Formulaire />
    </div>
  );
}

export default App;
