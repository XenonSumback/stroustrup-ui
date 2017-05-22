import React, { Component } from 'react'
import { connect } from 'react-refetch'



export default class Book extends Component {

   render(){
       return(
         <div>
           <b>Book: </b>{this.props.book.name_book}<br/>
           <b>Author(s): </b> {this.props.book.authors.map((author, i) => <p key={i}>{author.name}</p>)}<br/>
           <b>Tag(s): </b>{this.props.book.tags.map((tag, i) =>  <p key={i}>{tag.tag_name}</p>)}<br/>
           <b>Description: </b>{this.props.book.description}<br/>
           <b>ISBN: </b>{this.props.book.ISBN}<br/>
           <b>year: </b>{this.props.book.year}<br/>
           <b>publisher: </b>{this.props.book.publishing_house}<br/>
           <b>likes: </b>{this.props.book.likes} <br/>
           <button  onClick={() => this.props.postLike()}>Like</button>
          </div>
       );
   }
}

connect(props => ({
  postLike: subject => ({
    postLikeResponse: {
      url: `http://127.0.0.1:8000/books/${this.props.book.id}/like`,
      method: 'POST',
    }
  })
}))(Book)
