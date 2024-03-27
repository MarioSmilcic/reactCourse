import React from "react";
import "./Profile.css";

const Profile = ({ name, age, city, email, imageUrl }) => {
  return (
    <div className="persons">
      <div className="profile">
        <img src={imageUrl} />
        <div className="profile__data">
          <p>Name: {name}</p>
          <p>Age: {age}</p>
          <p>City: {city}</p>
          <p>email: {email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
