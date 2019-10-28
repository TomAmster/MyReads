import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Library from './Library'
import { Route, Link } from 'react-router-dom';
import Search from './Search'


class BooksApp extends React.Component {
  state = {
    books : []
    }
    componentDidMount() {
      // get books on load
      BooksAPI.getAll().then(books => this.setState({ books }));
    }
  
    changeShelfHandler = (book,value) =>{
      BooksAPI.update(book,value).then(() => {
        BooksAPI.getAll().then(books => this.setState({ books }));

      })}


  render() {
    return (
      <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <Route exact path="/" render = { () => (      <Library books={this.state.books} changeShelfHandler={this.changeShelfHandler}/>)} />
      <div className="open-search">
              <Link className='search_page' to='/search'>
              <button>Add a book</button>
              </Link>
      </div>
      <Route exact path="/search" render = { () => ( <Search books={this.state.books} changeShelfHandler={this.changeShelfHandler}/>)} />

      </div>
    )
  }
}

export default BooksApp
