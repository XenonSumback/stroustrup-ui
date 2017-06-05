import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-refetch'
global.jQuery = require ('jquery')
require ('bootstrap')
import Title from './Title';

export class NavBar extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {isLoggedIn: this.props.user.is_logged_in};
  }

  render() {
    const logout = this.props
    let button = null,
        profileButton = null
    if (this.state.isLoggedIn) {
      button = <a onClick={() => this.props.logout()}>logout</a>;
      const id = this.props.user.user.id
      var profilePath = '/detail-user/'+id
      profileButton = <a href={profilePath}>Profile</a>
    } else {
      button = <a onClick={() => {window.location.href = '/login'}}>login</a>;
    }
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">

            <div className="collapse navbar-collapse">
                  <ul className="nav navbar-nav">
                    <a className="navbar-brand" href="/"><Title /></a>
                    <li className="active"><a href="/">Books</a></li>
                    <li>{profileButton}</li>
                    <li>{button}</li>
                    <li>
                    <form className="navbar-form">
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Search" />
                      </div>
                      <button type="submit" className="btn btn-default">Submit</button>
                    </form>
                    </li>
                  </ul>
            </div>

          </div>
        </div>
      </nav>

    );
  }
}


export default connect(props => {
  const url = 'http://127.0.0.1:8000/logout/'
  return{
  logout: () => ({
    logoutRes: {
      url: url,
      method: 'GET',
      credentials: 'include',
      mode: 'no-cors',
      then: () =>(window.location.href = '/login')
    }
  })
}
})(NavBar)
