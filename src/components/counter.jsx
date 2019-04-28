// imrc shortcut
import React, { Component } from "react";

class Counter extends Component {
  // Making Counter component a controlled component
  //   state = {
  //     // state object contains data that
  //     // this component needs
  //     value: this.props.counter.value,
  //     tags: ["tag1", "tag2", "tag3"]
  //   };

  styles = {
    fontSize: 20,
    fontWeight: "bold"
  };

  render() {
    // console.log(this.props);
    return (
      // This gets complied to
      // React.createElement()
      // by babel
      <React.Fragment>
        {/* rendering children props data */}
        {this.props.children}

        {/* In the curly braces, we can write any valid  JS expression -
            an expression is something that produces a value
            {2 + 2}
            {this.state.count}
            {callAFunction()} 
         */}
        {/* using style object */}
        {/* rendeing class dynamically */}
        <span style={this.styles} className={this.getClassName()}>
          {this.formatCount()}
        </span>

        {/* using inline style */}
        {/* rendering class inline */}
        {/* we just pass event handler methos's reference to the events and 
            not call the method */}
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          //   to send argument with click handler ref
          //   better use an inline method here
          //   onClick={() => this.handleIncrement({ id: 1 })}
          style={{ fontSize: 20 }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>

        {/* could have used the below condition(and) to show empty list warning text
            {this.state.tags.length === 0 && "There are no tags!"}
            In JS we can apply logical operator between non boolean values
        */}

        {/* Not using tags anymore, hence commenting */}
        {/* {this.renderTags()} */}
      </React.Fragment>
    );
  }
  // defining click handler method with argument
  handleIncrement = () => {
    console.log(this);
    // In react we dont modify the state manually
    // this.state.count++ wont effect the DOM
    // to change state, use Component's setter method
    this.setState({ value: this.state.value + 1 });
  };

  handleDecrement = () => {};

  //   renderTags() {
  //     if (this.state.tags.length === 0) return <p>There are no tags!</p>;

  //     /* rendering list */
  //     /* list is rendered using map method of the array */
  //     /* each item in the list should have a unique key for react to
  //         identify the item uniqely when the DOM is modified */
  //     return (
  //       <ul>
  //         {this.state.tags.map(tag => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  //   }

  getClassName() {
    const count = this.props.counter.value;
    return count === 0 ? "badge badge-warning m-2" : "badge badge-primary m-2";
  }

  formatCount() {
    // let and const are new ES6 functionality
    let count = this.props.counter.value;
    // return count === 0 ? "Zero" : count;
    // can return a jsx element as well
    // return count === 0 ? <h2>Zero</h2> : count;
    return <h2>{count === 0 ? "Zero" : count}</h2>;

    // jsx expressions are like normal js objects
    // you can return them from a func
    // pass them as an argument to a func
    // can use as value of a constant or a variable
    // const x = <h1> My Value </h1>
  }
}

export default Counter;
