import React, { useEffect, useRef, useState } from 'react';

const useClick = (onClick) => {
  const element = useRef();

  useEffect(() => {
    if(element.current){
      element.current.addEventListener("click",onClick);
    }
  });
  return element;
};

const App = () => {
  const sayHello = () => console.log("Hello");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
};


export default App;
