import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landingpage from './Components/Landingpage';
 
 
import Startup from './Components/Startup';
 
import Signup from './Components/Signup';
 
import Dashboard from './Components/Dashboard';
 
 
 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />}> </Route>
         
        <Route path='/auth' element={<Startup/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route> 
      
        <Route path='dashboard' element={<Dashboard/>}></Route>
         
         
 
      </Routes>
    </Router>
  );
}

export default App;
