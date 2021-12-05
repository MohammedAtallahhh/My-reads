import React, { Component } from "react";
import PropTypes from "prop-types";
import { search } from "../../BooksAPI";
import Book from "../Book/Book";
import "./SearchBar.css";

export default class SearchBar extends Component {
  static types = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired,
  };

  state = {
    books: [],
    notFound: false,
  };

  // Searching with input query
  searchInput = async (e) => {
    // Ensuring that input is not empty
    if (e.target.value) {
      // Checking ig there is an error
      const books = await search(e.target.value);
      if (books.error) this.setState({ books: [], notFound: true });
      else this.setState({ books, notFound: false });
    } else {
      this.setState({ books: [] });
    }
  };

  render() {
    return (
      <div className="search-books">
        <form className="search-books-bar">
          <button
            className="close-search"
            onClick={() => this.setState({ showSearchPage: false })}
          >
            Close
          </button>
          <div className="search-books-input-wrapper">
            {/*
                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
                    You can find these search terms here:
                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                    you don't find a specific author or title. Every search is limited by search terms.
                  */}
            <input
              onChange={this.searchInput}
              type="text"
              placeholder="Search by title or author"
            />
          </div>
        </form>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.notFound ? (
              <h1>There are no books match your search.</h1>
            ) : (
              this.state.books.map((book) => (
                <Book
                  key={book.id}
                  books={this.props.books}
                  changeBookShelf={this.props.changeBookShelf}
                  book={book}
                />
              ))
            )}
          </ol>
        </div>
      </div>
    );
  }
}
