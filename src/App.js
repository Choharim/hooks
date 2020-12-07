import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [item, setItem] = useState(1);
  const incrementItem = () => {
    setItem(item + 1);
  };
  const decrementItem = () => {
    setItem(item - 1);
  };

  return (
    <div className="App">
      <h1>{item}</h1>
      <button onClick={incrementItem}>increment</button>
      <button onClick={decrementItem}>decrement</button>
    </div>
  );
};

class AppUgly extends React.Component{
  state = {
    item:1
  };

  incrementItem = () => {
    this.setState(pre => { 
      return (
        { item : pre.item + 1}
      );
    });
  }
  decrementItem = () => {
    this.setState(pre => {
      return (
        { item : pre.item -1}
      );
    });
  }

  render(){
    const { item } = this.state;
    return (
      <div className="AppUgly">
        <h1>{item}</h1>
        <button onClick={this.incrementItem}>increment2</button>
        <button onClick={this.decrementItem}>decrement2</button>
      </div>
    );
  }
}



export default AppUgly;
