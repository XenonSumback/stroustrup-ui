import React, { PropTypes, Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-refetch';
import Book from '../Book'


export class BookList extends Component {

  constructor(props) {
      super(props);
      this.state = {
        books:this.props.books,
        next: this.props.books.next,
        previous: this.props.books.previous,
      };
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
      this.paginatorClick = this.paginatorClick.bind(this)
    }

  handleClick = (e, i) => {
    e.preventDefault()
    console.log('this is:',i,  e.target);
    var path= '/detail-book'+ i
    console.log(path)
    browserHistory.push(path);
  }
  paginatorClick = (e, url) =>{
    e.preventDefault()
    console.log(url);
    if (url == undefined){
      return
    }
    const { pages } = this.props
    pages(url, this)
  }

   render(){

       return(
         <div>
          <h3>BookList</h3>
          <div className="list-group">
          {this.state.books.results.map((book, i) =>
            <button key={i} type="button" className="list-group-item"  onClick={(e) => this.handleClick(e, book.id)}>{book.name_book}</button>)}
          </div>
          <nav>
            <ul className="pager">
              <li><button className="btn btn-default" type="button" disabled={!this.state.previous} onClick={(e) => {this.paginatorClick(e, this.state.previous)}} >Previous</button></li>
              <li><button className="btn btn-default" type="button" disabled={!this.state.next} onClick={(e) => {this.paginatorClick(e, this.state.next)}} >Next</button></li>
            </ul>
          </nav>
        </div>
       );
   }
}

export default connect(props => {
  return{
  pages: (url, obj) => ({
    pagesResponse: {
      url: url,
      method: 'GET',
      credentials: 'include',
      mode: 'no-cors',
      force: true,
      refreshing: true,
      then: (data) => (
        obj.setState({
          books: data,
          next: data.next,
          previous: data.previous,
        })
      ),
    }
  })
}
})(BookList)
