import React, { Component } from 'react'
import auth from './auth'

class Login extends Component {
    // contextTypes =  {
    //     router: React.PropTypes.object.isRequired
    // };

    handleSubmit(e) {
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
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="username" ref="username" />
                <input type="password" placeholder="password" ref="pass" />
                <input type="submit" />
            </form>
        );
    }
}
