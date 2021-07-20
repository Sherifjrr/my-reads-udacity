import React from 'react'
import Shelf from './Shelf.js'
import * as BooksAPI from './BooksAPI'
import {Link} from 'react-router-dom'
// import BooksApp from './App.js';

class Main extends React.Component {
    state = {
        books : [] 
    }
    componentDidMount() {
        BooksAPI.getAll().then((res)=> this.setState({books : res}))
    }
    render() {
        const allBooks = this.state.books 
        const currentlyReading = allBooks.filter(books => books.shelf === 'currentlyReading')
        const Read = allBooks.filter(books => books.shelf === 'read')
        const wantToRead = allBooks.filter(books => books.shelf === 'wantToRead')
        console.log(allBooks)
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>My Reads</h1>
                </div>
                <div className="list-books-content">
                    <Shelf value = 'Currently reading' books={currentlyReading}/>
                    <Shelf value = 'Want to read' books={wantToRead}/>
                    <Shelf value = 'Read' books={Read}/>
                </div>
                <div className="open-search">
                    <Link to={'/search'}>
                        <button>Add a Book</button>
                    </Link>
                </div>
                </div>
        )
    }
}

export default Main ;