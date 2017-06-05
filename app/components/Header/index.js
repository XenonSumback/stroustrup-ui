import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-refetch'
import NavBar from './NavBar';


export class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
      const { whoami } = this.props
        if (whoami.pending) {
          return <div>load</div>
        } else if (whoami.rejected) {
          return <div>loading error</div>
        } else if (whoami.fulfilled) {
          const user = whoami.value
          for (var item in user.user){
            localStorage.setItem(item, user.user[item])
          }
          return (
            <div className="container">
              <NavBar user = {user} />
            </div>
            )
        }
  }
}
export default connect(props => {
  const url = 'http://127.0.0.1:8000/whoami'
  return {
    whoami: {
        url: url,
        method: 'GET',
        credentials: 'include',
        mode: 'no-cors',
        headers: {
          'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
          'Content-Type': 'multipart/form-data; charset=utf-8'
        },
        then: (user) => {
          value: user
      }
    }
  }
})(Header)
