import React, { Component } from 'react'



class BookList extends Component {

   state = {
       books: []
   };

   async loadBooks() {
       this.setState({
           books: await fetch("http://127.0.0.1:8000/books/",{mode:'no-cors'}).then(response =>response.json())
       })
   }

   componentDidMount() {
       this.loadBooks();
   }

   render(){
       return(
           <ul className="content-list">
               {this.state.books.map((name, index) => (
                   <li className="content-list__item" key={index}>
                       <ListItem books={books} />
                   </li>
               ))}
           </ul>
       );
   }
}


export default BookList
