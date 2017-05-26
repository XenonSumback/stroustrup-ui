import React, { Component } from 'react'
import { connect } from 'react-refetch'
import Comment from './Comment'



export class CreateComment extends Component {

   render(){
     const id = this.props.id
             return (
             <div className="panel panel-default">
               <div className="panel-heading">
                 <h3 className="panel-title"></h3>
               </div>
               <div className="panel-body">
                <input type="text" className="form-control" placeholder="Comment" ref="comment" />
               </div>
               <div className="panel-footer">
                <input  type="submit" className="form-control" onClick={() => {this.props.postComment()}} />
               </div>
             </div>

            )
    }
}

export default connect(props => {
  const id = props.id
  const url = 'http://127.0.0.1:8000/books/'+id+'/comments/'
  const date = new Date().toISOString().slice(0,10);
  const user = 'user'
  return{
  postComment: () => ({
    postCommentResponse: {
      url: url,
      method: 'POST',
      credentials: 'include',
      mode: 'no-cors',
      body: JSON.stringify({
        "user_id": "1",
        "book_id": id,
        "date": date,
        "comment": "comt book(request)",
       })
    }
  })
}
})(CreateComment)
