import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    // object destructuring
    const { onReset, onIncrement, onDelete, counters } = this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary m-2">
          Reset
        </button>
        {counters.map(counter => (
          // passing data to a component
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
            selected={true}
          >
            {/* passing children props */}
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
