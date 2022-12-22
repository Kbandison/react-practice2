import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>

        {this.props.people.map((v) => (
          //Map creates another array with original values, with any changes
          <span>{v.toUpperCase()} </span>
        ))}
      </header>
    );
  }
}

export default Header;
