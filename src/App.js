import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import Search from './Search.js'
import Main from './Main.js'
// import Shelf from './Shelf.js'
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
