import React, { Component } from 'react'
import { connect } from 'react-refetch'
import Comment from './Comment'



export class Comments extends Component {

   render(){
         const id_book = this.props.id
         const { commentFetch } = this.props
           if (commentFetch.pending) {
             return <div>Load comments</div>
           } else if (commentFetch.rejected) {
             return <div>loading error</div>
           } else if (commentFetch.fulfilled) {
             const comments = commentFetch.value
             console.log('comments were came',comments);
             return(
               <div>
                 {comments.map((comment, i) =>
                   <Comment key={i} comment={comment} />)}
              </div>
          )
           }


   }
}

export default connect(props => {
  const id = props.id
  const url = 'http://127.0.0.1:8000/books/'+id+'/comments/'
  return {
    commentFetch: {
      url:url,
      method: 'GET',
      credentials: 'include',
      mode: 'no-cors',
      headers: {
        'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
        'Content-Type': 'multipart/form-data; charset=utf-8'
      },
      then: (comments) => {
        value: comments.filter(u => u.verified)
    }
  }
}
})(Comments)
