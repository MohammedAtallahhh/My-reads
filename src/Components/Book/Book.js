import React, { Component } from "react";
import PropTypes from "prop-types";
import ShelfChanger from "../ShelfChanger/ShelfChanger";
import "./Book.css";
import NoImage from "./no-image.png";

export default class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    changeBookShelf: PropTypes.func.isRequired,
  };

  render() {
    const { title, authors, publisher, imageLinks } = this.props.book;
    // console.log(this.props.book);
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              // Checking if there is an imageLink to show
              background: `url(${
                imageLinks && imageLinks.thumbnail
                  ? imageLinks.thumbnail
                  : NoImage
              }) center / cover`,
            }}
          />
          <ShelfChanger
            books={this.props.books}
            book={this.props.book}
            changeBookShelf={this.props.changeBookShelf}
          />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">
          {authors && authors.length ? authors.join(", ") : publisher}
        </div>
      </div>
    );
  }
}
