import React from 'react';
import './CardVerso.css';

const CardVerso = ({ codigo }) => {
  return (
    <div className="cartao-verso">
      <p className="cvc" id="cartao__cvc">
        {codigo}
      </p>
    </div>
  );
};

export default CardVerso;
