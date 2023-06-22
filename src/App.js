import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Fashion from './Pages/Categories/Fashion';

import MensFashion from './Pages/Categories/menFashion';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/category/women fashion' element={<Fashion />} />
       
        <Route path='/category/mens fashion' element={<MensFashion />} />
      </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
