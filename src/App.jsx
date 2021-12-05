import React, { Component } from "react";
import { getAll, update } from "./BooksAPI";
import Book from "./Components/Book/Book";
import SearchBar from "./Components/SearchBar/SearchBar";
import { lists } from "./Lists";
import { Switch, Link, Route, BrowserRouter } from "react-router-dom";

export default class App extends Component {
  state = {
    // Getting lists from local storage if there
    books: [],
  };

  async componentDidMount() {
    const books = await getAll();
    this.setState({ books });
  }

  changeBookShelf = (book, bookShelf) => {
    update(book, bookShelf).then((res) => {
      book.shelf = bookShelf;
      // Update the bookshelf
      this.setState((prevState) => ({
        books: prevState.books.filter((b) => b.id !== book.id).concat(book),
        ...prevState,
      }));
    });

    console.log(book);
  };

  render() {
    const { books } = this.state;
    return (
      // Router parent
      <BrowserRouter>
        <div className="app">
          <Switch>
            {/* Search page */}
            <Route path="/search">
              <SearchBar books={books} changeBookShelf={this.changeBookShelf} />
            </Route>

            {/* Book Shelves page */}
            <Route path="/" exact>
              <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                  <div className="bookshelves">
                    {lists.map((list) => (
                      <div className="bookshelf" key={list.id}>
                        <h2 className="bookshelf-title">{list.title}</h2>
                        <div className="bookshelf-books">
                          <ol className="books-grid">
                            {books
                              .filter((b) => b.shelf === list.name)
                              .map((book) => (
                                <Book
                                  key={book.id}
                                  book={book}
                                  books={this.state.books}
                                  changeBookShelf={this.changeBookShelf}
                                />
                              ))}
                          </ol>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="open-search">
                  <Link to="/search">Add a book</Link>
                </div>
              </div>
            </Route>

            {/* If any other routes */}
            <Route>
              <div className="not-found">
                <h1>404 Not Found.</h1>
                <Link to="/">Return home</Link>
              </div>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
