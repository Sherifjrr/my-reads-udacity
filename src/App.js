import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Search from './Search.js'
import Main from './Main.js'
import './App.css'
class BooksApp extends React.Component {
  state = {
  
  }
  
  

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route exact path={'/'} component={Main}/>
            <Route exact path={'/search'} component={Search}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default BooksApp
