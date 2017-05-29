import React, { Component } from 'react'
import { connect } from 'react-refetch'



class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "first_name": '',
      "last_name": '',
      "email": '',
      "username": '',
      "id": ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  handleChange(e) {
    let field = e.target.id;
    this.setState(field: e.target.value)
    console.log(this.state);
  }
  handleClick (e) {
    const id = user.id
    const username = username.value
    const email = email.value
    const first_name = first_name.value
    const last_name = last_name.value
    const request = {
      "first_name": first_name,
      "last_name": last_name,
      "email": email,
      "username": username,
      "id": id
    }
    this.props.postUserInfoResponse(comment.value)
  }
   render(){
     const user = this.props.user
     const first_name = this.state.first_name
     const last_name = this.state.last_name
     const email = this.state.email
     const username = this.state.username
     const id = id
       return(

         <div >
         <div className="row">
            <div className="col-md-8 col-md-offset-2">
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" value={username} id="username" placeholder={user.username}
            onChange={this.handleChange} ref="username" />
            <label htmlFor="email">E-mail</label>
            <input type="text" className="form-control" value={email} id="email" placeholder={user.email}
            onChange={this.handleChange} ref="email" />
            <label htmlFor="first_name">First name</label>
            <input type="text" className="form-control" value={first_name} id="first_name" placeholder={user.first_name}
            onChange={this.handleChange} ref="first_name" />
            <label htmlFor="last_name">Last name</label>
            <input type="text" className="form-control" value={last_name} id="last_name" placeholder={user.last_name}
            onChange={this.handleChange} ref="last_name" />
              <button type="button" className="btn btn-info" onClick={() => {this.props.postUserInfo(request)}}>Submit</button>
            </div>
          </div>
         <div >
          </div>
          </div>
       );
   }
}

export default connect(props => {
  const id = props.user.id
  const url = 'http://127.0.0.1:8000/books/'+id+'/like/'
  console.log('1',props)
  return{
  postUserInfo: (request) => ({
    postpostUserInfoResponse: {
      url: url,
      method: 'POST',
      credentials: 'include',
      mode: 'no-cors',
      body: JSON.stringify({
        request
       })
    }
  })
}
})(User)
