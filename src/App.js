import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import SharedLayout from './Pages/SharedLayout/SharedLayout';
import Error from './Pages/Error/Error';

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
