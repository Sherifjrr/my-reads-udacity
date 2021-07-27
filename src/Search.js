import React from 'react'
import {Link} from 'react-router-dom'
import {search} from './BooksAPI.js'
import Book from './book.js'

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            query : '',
            books : []
        }
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
                    this.setState({books:results})
                } 
            } else {
                this.setState({books:[]})
            }
            
        }
        catch(error) {
        }
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
                            <Book {...book} key={book.id} all={this.props.book} />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search 