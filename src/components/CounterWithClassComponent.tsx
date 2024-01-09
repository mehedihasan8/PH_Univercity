import React from "react";
class CounterWithClass extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  render() {
    console.log(this);
    const { count } = this.state;
    return (
      <button
        onClick={() => this.setState({ count: count + 1 })}
        className="border border-red-500 m-10 px-2"
      >
        {count}
      </button>
    );
  }
}
export default CounterWithClass;
