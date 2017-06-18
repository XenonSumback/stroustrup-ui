import React from 'react';
import { FormattedMessage } from 'react-intl';

class Footer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <footer className="footer">
         <div className="container">
         <span className="text-muted">Stroustrup</span>
         <span className="text-muted pull-right">2017</span>
         </div>
      </footer>
    );
  }
}

export default Footer;
