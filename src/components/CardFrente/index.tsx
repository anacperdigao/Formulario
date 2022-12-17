import React from 'react';
import './CardFrente.css';

const CardFrente = ({ formValues }) => {
  const { nome, numeroCartao, mes, ano } = formValues;

  return (
    <div className="cartao-frente">
      <span className="logo_cartao">
        <svg
          width="84"
          height="47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff" />
          <path
            d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z"
            stroke="#fff"
          />
        </svg>
      </span>
      <p className="cartao__numero">{numeroCartao}</p>
      <div className="cartao__frente_dados">
        <p className="cartao__nome">{nome}</p>
        <div className="validade">
          <p className="cartao__validade_mes">{mes}</p>
          <p>/</p>
          <p className="cartao__validade_ano">{ano}</p>
        </div>
      </div>
    </div>
  );
};

export default CardFrente;

