import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Profile extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Profile
      </div>
    );
  }
}

export default withRouter(connect()(Profile));
