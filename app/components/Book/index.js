import React, { Component } from 'react'
import { connect } from 'react-refetch'
global.jQuery = require ('jquery')
require ('bootstrap')
import { Button } from 'react-bootstrap';
import Comments from '../Comments'



class Book extends Component {

   render(){
     const book = this.props.book
     //const postLike = this.props
       return(

         <div >
         <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <p className="text-center text-uppercase">
                <strong>{book.name_book}</strong>
              </p><br/>
              <p className="text-right">
                <strong>Author(s):</strong>
                <ul className="list-unstyled">{book.authors.map((author, i) => <li key={i}>{author.name}</li>)}</ul>
              </p><br/>
              <p className="text-right">
                <strong>Tag(s):</strong>
                <ul className="list-unstyled">{book.tags.map((tag, i) => <li key={i}>{tag.tag_name}</li>)}</ul>
              </p><br/>
              <p className="text-right">
                <strong>ISBN:</strong>  {book.ISBN}
              </p><br/>
              <p className="text-right">
                <strong>year: </strong>  {book.year}
              </p><br/>
              <p className="text-right">
                <strong>publisher: </strong>  {book.publishing_house}
              </p><br/>
              <p className="text-right">
                <strong>likes: </strong>  {book.likes} <Button type="button" className="btn btn-info" onClick={() => {this.props.postLike()}}>Like</Button>
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

export default connect(props => ({
  postLike: () => ({
    postLikeResponse: {
      url: `http://127.0.0.1:8000/books/1/like/`,
      method: 'GET',
      credentials: 'include',
      mode: 'no-cors',
    }
  })
}))(Book)
