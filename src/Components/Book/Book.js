import React, { Component } from "react";
import ShelfChanger from "../ShelfChanger/ShelfChanger";
import "./Book.css";

export default class Book extends Component {
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
              backgroundImage: `url(${imageLinks.smallThumbnail})`,
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
