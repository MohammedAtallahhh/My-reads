import React, { Component } from "react";

export default class ShelfChanger extends Component {
  changeShelf = (e) =>
    this.props.changeBookShelf(this.props.book, e.target.value);

  render() {
    const { books, book } = this.props;

    let shelf = "none";

    books.forEach((b) => {
      if (b.id === book.id) {
        shelf = book.shelf;
      }
    });

    return (
      <div className="book-shelf-changer">
        <select onChange={this.changeShelf} defaultValue={shelf}>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}