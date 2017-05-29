import React from 'react';
import { connect } from 'react-refetch'
import User from '../../components/User/';

export class ProfilePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
      super(props);
      const id = (this.props.params.id)
    }
    render() {
    const id = (this.props.params.id)
    const { userFetch } = this.props
      if (userFetch.pending) {
        return <div>Load book</div>
      } else if (userFetch.rejected) {
        return <div>loading error</div>
      } else if (userFetch.fulfilled) {
        const user = userFetch.value
        console.log(user);
        return (
          <div className="container">
            <User user={user} />
          </div>
          )
      }
    }
}

export default connect(props => {
  const id = (props.params.id)
  const url = 'http://127.0.0.1:8000/users/'+id+'/'
  return {
    userFetch: {
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
})(ProfilePage)
