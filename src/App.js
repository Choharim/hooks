import React, { useEffect, useState } from 'react';



const App = () => {
  const sayHello = () => { console.log("Hello")};

  const [number, setNumber] = useState(0);
  const [anumber, setAnumber] = useState(0);

  useEffect(sayHello,[number]); //mount되었을 때 sayHello실행, number이 update되었을 때 sayHello실행 ,만약 []이면 update되어도 sayHello실행 안됨  

  return (
    <div className="App">
      <div>Hi</div>
      <button onClick={() => {setNumber(number +1)}}>{number}</button>
      <button onClick={() => {setAnumber(anumber +1)}}>{anumber}</button>
    </div>
  );
};


export default App;
