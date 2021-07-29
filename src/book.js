import React from 'react'

class Book extends React.Component {
    
        render() {
            
            return (
                        <li >
                            <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.imageLinks ? this.props.imageLinks.thumbnail: `http://via.placeholder.com/170x320`}})` }}></div>
                                <div className="book-shelf-changer">
                                <select
                                value = {this.props.shelf || "none"}
                                onChange={(e) => this.props.handleShelf(this.props , e.target.value)}>
                                    <option value="move" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                </select>
                                </div>
                            </div>
                            <div className="book-title">{this.props.title}</div>
                            <div className="book-authors">{this.props.authors && this.props.authors.join(', ')}</div>
                            </div>
                        </li>
            )
}
            
        }

        export default Book