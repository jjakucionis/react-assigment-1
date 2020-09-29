import React from "react";

const UserInput = (props) => {
  const inputChangeHandler = (e) => {
    props.handler(e.target.value);
  };

  return (
    <input
      type="text"
      onChange={inputChangeHandler}
      value={props.placeholder}
    ></input>
  );
};

export default UserInput;
