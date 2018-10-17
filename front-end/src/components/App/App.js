import React, { Component } from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import './App.css';
import Homepage from '../Homepage/Homepage'
import Footer from '../Footer/Footer'
import Goals from '../Goals/Goals'

class App extends Component {
  constructor () {
    super()
    this.state = {
      goals: []
    }
  }

  componentDidMount() {
    this.getGoals()
  }

  getGoals = () => {
    fetch('http://localhost:3001/api/goals')
      .then(response => response.json())
      .then(goals =>
        this.setState({
          goals: goals
        })
      )
  }

  render() {
    return (
      <div className="App">
        <Homepage />
        <Footer />
      <main>
        <Switch>
         <Route
              path="/goals"
              render={props => {
                return <Goals {...props} />
              }}
            />
          <Route to="/"/>
          <Route to="/"/>
        </Switch>
        </main>
      </div>
    )
  }
}

export default App