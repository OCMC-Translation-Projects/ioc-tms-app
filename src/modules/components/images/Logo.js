import React from 'react'
import PropTypes from 'prop-types';

import globe from './graphics/Nicodemus.png';

class Logo extends React.Component {
  render() {
      return <img className="App-img App-img-logo" alt="OCMC-OLW Logo" role="presentation" src={globe} height="45px" width="45px"/>
  }
};

Logo.propTypes = {
  client: PropTypes.string
};

Logo.defaultProps = {
  client: "ocmc"
};
export default Logo;

