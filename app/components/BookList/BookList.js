import React, { PropTypes, Component } from 'react'
import Book from '../Book'
import { browserHistory } from 'react-router';



class BookList extends Component {

  constructor(props) {
      super(props);
      this.state = {
      };

      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }

  handleClick = (e, i) => {
     e.preventDefault()
    console.log('this is:',i,  e.target);
    var path= '/'
    browserHistory.push('/detail-book&{i}');
    console.log(this.props.books[i]);
  }
   render(){
       return(
          <div>
          <h3>BookList</h3>
          {this.props.books.map((book, i) =>
          <li key={i} ><a key={i} href={book.id} onClick={(e) => this.handleClick(e, i)}>{book.name_book}</a></li>
        )}</div>
       );
   }
}

export default BookList
