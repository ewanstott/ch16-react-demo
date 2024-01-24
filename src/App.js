// EXAMPLE 1 - Hello World
// //imrc -> import React
// import React, { Component } from "react";

// //cc -> to write a class -> this section shows in the DOM
// class App extends Component {
//   state = {};
//   render() {
//     return <p>HELLO WORLD</p>;
//   }
// }

// //cc -> export class
// export default App;

//EXAMPLE 2 - REACT COUNTER
import React, { Component } from "react";

class App extends Component {
  //state holds data
  state = { count: 1 };

  //declare functions - e.g. using setState function
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  //this.state.count connects to state
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

export default App;
