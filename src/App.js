import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    count: 0
  };

  add = () => {
    console.log("add");
    this.setState(current => ({ count: current.count + 1}));
  };

  minus = () => {
    console.log("minus");
    this.setState(current => ({ count: current.count - 1}));
  };
  componentDidMount() {
    console.log("component rendered");
  }
  componentDidUpdate() {
    console.log("i just update");
  }
  componentWillUnmount() {
    console.log("good bye");
  }
  render() {
    console.log("im render");
    return <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>;
  }
}

export default App;