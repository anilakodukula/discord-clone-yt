import React from 'react';
import './App.css';
import Sidebar from './Sidebar'; 
import SidebarChannel from "./SidebarChannel"

function App() {
  return (
    //BEM naming convention for classes to make apps more scalablel
    <div className="app">
     

     {/*Sidebar*/}
     <Sidebar />
     {/*Chat*/}
    
    </div>
  );
}

export default App;


//sidebar component and chat component
// smaller sub components: channel,input, chat