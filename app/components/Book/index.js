import React, { Component } from 'react'



class Book extends Component {

   render(){
       return(
         <div>
           <b>Book: </b>{this.props.book.name_book}<br/>
           <b>Author(s): </b>{this.props.book.authors}<br/>
           <b>Tag(s): </b>{this.props.book.tags}<br/>
           <b>Description: </b>{this.props.book.description}<br/>
           <b>ISBN: </b>{this.props.book.ISBN}<br/>
           <b>year: </b>{this.props.book.year}<br/>
           <b>publisher: </b>{this.props.book.publishing_house}<br/>
           <b>likes: </b>{this.props.book.likes}<br/>
         </div>
       );
   }
}


export default Book
