import React, { useEffect, useRef, useState } from 'react';


const App = () => {
  const potato = useRef();
  setTimeout(() => {
    potato.current.focus();
  }, 5000);
  return (
    <div className="App">
      <input ref={potato} placeholder="la"></input>
    </div>
  );
};


export default App;
