import React, { Component } from 'react'
import { connect } from 'react-refetch'



export class Comments extends Component {

   render(){
         const { commentFetch } = this.props
           if (commentFetch.pending) {
             return <div>Load comments</div>
           } else if (commentFetch.rejected) {
             return <div>loading error</div>
           } else if (commentFetch.fulfilled) {
             const comments = commentFetch.value
             console.log('comments were came',comments);
             return( <div>
             {comments.map((comment, i) =>
              <li key={i} >{comment.comment}</li>)}
            </div>
          )
           }


   }
}

export default connect(props => {
  return {
    commentFetch: {
      url:`http://127.0.0.1:8000/books/4/comments/`, //TODO: get value of id from props
      method: 'GET',
      credentials: 'include',
      mode: 'no-cors',
      headers: {
        'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
        'Content-Type': 'multipart/form-data; charset=utf-8'
      },
      then: (comments) => {
        // console.log(comments);
        value: comments.filter(u => u.verified)
    }
  }
}
})(Comments)
