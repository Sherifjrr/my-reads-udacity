import React from 'react' 

class Shelf extends React.Component {

    state = {
        selected : ''
    }
    render() {
        const books = this.props.books 
        const handleChange= (e)=>{
            this.setState({selected:e.target.value})
        }
        
        return (
                    <div className="bookshelf">
                    <h2 className="bookshelf-title">{this.props.value}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                        {books.map(book => (
                            <li key={book.id}>
                            <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                <div className="book-shelf-changer">
                                <select value={book.shelf} onChange={handleChange}>
                                    <option value="move" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                </select>
                                </div>
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.authors}</div>
                            </div>
                        </li>
                        ))}
                        </ol>
                    </div>
                    </div>
        )
    }
}

export default Shelf 