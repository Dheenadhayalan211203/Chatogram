import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landingpage from './Components/Landingpage';
 
import Body from './Components/Body';
import Startup from './Components/Startup';
import Chatbox from './Components/Chatbox';
import Signup from './Components/Signup';
 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />}> </Route>
        <Route path='/body' element={<Body/>}></Route>
        <Route path='/auth' element={<Startup/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/chatbox' element={<Chatbox/>}></Route>
        <Route path='/signin' element={<Signup/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
