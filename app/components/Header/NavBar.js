import React from 'react';
import { FormattedMessage } from 'react-intl';
global.jQuery = require ('jquery')
require ('bootstrap')
import Title from './Title';

class NavBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">

            <div className="collapse navbar-collapse">
                  <ul className="nav navbar-nav">
                    <a className="navbar-brand" href="#"><Title /></a>
                    <li className="active"><a href="#">Books <span className="sr-only">(current)</span></a></li>
                    <li><a href="#">Profile</a></li>
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

                </div>    </div>

      </nav>

    );
  }
}

export default NavBar;
