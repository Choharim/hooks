import React from 'react';

const useNotification = (title,options) => {
  if(!("Notificaion" in window)){
    return;
  }

  const fireNotif = () => {
    if(Notification.permission !== "granted"){
      Notification.requestPermission().then(permission => {
        if(permission === "granted"){
          new Notification(title,options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title,options);
    }
  };

  return fireNotif;
};

const App = () => {
  const trigerNotif = useNotification("can i steal your kimchi?",{body: "I love kimchi"});
  
  return (
    <div className="App" style={{height: "1000vh"}}>
     <button onClick={trigerNotif}>hello</button>
    </div>
  );
};


export default App;
