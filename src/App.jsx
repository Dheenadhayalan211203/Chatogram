import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landingpage from './Components/Landingpage';
 
import Body from './Components/Body';
import Startup from './Components/Startup';
 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />}> </Route>
        <Route path='/body' element={<Body/>}></Route>
        <Route path='/auth' element={<Startup/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
