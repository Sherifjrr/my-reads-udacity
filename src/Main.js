import React from 'react'
import Shelf from './Shelf.js'
import * as BooksAPI from './BooksAPI'
import {Link} from 'react-router-dom'
// import BooksApp from './App.js';

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            books : [] 
        }
        this.handleShelf = this.handleShelf.bind(this)
    }
    
    
    componentDidMount() {
        BooksAPI.getAll().then((res)=> this.setState({books : res}))
    }
    // handleShelf(book, shelf) {
        
    //     BooksAPI.update(book, shelf)
    //     .then(()=> {
    //         book.shelf = shelf 
    //         this.setState(currentState => ({
    //             books : currentState.books.filter(item => item.id !== book.id).concat(book)
    //         }))
            
    //     })
        
    // }
    handleShelf = (book, shelf) => {
        BooksAPI.update(book, shelf)
    
        BooksAPI.getAll().then((books) => {
        this.setState({ books: books })
        }
        )
    }
    
    render() {
        const allBooks = this.state.books 
        console.log(allBooks)
        const currentlyReading = allBooks.filter(books => books.shelf === 'currentlyReading')
        const Read = allBooks.filter(books => books.shelf === 'read')
        const wantToRead = allBooks.filter(books => books.shelf === 'wantToRead')
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>My Reads</h1>
                </div>
                <div className="list-books-content">
                    <Shelf value = 'Currently reading' books={currentlyReading} ShelfChange={this.handleShelf} />
                    <Shelf value = 'Want to read' books={wantToRead} ShelfChange={this.handleShelf}/>
                    <Shelf value = 'Read' books={Read} ShelfChange={this.handleShelf}/>
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