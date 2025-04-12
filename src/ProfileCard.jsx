import React from "react";
import starklogo from "./assets/starklogo.jpg";

const ProfileCard = ({ profile }) => {
 return (
    <div>
    <div
      style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        margin:0,
    }}
    >
        <div
        style={{
          justifyContent: "center",
          textAlign: "center",
          padding: "30px",
          border: "2px solid black",
          borderRadius: "10px",
          width: "250px",
          backgroundColor: "#886b20",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
        >

        <img
        style={{
            border:"2px solid black",
            borderRadius:"50%",
            width:"50px",
            height:"50px",
        }}
          src={starklogo}
        />
        <div>
        <span>Name : </span>
          <span>{profile.name}</span>
        </div>
        <div>
          <span>Department : </span>
          <span>{profile.Department}</span>
        </div>
        <div>
          <span>Year : </span>
          <span>{profile.year}</span>
        </div>
        <div>
          <span>Mobile : </span>
          <span>{profile.mobile}</span>
        </div>
        <div>
          <span>Address : </span>
          <span>{profile.address}</span>
        </div>
        <a href="https://www.linkedin.com/feed/"target="_blank">
      LinkedIn profile
    </a>
      </div>
    </div>
    
    </div>
 );
};
export default ProfileCard;