import React, { PropTypes, Component } from 'react'



class BookList extends Component {

   loadBooks = () => {
     return dispatch => {
    dispatch(pendingBooks(subreddit))
    return fetch('http://127.0.0.1:8000/books/', {
       mode: 'no-cors',
       credentials: 'include',
     })
      .then(response => response.json())
      .then(json => dispatch(recieveBooks(json)))
  }
//      var books = fetch('http://127.0.0.1:8000/books/', {
//         mode: 'no-cors',
//         credentials: 'include',
//       }).then(response => response.json()).then(this.setState({
//         books: books})
// )
//       console.log(this, books)

   }



   componentDidMount() {
       this.loadBooks();
       console.log(this.state.books)
   }

   render(){
       return(
         <h1>Stroustrup</h1>
          //  <ul className="content-list">
          //      {this.state.books.map((name, index) => (
          //          <li className="content-list__item" key={index}>
          //              <ListItem books={books} />
          //          </li>
          //      ))}
          //  </ul>
       );
   }
}
BookList.propTypes = {
  books: PropTypes.array.isRequired
}



export default BookList
