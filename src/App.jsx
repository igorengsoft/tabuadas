import { useState } from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Count from './pages/Count';
import NotFound from './pages/NotFound';
import Multiplication from './pages/Multiplication';


import Navbar from './components/Navbar';
import Close from './assets/images/Close.png';


function App() {

  const [count, setCount] = useState(0);

  const handleCloseMenu = () => {

    const menu = document.querySelector(".new-menu");
    menu.classList.remove("new-menu");
    menu.classList.add("hidden");
  }

  return (
    <>

        <BrowserRouter>

          <div className="hidden">

            <img id="close" src={Close} alt="" onClick={handleCloseMenu}/>

            <Link className="link-menu" to="/">Home</Link>
            <Link className="link-menu" to="/number/1">1</Link>
            <Link className="link-menu" to="/number/2">2</Link>
            <Link className="link-menu" to="/number/3">3</Link>
            <Link className="link-menu" to="/number/4">4</Link>
            <Link className="link-menu" to="/number/5">5</Link>
            <Link className="link-menu" to="/number/6">6</Link>
            <Link className="link-menu" to="/number/7">7</Link>
            <Link className="link-menu" to="/number/8">8</Link>
            <Link className="link-menu" to="/number/9">9</Link>
            <Link className="link-menu" to="/number/10">10</Link>

          </div>

          <Navbar/>

          <Routes>

            <Route path="/" element={<Home/>}/>
            <Route path="number/:number" element={<Count/>}/>
            <Route path="number/:number/multiplier/:multiplier" element={<Multiplication/>}/>
            <Route path="*" element={<NotFound/>}/>

          </Routes>

        </BrowserRouter>
    </>
  )
}

export default App;
