import React, { Component } from 'react'
import { connect } from 'react-refetch'
global.jQuery = require ('jquery')
require ('bootstrap')
import { Button } from 'react-bootstrap';
import Comments from '../Comments'
import Like from './Like'


export default class Book extends Component {

   render(){
     const book = this.props.book
       return(
         <div >
         <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <p className="text-center text-uppercase">
                <strong>{book.name_book}</strong>
              </p><br/>
              <button type="button" className="btn btn-success pull-right">Take book</button><br/>
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
              <Like id={book.id} likes =  {book.likes} />
              <br/>
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
