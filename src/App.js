import React from 'react';
import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Error from './Pages/Error/Error';
import { Navbar,NavDropdown,Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
          <Route index element={<Home/>} />
          <Route path='about' element={<About/>}/>
          <Route path=':id' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
