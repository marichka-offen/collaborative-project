import React, { Component } from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import './App.css';
import Homepage from '../Homepage/Homepage'
import Footer from '../Footer/Footer'
// import NavbarHome from '../NavbarHome/NavbarHome'

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          {/* <NavbarHome /> */}
          {/* <Homepage /> */}
          <Footer />
        </div>
        <div>
          <Switch>
            <Route to="/"/>
            <Route to="/"/>
            <Route to="/"/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
