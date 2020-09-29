import React, { Component } from "react";
import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";

const style = {
  backgroundColor: "#eee",
  border: "5px solid gray",
  margin: "20px",
  padding: "30px",
};

class App extends Component {
  state = {
    username: ["Tirli", "Pirli", "Trali"],
  };

  usernameStateHandler = (value) => {
    this.setState({
      username: [value, "Pirli", "Trali"],
    });
  };

  render() {
    return (
      <div style={style}>
        <UserOutput name={this.state.username[0]}>
          <UserInput
            placeholder={this.state.username[0]}
            handler={this.usernameStateHandler}
          />
        </UserOutput>
        <UserOutput name={this.state.username[1]}>
          <UserInput
            placeholder={this.state.username[1]}
            handler={this.usernameStateHandler}
          />
        </UserOutput>
        <UserOutput name={this.state.username[2]}>
          <UserInput
            placeholder={this.state.username[2]}
            handler={this.usernameStateHandler}
          />
        </UserOutput>
      </div>
    );
  }
}

export default App;
