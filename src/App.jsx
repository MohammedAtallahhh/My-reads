import React, { Component } from "react";
import { getAll, update } from "./BooksAPI";
import Book from "./Components/Book/Book";
import SearchBar from "./Components/SearchBar/SearchBar";
import { lists } from "./Lists";

export default class App extends Component {
  state = {
    showSearchPage: false,

    // Getting lists from local storage if there
    books: [],
  };

  async componentDidMount() {
    const books = await getAll();
    console.log(books);
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
  };

  render() {
    const { books } = this.state;
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBar changeCategory={this.changeCategory} books={books} changeBookShelf={this.changeBookShelf}/>
        ) : (
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
              <button onClick={() => this.setState({ showSearchPage: true })}>
                Add a book
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
