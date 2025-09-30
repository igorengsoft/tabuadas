import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Count.css';

const Count = () => {

    const { number } = useParams();
    const number2 = parseInt(number, 10);
    const navigate = useNavigate();
    const results = [];

    for (let i = 0; i <= 9; i++) {

        results[i] = number2 * (i + 1);
    }

    const handleReturn = () => {

        navigate("/");
    }

  return (

    <div id="count">

        {results.map((result, index) => (

            <p key={result}>{number2} X {index + 1} = {result}</p>
        ))}

        <button id="btn-back" onClick={handleReturn}>Home</button>

    </div>
  )
}

export default Count;