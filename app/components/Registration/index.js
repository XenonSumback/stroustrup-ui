import React, { Component } from 'react'
import Formsy from 'formsy-react';
import { connect } from 'react-refetch'
import MyInput from './MyInput'

export class Registration extends Component {

  constructor(props) {
      super(props);
      this.state = {
      canSubmit: false
      }
      this.enableButton = this.enableButton.bind(this)
      this.disableButton = this.disableButton.bind(this)

    }

  submit(data) {
    alert(JSON.stringify(data, null, 4))
  }
  enableButton() {
    this.setState({ canSubmit: true })

  }
  disableButton() {
    this.setState({ canSubmit: false })
  }
    render() {
      const postUser = this.props
      return (
        <div className="container">
          <Formsy.Form onSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton} className="login">
          <div className="row">
            <div className="col-md-4 col-md-offset-4">
              <div className="form-group">
                <label htmlFor="InputUsername">Username</label>
                <MyInput className="form-control" name="username" id="InputUsername" required />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-md-offset-4">
              <div className="form-group">
                <label htmlFor="InputEmail">Email</label>
                <MyInput className="form-control" name="email" id="InputEmail" validations="isEmail" validationError="This is not a valid email" required />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-md-offset-4">
              <div className="form-group">
                <label htmlFor="InputPassword">Password</label>
                <MyInput className="form-control" name="password" id="InputPassword" type="password" required />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-md-offset-4">
              <div className="form-group">
                <label htmlFor="ConfirmPassword">ConfirmPassword</label>
                <MyInput className="form-control" name="confirmpassword" id="ConfirmPassword" type="password" validations="equalsField:password" validationError="Passwords not match" required />
              </div>
            </div>
          </div>
          <div className="buttons">
           <button type="submit" className="form-control" disabled={!this.state.canSubmit}>Submit</button>
          </div>

           </Formsy.Form>
        </div>
      );
    }
}
export default connect(props => {
  const url = 'http://127.0.0.1:8000/users/'
  return{
  postUser: data => ({
    postUserResponse: {
      url: url,
      method: 'POST',
      credentials: 'include',
      mode: 'no-cors',
      body: JSON.stringify({ data })
    }
  })
}
})(Registration)
