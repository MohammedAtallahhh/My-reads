import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ShelfChanger extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    changeBookShelf: PropTypes.func.isRequired,
  };

  changeShelf = (e) =>
    this.props.changeBookShelf(this.props.book, e.target.value);

  render() {
    const { books, book } = this.props;

    let shelf = "none";

    for (let b of books) {
      if (b.id === book.id) {
        shelf = b.shelf;
      }
    }

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
