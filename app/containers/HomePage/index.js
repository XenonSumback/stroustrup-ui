/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { connect } from 'react-refetch'
import BookList from '../../components/BookList/BookList'
import Paginator from '../../components/BookList/Paginator'

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

    constructor(props) {
        super(props);
        this.state = {
          books: {},
        }
      }

  render() {
    const { booksFetch } = this.props
      if (booksFetch.pending) {
        return <div>Load books</div>
      } else if (booksFetch.rejected) {
        return <div>loading error</div>
      } else if (booksFetch.fulfilled) {
        const books = booksFetch.value
        return (
          <div className="container">
            <BookList books={books} />
          </div>
          )
      }
  }
}
export default connect(props => {
  const url =`http://127.0.0.1:8000/books/`
  return {
    booksFetch: {
      url: url,
      method: 'GET',
      credentials: 'include',
      mode: 'no-cors',
      headers: {
        'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
        'Content-Type': 'multipart/form-data; charset=utf-8'
      },
      then: (books) => {
        value: books.results.filter(u => u.verified)
    }
  },
}
})(HomePage)
