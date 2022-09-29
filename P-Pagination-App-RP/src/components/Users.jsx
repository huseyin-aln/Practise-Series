import React from "react";
import User from "./User";

const Users = ({users, page}) => {

    const startIndex = (page - 1) * 10;
    const selectedUsers = users.slice(startIndex, startIndex + 10)

  return (
    <div className="users-container">
       {
        selectedUsers.map((user) => (
            <User user={user} key={user.login.uuid} />
        ))
       }
    </div>
  )
};

export default Users;
