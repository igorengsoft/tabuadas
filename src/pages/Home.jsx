import React from 'react'
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  const handleSubmit = (e) => {

    e.preventDefault();
    
    const form = document.querySelector("form");
    const input = document.querySelector("input");
    const number = input.value;

    if (number) {

      if (isNaN(number)) {

        window.alert("Digite um número!");
        form.reset();
      }

      else {

        navigate(`/number/${number}`);
      }
    }

    else {

      window.alert("Digite algo!");
    }

  }

  return (

    <>

        <form action="" onSubmit={handleSubmit}>

            <h2>DIGITE UM NÚMERO PARA VER SUA TABUADA:</h2>
            <input type="text" />
            <button type="submit" id="btn-home">GERAR</button>

        </form> 

    </>
  )
}

export default Home;