import React, { useEffect, useState } from 'react';



const App = () => {
  const sayHello = () => { console.log("Hello")};

  useEffect(() => {
    sayHello();
  });

  const [number, setNumber] = useState(0);
  const [anumber, setAnumber] = useState(0);

  return (
    <div className="App">
      <div>Hi</div>
      <button onClick={() => {setNumber(number +1)}}>{number}</button>
      <button onClick={() => {setAnumber(anumber +1)}}>{anumber}</button>
    </div>
  );
};


export default App;
