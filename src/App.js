import React, { useEffect, useRef, useState } from 'react';


const useFadeIn = (duration = 1,delay = 0) => {
  const element = useRef();
  useEffect(() => {
    if(element.current){
      const {current} = element;
      current.style.opacity = 1;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
    }

  },[]);

  if(typeof duration !== "number" || typeof delay !== "number"){
    return;
  }

  return {ref: element, style: {opacity:0}};
};

const App = () => {
  const fadeInH1 = useFadeIn(1,2);
  const fadeInP = useFadeIn(5,5);

  return (
    <div className="App">
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>lorem alalalallaaa</p>
    </div>
  );
};


export default App;
