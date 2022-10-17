import React from 'react';
import './App.css';
import Main from './Components/Main';
import Contact from './Components/Contact';
import {Route, Routes} from 'react-router-dom'
import Headlines from './Components/Headlines'
function App() {
  return(
    <>
     <Routes>
        <Route path="" element={  <Main />}/>
        <Route path='/contact' element={  <Contact />}/>
        <Route path='/headlines' element={  <Headlines />}/>
        </Routes>
    </>
 
  )

}


export default App;
