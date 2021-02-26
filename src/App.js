import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Users from './components/page/Users'
import Home from './components/page/Home'
import About from './components/page/About'
import FooterBottom from './components/FooterBottom'



const App = ()=> {
  return (
    <div className="App">
      <Navigation/>
      <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/users" component={ Users } />
        <Route path="/about" component={ About } />
      </Switch>
      <FooterBottom/>
    </div>
  );
}

export default App;
