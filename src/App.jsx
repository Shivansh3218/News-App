import React from 'react';
import './App.css';
import Main from './Components/Main';
import Contact from './Components/Contact';
import {Route, Routes} from 'react-router-dom'
import Headlines from './Components/Headlines'
import Buissness from './Components/Buissness'
import About from './Components/About'
import LoginForm from './Components/LoginForm';
import SignUp from './Components/SignUp';
function App() {
  return(
    <>
     <Routes>
        <Route path="" element={  <LoginForm />}/>
        <Route path="/SignUp" element={  <SignUp />}/>
        <Route path="/MainNews" element={  <Main />}/>
        <Route path='/contact' element={  <Contact />}/>
        <Route path='/about' element={  <About />}/>
        <Route path='/headlines' element={  <Headlines />}/>
        <Route path='/buissness' element={  <Buissness/>}/>
        </Routes>
    </>
 
  )

}


export default App;
