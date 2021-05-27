import React from "react";
import "./App.css";
import PassMessage from "./components/PassMessage";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      values: "",
    };
  }

  changed = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    const { inputValue, values, alert } = this.state;

    return (
      <div className="container">
        <h3>A Message You Would Like To Pass</h3>
        <div>
          <input
            type="text"
            id="input"
            value={inputValue}
            onChange={this.changed}
          />
        </div>
        <h3>Last Message Delivered</h3>
        <p className="messages">{values}</p>
      </div>
    );
  }
}

export default App;
