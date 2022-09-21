/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */

import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import formValuesInitialState from '../../models/formValuesModel';
import './Formulario.css';


const Formulario = ({ formValues, setFormValues }) => {
  const { nome, numeroCartao, mes, ano, codigo } = formValues;

  const onChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const aoSalvar = (evento) => {
    evento.preventDefault();

    setFormValues(formValuesInitialState);

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
        name="nome"
        aoAlterado={onChange}
      />

      <CampoTexto
        label="Número do cartão"
        obrigatorio={true}
        placeholder="0000 0000 0000 0000"
        tipo="text"
        tamanhoCampoTexto="320px"
        valor={numeroCartao}
        name="numeroCartao"
        aoAlterado={onChange}
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
            name="mes"
            aoAlterado={onChange}
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
            name="ano"
            aoAlterado={onChange}
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
          name="codigo"
          aoAlterado={onChange}
          minimo="3"
          maximo="3"
        />
      </div>

      <Botao>Cadastrar</Botao>

    </form>
  );
};

export default Formulario;
