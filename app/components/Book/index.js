import React, { Component } from 'react'
import { connect } from 'react-refetch'
global.jQuery = require ('jquery')
require ('bootstrap')
import { Button } from 'react-bootstrap';
import Comments from '../Comments'



class Book extends Component {

   render(){
     const book = this.props.book
     const postLike = this.props
       return(

         <div >
         <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <p className="text-center text-uppercase">
                <strong>{book.name_book}</strong>
              </p><br/>
                <strong>Author(s):</strong>
                <ul className="list-unstyled">{book.authors.map((author, i) =>
                  <li key={i}>{author.name}</li>)}</ul>
              <br/>
                <strong>Tag(s):</strong>
                <ul className="list-unstyled">{book.tags.map((tag, i) =>
                  <li key={i}>{tag.tag_name}</li>)}</ul><br/>
              <p className="text-left">
                <strong>ISBN:</strong>  {book.ISBN}
              </p><br/>
              <p className="text-left">
                <strong>Year: </strong>  {book.year}
              </p><br/>
              <p className="text-left">
                <strong>Publisher: </strong>  {book.publishing_house}
              </p><br/>
              <p className="text-left">
                <strong>Likes: </strong> <span className="badge">{book.likes} </span>
                <button type="button" className="btn btn-info" onClick={() => {this.props.postLike()}}>Like</button>
              </p><br/>
              <p className="text-center">
                <strong>Description: </strong>  {book.description}
              </p><br/>
              <Comments id={book.id} />
            </div>
          </div>
         <div >

          </div>
          </div>
       );
   }
}

export default connect(props => {
  const id = props.book.id
  const url = 'http://127.0.0.1:8000/books/'+id+'/like/'
  console.log('1',props)
  return{
  postLike: () => ({
    postLikeResponse: {
      url: url,
      method: 'GET',
      credentials: 'include',
      mode: 'no-cors',
    },
  })
}
})(Book)
