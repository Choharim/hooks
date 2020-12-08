import React, { useEffect, useRef, useState } from 'react';

const useFullscreen = (callback) => {
  const element = useRef();
  const runCallback = (isfull) => {
    if(callback && typeof callback ==="function"){
      callback(isfull);
    }  
  };

  const triggerFull = () => {
    if(element.current){
      element.current.requestFullscreen();
      runCallback(true);
    }
  };

  const exitFull = () => {
    document.exitFullscreen();
    runCallback(false);
  };

  return {element,triggerFull,exitFull};
};

const App = () => {
  const onFullS = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const {element,triggerFull,exitFull} = useFullscreen(onFullS);
 
  return (
    <div className="App" style={{height: "1000vh"}}>
      <div ref={element} >
        <img src="https://lh3.googleusercontent.com/proxy/9MdSBC11pW1bbngwIO7EcNsmE2bqzbQwAac0OWI42PNgy1IO0Q1cTkjyiHSYGFXu9L-v9xKTH-X9jJb92r2KNFyE6Ha1ZGf1H3ezLJVr3_-5Ekp-807DqlxUIt0nAKMcnq4bG5xdfiRYeNTPPuUoNi4JPeMJjWrA5B6s"></img>
        <button onClick={exitFull}>exitscreen</button>
      </div>
      <button onClick={triggerFull}>fullscreen</button>
    </div>
  );
};


export default App;
