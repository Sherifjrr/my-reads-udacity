import React from 'react'
import {Link} from 'react-router-dom'
import {search} from './BooksAPI.js'
import Book from './book.js'
import * as BooksAPI from './BooksAPI'
class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            query : '',
            books : [],
            shelfBooks : []
        }
    }
        
    
    componentDidMount() {
        BooksAPI.getAll().then((books) => this.setState({shelfBooks : books}))
    }

    handleChange = async e => {
        try {
            const query = e.target.value
            this.setState({query})
            if(query) {
                const results = await search(query)
                if(results.error) {
                    this.setState({books:[]})
                } else {
                        results.map(book => {
                            this.state.shelfBooks.map(b => {
                                if (b.id === book.id) {
                                    book.shelf = b.shelf
                                }
                                return b
                            })
                        return book
                    })
                    this.setState({books:results})
                    

                } 
            } else {
                this.setState({books:[]})
            }
            
        }
        catch(error) {
        }
    }
    handleShelf = (book, shelf) => {
        BooksAPI.update(book, shelf)
    }   
    
    
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to={'/'}>
                        <button className="close-search">Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" onChange={this.handleChange} value={this.state.query}/>

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.books.map(book =>  (
                            <Book {...book} key={book.id} all={this.props.book} handleShelf={this.handleShelf}/>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search 