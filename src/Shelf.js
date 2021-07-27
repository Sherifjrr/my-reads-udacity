import React from 'react' 
import Book from './book.js'

class Shelf extends React.Component {

    render() {
        const books = this.props.books 
        return (
                    <div className="bookshelf">
                    <h2 className="bookshelf-title">{this.props.value}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                        {books.map(book => ( 
                            <Book  {...book} key={book.id} all={this.props.book} handleShelf={this.props.ShelfChange}/>
                        ))}
                        </ol>
                    </div>
                    </div>
        )
    }
}

export default Shelf 