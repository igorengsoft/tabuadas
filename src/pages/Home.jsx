import React from 'react'
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  const handleSubmit = (e) => {

    e.preventDefault();
    
    const form = document.querySelector("form");
    const inputs = document.querySelectorAll("input");
    const number = inputs[0].value;
    const multiplier = inputs[1].value;

    if (number) {

      if (isNaN(number) || isNaN(multiplier)) {

        window.alert("Digite somente números nos campos!");
        form.reset();
      }

      else {

        navigate(`/number/${number}/multiplier/${multiplier}`);
      }
    }

    else {

      window.alert("Digite os números nos campos!");
    }

  }

  return (

    <>

        <form action="" onSubmit={handleSubmit}>

            <h2>DIGITE UM NÚMERO PARA VER SUA TABUADA</h2>
            <input type="text" />

            <h2>MULTIPLICADOR MÁXIMO</h2>
            <input type="text" />

            <button type="submit" id="btn-home">GERAR</button>

        </form> 

    </>
  )
}

export default Home;