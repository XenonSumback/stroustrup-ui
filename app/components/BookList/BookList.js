import React, { PropTypes, Component } from 'react'
import Book from '../Book'
import { browserHistory } from 'react-router';



class BookList extends Component {

  constructor(props) {
      super(props);
      this.state = {
        books:[], book: {}
      };
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }

  handleClick = (e, i) => {
     e.preventDefault()
    console.log('this is:',i,  e.target);
    var path= '/detail-book'+ i
    console.log(path)
    browserHistory.push(path);
    console.log(this.props.books[i]);
  }
   render(){
       return(
         <div>
          <h3>BookList</h3>
          <div className="list-group">
          {this.props.books.map((book, i) =>
            <button key={i} type="button" className="list-group-item"  onClick={(e) => this.handleClick(e, i)}>{book.name_book}</button>)}
          </div>
        </div>
       );
   }
}

export default BookList
