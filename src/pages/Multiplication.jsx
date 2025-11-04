import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Multiplication.css';

const Multiplication = () => {

    const { number, multiplier } = useParams();
    const number2 = parseInt(number, 10);
    const multiplier2 = parseInt(multiplier, 10);
    
    const navigate = useNavigate();
    const results = [];

    for (let i = 0; i < multiplier2; i++) {

        results[i] = number2 * (i + 1);
    }

    const handleReturn = () => {

        navigate("/");
    }

  return (

    <div id="multiplication">

        {results.map((result, index) => (

            <p className="results" key={result}>{number2} X {index + 1} = {result}</p>
        ))}

    </div>
  )
}

export default Multiplication;