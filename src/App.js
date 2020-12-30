import React from 'react';
import {useDispatch, useSelector} from "react-redux"
import {useEffect} from 'react'
import './App.css';
import Sidebar from './Sidebar'; 
import Chat from './Chat'
import {selectUser} from "./features/userSlice"
import Login from './Login';
import { auth } from './firebase';
import {login,logout} from "./features/userSlice"

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("user is", authUser);
      if(authUser) {
        dispatch(
          login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
        }))
      } else {
        dispatch(logout());  
      }
    })
  }, [dispatch])



  return (
    //BEM naming convention for classes to make apps more scalablel
    <div className="app">
     {user ? (
       <>
      {/*Sidebar*/}
     <Sidebar />
     {/*Chat*/}
     <Chat />
      </>
     ) : (

      <Login />
     )}
    </div>
  );
}

export default App;


//sidebar component and chat component
// smaller sub components: channel,input, chat