import React, {Component} from 'react';
import Book from './Book'

class BookShelf extends Component{

    render(){

        return(
            <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.bookshelfTitle}</h2>
            <div className="bookshelf-books">
            <ol className="books-grid">
            {this.props.books.length> 0  ? (this.props.books.map( (book, index) => (
                    <li key={index}>
                    <Book book= {book} changeShelfHandler={this.props.changeShelfHandler}/>   
                    </li>
             ) ))
            :(<div className="loading">Empty Shelf...</div>)
        }
       
            </ol>
            </div>
      
          </div>

        )

    }
}


export default BookShelf;