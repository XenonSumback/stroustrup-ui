import React, { Component } from 'react'
import { connect } from 'react-refetch'



export class EditUser extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
  }
   render(){
     console.log(this);
    //  const id = this.props.params.id
     const user = this.props.user
       return(
         <div >
         <div className="row">
            <div className="col-md-8 col-md-offset-2">
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" value={user.username} id="username" placeholder={user.username}
            onChange={this.handleChange} ref="username" />
            <label htmlFor="email">E-mail</label>
            <input type="text" className="form-control" value={user.email} id="email" placeholder={user.email}
            onChange={this.handleChange} ref="email" />
            <label htmlFor="first_name">First name</label>
            <input type="text" className="form-control" value={user.first_name} id="first_name" placeholder={user.first_name}
            onChange={this.handleChange} ref="first_name" />
            <label htmlFor="last_name">Last name</label>
            <input type="text" className="form-control" value={user.last_name} id="last_name" placeholder={user.last_name}
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
  const url = 'http://127.0.0.1:8000/users/'+id+'/'
  return{
  postUserInfo: (request) => ({
    postpostUserInfoResponse: {
      url: url,
      method: 'PUT',
      credentials: 'include',
      mode: 'no-cors',
      body: JSON.stringify({
        request
       })
    }
  })
}
})(EditUser)
