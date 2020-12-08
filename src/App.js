import React, { useEffect, useRef, useState } from 'react';

const useClick = (onClick) => {
  const element = useRef();

  useEffect(() => {
    if(element.current){
      element.current.addEventListener("click",onClick);
    }
    return (() => {
      if(element.current){
      element.current.removeEventListener("click",onClick);
      }
    });//useEffect에서 function을 return하면 componentWiilUnMount일때 그 function 실행

  },[]);

  if(typeof onClick !== "function"){
    return;
  }

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
