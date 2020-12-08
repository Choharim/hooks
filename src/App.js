import React, { useEffect, useState } from 'react';

const useTitle = (initTitle) => {
  const [title, setTitle] = useState(initTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  }
  useEffect(updateTitle,[title]);
  return setTitle;
}

const App = () => {
  const titleUadate = useTitle("Loading...");
  setTimeout(() => { titleUadate("Home")}, 5000);

  return (
    <div className="App">
      
    </div>
  );
};


export default App;
