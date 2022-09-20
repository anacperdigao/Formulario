import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import './Formulario.css';
import { useState } from 'react';

const Formulario = (props) => {
  const [nome, setNome] = useState('');
  const [numeroCartao, setNumeroCartao] = useState('');
  const [mes, setMes] = useState('');
  const [ano, setAno] = useState('');
  const [codigo, setCodigo] = useState('');

  const aoSalvar = (evento) => {
    evento.preventDefault();
    //TESTE console.log(nome, numeroCartao, mes, ano, codigo)
    props.aoCartaoCadastrado({
      nome,
      numeroCartao,
      mes,
      ano,
      codigo,
    });

    //Aqui é só pra limpar o formulário
    setNome('');
    setNumeroCartao('');
    setMes('');
    setAno('');
    setCodigo('');
  };

  return (
    <form onSubmit={aoSalvar} className="formulario">
      <CampoTexto
        label="Nome como está no cartão"
        obrigatorio={true}
        placeholder="ANA C N PERDIGÃO"
        tipo="text"
        tamanhoCampoTexto="320px"
        valor={nome}
        aoAlterado={(valor) => setNome(valor)}
      />

      <CampoTexto
        label="Número do cartão"
        obrigatorio={true}
        placeholder="0000 0000 0000 0000"
        tipo="text"
        tamanhoCampoTexto="320px"
        valor={numeroCartao}
        aoAlterado={(valor) => setNumeroCartao(valor)}
        minimo="16"
        maximo="16"
      />

      <div className="campos-menores">
        <div className="data">
          <CampoTexto
            label="Expira em"
            obrigatorio={true}
            placeholder="MM"
            tipo="text"
            tamanhoCampoTexto="70px"
            valor={mes}
            aoAlterado={(valor) => setMes(valor)}
            minimo="2"
            maximo="2"
          />

          <CampoTexto
            label="(MM/AA)"
            obrigatorio={true}
            placeholder="AA"
            tipo="text"
            tamanhoCampoTexto="70px"
            valor={ano}
            aoAlterado={(valor) => setAno(valor)}
            minimo="2"
            maximo="2"
          />
        </div>

        <CampoTexto
          label="CVC"
          obrigatorio={true}
          placeholder="Ex.: 123"
          tipo="text"
          tamanhoCampoTexto="130px"
          valor={codigo}
          aoAlterado={(valor) => setCodigo(valor)}
          minimo="3"
          maximo="3"
        />
      </div>

      <Botao>Confirmar</Botao>
    </form>
  );
};

export default Formulario;
