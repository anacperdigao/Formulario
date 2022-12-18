import React from 'react';
import './Botao.css';

type Props = {
  children: any
}

const Botao = (props: Props) => {
  return <button className="botao">{props.children}</button>;
};

export default Botao;
