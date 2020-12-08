import React, { useEffect, useRef, useState } from 'react';

const useFullscreen = () => {
  const element = useRef();
  const triggerFull = () => {
    if(element.current){
      element.current.requestFullscreen();  
    }
  };

  const exitFull = () => {
    document.exitFullscreen();
  };

  return {element,triggerFull,exitFull};
};

const App = () => {
  const {element,triggerFull,exitFull} = useFullscreen();
 
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
