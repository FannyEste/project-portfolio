import React from "react";
import "./ProfilePicture.css"; 

const ProfilePicture = ({ imageUrl, imageType }) => (
  <img src={imageUrl} className={imageType} />
); 

export default ProfilePicture;