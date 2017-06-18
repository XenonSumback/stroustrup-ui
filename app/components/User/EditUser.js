import React, { Component } from 'react'
import { connect } from 'react-refetch'
import Formsy from 'formsy-react';
import MyInput from '../Registration/MyInput'


export class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
    canSubmit: false
    }
    this.enableButton = this.enableButton.bind(this)
    this.disableButton = this.disableButton.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(userInfo){
    console.log('userInfo',userInfo);
    this.props.postUserInfo(userInfo)
    window.location.href = '../'
  }

  enableButton() {
    this.setState({ canSubmit: true })

  }
  disableButton() {
    this.setState({ canSubmit: false })
  }

   render(){
     console.log(this);
    //  const id = this.props.params.id
     const user = this.props.user
     console.log(user);
       return(
         <div  className="container">

            <div className="col-md-8 col-md-offset-2">
            <Formsy.Form onSubmit={(userInfo)=> this.handleSubmit(userInfo)} onValid={this.enableButton} onInvalid={this.disableButton} className="login">

              <label htmlFor="InputUsername">Username</label>
              <MyInput className="form-control" value={user.username} name="username" id="InputUsername" required />

              <label htmlFor="InputEmail">Email</label>
              <MyInput className="form-control" value={user.email} name="email" id="InputEmail" validations="isEmail" validationError="This is not a valid email" required />

              <label htmlFor="first_name">First name</label>
              <MyInput className="form-control" value={user.first_name} name="first_name" id="first_name" />

              <label htmlFor="last_name">Last name</label>
              <MyInput className="form-control" value={user.last_name} name="last_name" id="last_name" />

              <label htmlFor="OldPassword">Old Password</label>
              <MyInput className="form-control" name="username" id="OldPassword" required />

              <label htmlFor="InputPassword">New Password</label>
              <MyInput className="form-control" name="password" id="InputPassword" type="password" required />

              <label htmlFor="ConfirmPassword">Confirm Password</label>
              <MyInput className="form-control" name="confirm_password" id="ConfirmPassword" type="password" validations="equalsField:password" validationError="Passwords not match" required />

              <br/>
              <button type="submit" className="form-control" disabled={!this.state.canSubmit}>Submit</button>
            </Formsy.Form>
            </div>

          </div>
       );
   }
}

export default connect(props => {
  const id = props.id
  const url = props.user.url
  console.log('test', props);
  return{
  postUserInfo: (request) => ({
    postpostUserInfoResponse: {
      url: url,
      method: 'PUT',
      credentials: 'include',
      mode: 'no-cors',
      body: JSON.stringify(request)
    }
  })
}
})(EditUser)
