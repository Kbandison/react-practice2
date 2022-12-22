import React from "react";

class CounterButton extends React.Component {
  //The button needs the method to run, and the words to show
  //this.props.prompt will show
  //this.props.handleClick will be the method to run
  render() {
    return (
      <button onClick={this.props.handleClick}>{this.props.prompt}</button>
    );
  }
}

export default CounterButton;
