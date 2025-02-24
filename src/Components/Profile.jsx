import React from "react";

function Profile(props) {
  const { isLoggedIn, name, email } = props;
  return (
    <>
      <h1>Welcome {name}</h1>
      <h4>{email}</h4>
    </>
  );
}

export default Profile;
