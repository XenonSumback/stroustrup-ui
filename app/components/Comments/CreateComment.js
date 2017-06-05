import React, { Component } from 'react'
import { connect } from 'react-refetch'


export class CreateComment extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''}
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(e) {
    this.setState({value: e.target.value})
  }

  handleClick (e) {
    this.props.postComment(comment.value)
  }

   render(){
     const id = this.props.id
     var value = this.state.value
             return (
             <div className="panel panel-default">
               <div className="panel-heading">
                 <h3 className="panel-title"></h3>
               </div>
               <div className="panel-body">
                <input type="text" className="form-control" id="comment" placeholder="Comment"
                 ref="comment" value={value} onChange={this.handleChange} />
               </div>
               <div className="panel-footer">
                <input  type="submit" className="form-control" onClick={(e) =>this.handleClick(e)} />
               </div>
             </div>
            )
    }
}

export default connect(props => {
  const id = props.id
  const url = 'http://127.0.0.1:8000/books/'+id+'/comments/'
  const date = new Date().toISOString().slice(0,10)
  const user = localStorage.getItem('id')
  console.log(localStorage);
  return{
  postComment: (comment) => ({
    postCommentResponse: {
      url: url,
      method: 'POST',
      credentials: 'include',
      mode: 'no-cors',
      body: JSON.stringify({
        "user": user,
        "date": date,
        "comment": comment,
      }),
      then: (response) => { window.location.reload() }
    }
  })
}
})(CreateComment)
