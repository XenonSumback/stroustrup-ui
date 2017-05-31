import React from 'react';
import Book from '../../components/Book/';
import { connect } from 'react-refetch'

export class BookPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
      super(props);
      const id = (this.props.params.id)
    }

  render() {
  const id = (this.props.params.id)
  const { bookFetch } = this.props
    if (bookFetch.pending) {
      return <div>Load book</div>
    } else if (bookFetch.rejected) {
      return <div>loading error</div>
    } else if (bookFetch.fulfilled) {
      const book = bookFetch.value
      return (
        <div className="container">
          <Book book={book} />
        </div>
        )
    }
  }
}

export default connect(props => {
  const id = (props.params.id)
  const url = 'http://127.0.0.1:8000/books/'+id+'/'
  return {
    bookFetch: {
        url: url,
        method: 'GET',
        credentials: 'include',
        mode: 'no-cors',
        headers: {
          'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
          'Content-Type': 'multipart/form-data; charset=utf-8'
        },
        then: (book) => {
          value: book
      }
    }
  }
})(BookPage)
