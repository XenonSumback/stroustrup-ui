import React, { PropTypes, Component } from 'react'
import Book from '../Book'



class BookList extends Component {

  constructor(props) {
      super(props);
      this.state = {};

      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }

  handleClick = (e) => {
     e.preventDefault()
    console.log('this is:',this,  e.target);
  }
   render(){
       return(
          <div>
          <h3>BookList</h3>
          {this.props.books.map((book, i) =>
          <li key={i} ><a key={book} onClick={(e) => this.handleClick(e)}>{book.name_book}</a></li>
        )}</div>
       );
   }
}


export default BookList
