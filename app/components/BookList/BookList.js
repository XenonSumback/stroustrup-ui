import React, { Component } from 'react'



class BookList extends Component {

   state = {
       books: []
   };

   async loadBooks() {
       this.setState({
           books: await fetch("http://127.0.0.1:8000/books/",{
             mode:'no-cors',
            //method: "GET",
             credentials: 'include',
             headers: {
               //'Accept': 'application/json',
               //'Content-Type': 'application/json',
               //"X-TEST-HEADER": "TEST MESSAGE",
               'Authorization': 'Token ' + "dde0e6ec9411252af0a40cb099b38a9ec09dba5b"
            },
           }).then(response =>response.json())
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
                       <ListItem books={books.result} />
                   </li>
               ))}
           </ul>
       );
   }
}


export default BookList
