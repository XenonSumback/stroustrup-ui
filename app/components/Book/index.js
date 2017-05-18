import React, { Component } from 'react'



class Book extends Component {

   render(){
       return(
         <div>
           <b>Book: </b>{book.name_book}<br/>
           <b>Author(s): </b>{book.authors}<br/>
           <b>Tag(s): </b>{book.tags}<br/>
           <b>Description: </b>{book.description}<br/>
           <b>ISBB: </b>{book.ISBN}<br/>
           <b>year: </b>{book.year}<br/>
           <b>publisher: </b>{book.publishing_house}<br/>
           <b>likes: </b>{book.likes}<br/>
         </div>
       );
   }
}


export default Book
