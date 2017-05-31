import React, { Component } from 'react'
import auth from './auth'

class Login extends Component {
    // contextTypes =  {
    //     router: React.PropTypes.object.isRequired
    // };

    handleSubmit = (e) => {
        e.preventDefault()

        var username = this.refs.username.value
        var pass = this.refs.pass.value

        auth.login(username, pass, (loggedIn) => {
            if (loggedIn) {
                this.context.router.replace('/app/')
            }
        })
    };

    render() {
        return (
          <div className="container">
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col-md-4 col-md-offset-4">
                  <div className="form-group">
                    <label htmlFor="InputUsername">Username</label>
                    <input type="text" className="form-control" id="InputUsername" placeholder="Username" ref="username" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 col-md-offset-4">
                  <div className="form-group">
                    <label htmlFor="InputPassword">Password</label>
                    <input type="password" className="form-control" id="InputPassword" placeholder="Password" ref="pass" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 col-md-offset-4">
                  <div className="form-group">
                    <input  type="submit" className="form-control" />
                  </div>
                </div>
              </div>
            </form>
          </div>
            // <form onSubmit={this.handleSubmit}>
            //     <input type="text" placeholder="username" ref="username" />
            //     <input type="password" placeholder="password" ref="pass" />
            //     <input type="submit" />
            // </form>
        );
    }
}
export default Login
