import React, { useEffect, useRef, useState } from 'react';

const useConfirm = (message = "",onConfirm,onCancle) => {
  if(!onConfirm || typeof onConfirm !== "function"){
    return;
  }

  if(!onCancle || typeof onCancle !== "function"){
    return;
  }

  const confirmAction = () => {
    if(window.confirm(message)){
      onConfirm();
    }else{
      onCancle();
    }
  };

  return confirmAction;
};

const App = () => {
  const deleteWorld = () => { console.log("delete the world");};
  const abort = () => { console.log("Aborted");};
  const confirmDelete = useConfirm("Are you sure",deleteWorld,abort);

  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};


export default App;
