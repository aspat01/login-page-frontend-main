import './App.css';
import React from 'react';
import "./pages/fontawesomeIcons";
import { Route, Routes} from 'react-router-dom';
import Loginform from './pages/Loginform';
import Signupform from './pages/Signupform';
function App() {
  return (
    <div>
     
     <Routes>
       <Route path="/" element = {<Loginform/>}> </Route>
        <Route path ="/signup" element = {<Signupform/>}/>       
     </Routes>
     
    </div>
  );
}

export default App;
