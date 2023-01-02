import React from 'react';
import './App.css';
import Main from './Components/Main';
import Contact from './Components/Contact';
import {Route, Routes} from 'react-router-dom'
import Headlines from './Components/Cricket'
import Buissness from './Components/Politics'
import About from './Components/About'
import LoginForm from './Components/LoginForm';
import SignUp from './Components/SignUp';
import Politics from './Components/Politics';
import Cricket from './Components/Cricket';
function App() {
  return(
    <>
     <Routes>
        <Route path="" element={  <LoginForm />}/>
        <Route path="/SignUp" element={  <SignUp />}/>
        <Route path="/MainNews" element={  <Main />}/>
        <Route path='/contact' element={  <Contact />}/>
        <Route path='/about' element={  <About />}/>
        <Route path='/cricket' element={  <Cricket />}/>
        <Route path='/politics' element={  <Politics/>}/>
        <Route path='/headlines' element={  <Headlines/>}/>
        </Routes>
    </>
 
  )

}


export default App;
