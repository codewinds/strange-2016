import React from 'react';

function Profile({ firstName, lastName }) {
  return (
    <div>
      <h2>Profile</h2>
      <div>{ firstName } { lastName }</div>
    </div>
  );
}

Profile.propTypes = {
  firstName: React.PropTypes.string.isRequired,
  lastName: React.PropTypes.string.isRequired
};

export default Profile;
