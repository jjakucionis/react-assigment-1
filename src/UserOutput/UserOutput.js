import React from "react";
import "./UserOutput.css";

const UserOutput = (props) => {
  return (
    <div className="block">
      <p>
        Lorem ipsum dolor: <strong>{props.name}</strong>
      </p>
      <p>Sit amet makong paslor</p>
      {props.children}
    </div>
  );
};

export default UserOutput;
