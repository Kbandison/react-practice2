import React from "react";
import Count from "./Count";
import CounterButton from "./CounterButton";

class Counter extends React.Component {
  //Required when declaring a state, otherwise, unneeded
  constructor(props) {
    super(props);

    //Initial State
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <CounterButton prompt="Subtract" handleClick={this.decrement} />
        <Count currentCount={this.state.count} />
        <CounterButton prompt="Add" handleClick={this.increment} />
      </div>
    );
  }
}

export default Counter;
