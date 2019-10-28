import React, {Component} from 'react';
import BookShelf from './BookShelf'

class Library extends Component{



    render(){
        const read = this.props.books.filter(o => (o.shelf==='read'));
        const currentlyReading = this.props.books.filter(o => (o.shelf==='currentlyReading'));
        const wantToRead = this.props.books.filter(o => (o.shelf==='wantToRead'));
        return(
            <div className="list-books-content">
                 <div>
                     <BookShelf bookshelfTitle='Currently Reading' books={currentlyReading}  changeShelfHandler={this.props.changeShelfHandler}/>
                     <BookShelf bookshelfTitle='Want to Read' books={wantToRead}   changeShelfHandler={this.props.changeShelfHandler}/>
                     <BookShelf bookshelfTitle='Read' books={read}   changeShelfHandler={this.props.changeShelfHandler}/> 
            </div>
            </div>


        )

    }
}


export default Library;