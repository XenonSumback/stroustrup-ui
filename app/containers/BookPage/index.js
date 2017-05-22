import React from 'react';
import Book from '../../components/Book/';

export default class BookPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function


  render() {
    return (
      <Book book={book} />
    );
  }
}
