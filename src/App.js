import React, { useState } from 'react';

const useInput = (initValue, validator) => {
  const [value, setValue] = useState(initValue);

  const onChange = (event) => {
    const {
      target:{value}
      } = event;

    let willUpdate = true;
    if(typeof validator === "function"){
      willUpdate = validator(value);
    }

    if(willUpdate){
      setValue(value);
    }
  };
  return { value, onChange };
};

const App = () => {
  const maxLength = (value) => !value.includes("@") ;

  const name = useInput("Mr.",maxLength);
  return (
    <input placeholder="name" {...name}></input>
  );
};



export default App;
