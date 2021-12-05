# MyReads Project

A book tracking app that let you categorize your books that you're currently reading, want to read in the future and that books that you've already read in shelves and update them.

## Installation

To run the project, download or clone the repository in your computer:

    $ git clone https://github.com/dimikara/react-my-reads.git

and follow the instructions below.

In the repository folder:

- install all project dependencies with

        npm install

- start the development server with

        npm start

Please note that the backend server -against which the web app was developped- was provided by Udacity. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods I used to perform necessary operations on the backend:

- `getAll`
- `update`
- `search`

For more information on how these methods are used exactly, please refer to the original [Udacity repository](https://github.com/udacity/reactnd-project-myreads-starter).

## Usage

Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there. Note that the default value for the control should always be the current shelf the book is in.

The main page also has a link to /search, a search page that allows you to find books to add to your library.

The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library. To keep the interface consistent, you may consider re-using some of the code you used to display the books on the main page.

When a book is on a bookshelf, it should have the same state on both the main application page and the search page.

The search page also has a link to / (the root URL), which leads back to the main page.

When you navigate back to the main page from the search page, you should instantly see all of the selections you made on the search page in your library.

We are given a [starter template](https://github.com/udacity/reactnd-project-myreads-starter) If you choose to start with this template, your job will be to add interactivity to the app by refactoring the static code in this template.
