import React from "react";

const User = ({ user }) => {
  return (
    <div className="user-container">
      <img src={user.picture.large} alt={user.name} />
      <p>{`Full Name : ${user.name.first} ${user.name.last}`} </p>
      <p>{`Phone : ${user.phone}`} </p>
    </div>
  );
};

export default User;
