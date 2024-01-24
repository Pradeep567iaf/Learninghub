import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Homepage from './Components/Homepage';
import Login from './Components/Login';
import  Userregistration  from './Components/Userregistration';
import Learningcontent from './Components/Learningcontent';
import Myprofile from './Components/Myprofile';
import Admindashboard from './Components/Admindashboard';
import Forgetpassword  from './Components/Forgetpassword';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
       <Route path="/"  element={<Homepage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Userregistration/>}/>
        <Route path="/content" element={<Learningcontent/>}/>
        <Route path="/profile" element={<Myprofile/>}/>
        <Route path="/dashboard" element={<Admindashboard/>}/>
        <Route path='/forgetpassword' element={<Forgetpassword/>}/>
        
       </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
