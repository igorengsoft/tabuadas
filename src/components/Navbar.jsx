import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Menu from '../assets/images/Menu.png';

const Navbar = () => {

  const handleAlterClass = () => {

    const menu = document.querySelector(".hidden");
    menu.classList.remove("hidden");
    menu.classList.add("new-menu");
  }

  return (

    <>

    <header>

      <div id="initial">

          <img src={Menu} alt="" onClick={handleAlterClass}/>

          <h1>TABUADA</h1>

      </div>

        <nav>
            <Link to="/">Home</Link>
            <Link to="/number/1">1</Link>
            <Link to="/number/2">2</Link>
            <Link to="/number/3">3</Link>
            <Link to="/number/4">4</Link>
            <Link to="/number/5">5</Link>
            <Link to="/number/6">6</Link>
            <Link to="/number/7">7</Link>
            <Link to="/number/8">8</Link>
            <Link to="/number/9">9</Link>
            <Link to="/number/10">10</Link>
        </nav>

        </header>
    
    </>

  )
}

export default Navbar;