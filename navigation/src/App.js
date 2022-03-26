import React from 'react';
import './App.css';
import Start from './Start/Start';
import {Routes, Route} from 'react-router-dom'
import Choose from './Choose/Choose';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <div>
     <Routes>
       <Route path='/Start' element={<Start/>} />
       <Route path="/Choose" element={<Choose />} />           
     </Routes>
    
    
     </div>

   
  );
}

export default App;
