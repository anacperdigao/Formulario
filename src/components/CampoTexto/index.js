/* eslint-disable react/prop-types */
import './CampoTexto.css';

const CampoTexto = ({
  label,
  valor,
  name,
  obrigatorio,
  placeholder,
  tipo,
  tamanhoCampoTexto,
  minimo,
  maximo,
  aoAlterado,
}) => {
  const aoDigitado = ({ target: { name, value } }) => {
    aoAlterado(name, value.toUpperCase());
  };

  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input
        value={valor}
        name={name}
        onChange={aoDigitado}
        required={obrigatorio}
        placeholder={placeholder}
        type={tipo}
        style={{ width: tamanhoCampoTexto }}
        minLength={minimo}
        maxLength={maximo}
      />
    </div>
  );
};

export default CampoTexto;
