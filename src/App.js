import React, { useState } from 'react';


const content = [
  {
    tab: "section 1",
    content: "I am the conetent of the section 1"
  },
  {
    tab: "section 2",
    content: "I am the conetent of the section 2"
  }
];

const useTabs = (initTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initTab);

  if(!allTabs || !Array.isArray(allTabs)){
    return;
  }

  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
};

const App = () => {
  const {currentItem,changeItem} = useTabs(0,content);

  return (
    <div>
      {content.map((obj,index)=>
      <button onClick={() => {changeItem(index)}}>{obj.tab}</button> )}
      <div>{currentItem.content}</div>
    </div>
  );
};


export default App;
