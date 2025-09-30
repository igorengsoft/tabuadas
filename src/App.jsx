import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Navbar from './components/Navbar';
import Count from './pages/Count';
import Close from './assets/images/Close.png';
import NotFound from './pages/NotFound';

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
            <Route path="*" element={<NotFound/>}/>

          </Routes>

        </BrowserRouter>
    </>
  )
}

export default App;
