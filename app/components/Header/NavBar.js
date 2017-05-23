import React from 'react';
import { FormattedMessage } from 'react-intl';
global.jQuery = require ('jquery')
require ('bootstrap')
import { Button } from 'react-bootstrap';
import Title from './Title';

//import NavBar from './NavBar';
//import HeaderLink from './HeaderLink';

class NavBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">

            <div className="collapse navbar-collapse">
                  <ul className="nav navbar-nav">
                    <a className="navbar-brand" href="#">Stroustrup</a>
                    <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
                    <li><a href="#">Link</a></li>
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
