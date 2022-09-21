import './CardVerso.css';

// eslint-disable-next-line react/prop-types
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
