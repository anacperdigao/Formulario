import React from 'react';
import Botao from '../Botao';
import './CadastroFinalizado.css';
import formValuesInitialState from '../../models/formValuesModel';


const CadastroFinalizado = ({setAoFinalizado, setFormValues}) => {

  const aoFinalizar = (evento) => {
    evento.preventDefault();
    setAoFinalizado(true);
    setFormValues(formValuesInitialState);
  };

  return(
    <div onClick={aoFinalizar} className='cadastro'>
      <span><svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="40" fill="url(#a)"/><path d="M28 39.92 36.08 48l16-16" stroke="#fff" strokeWidth="3"/><defs><linearGradient id="a" x1="-23.014" y1="11.507" x2="0" y2="91.507" gradientUnits="userSpaceOnUse"><stop stopColor="#6348FE"/><stop offset="1" stop-color="#610595"/></linearGradient></defs></svg></span>
      <h2>Obrigada!</h2>
      <p>Seus dados foram cadastrados</p>
      <Botao>Continuar</Botao>
    </div>
  )
}

export default CadastroFinalizado;
