import React, { Component } from 'react'
import { connect } from 'react-refetch'

export class Like extends Component {

  constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this)
      this.state = {
        likes: this.props.likes,
      };
  }

  handleClick(){
    const { postLike } = this.props
      postLike(this)
      //console.log(this.props);
      //this.setState({likes: this.state.likes+1})
      //this.forceUpdate()
}

  render(){
    return(
      <p className="text-left">
        <strong>Likes: </strong> <span className="badge"> {this.state.likes} </span><p> </p>
        <button type="button" className="btn btn-info" onClick={() => {this.handleClick()}}>Like</button>
      </p>
    )
  }
}

export default connect(props => {
  const id = props.id
  const url = 'http://127.0.0.1:8000/books/'+id+'/like/'
  return{
  postLike: (obj) => ({
    postLikeResponse: {
      url: url,
      method: 'GET',
      credentials: 'include',
      mode: 'no-cors',
      force: true,
      refreshing: true,
      then: (data) => (
        obj.setState({likes: obj.state.likes + Number(data.count)})
      ),
    }
  })
}
})(Like)
