import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user.username) return <h1>Not logged in </h1>;

  return (
    <div>
      <h1>Profile : {user.username}</h1>
      <h2>Password : {user.password}</h2>
    </div>
  );
}

export default Profile;
