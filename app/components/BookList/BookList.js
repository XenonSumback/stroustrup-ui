import React, { PropTypes, Component } from 'react'
import Book from '../Book'



class BookList extends Component {

   render(){
       return(
          <div>
          <h3>BookList</h3><br/>
          {this.props.books.map((book, i) =>
          <li key={i}><a href='/{book.id}'>{book.name_book}</a></li>
        )}</div>
       );
   }
}


export default BookList
