import './CardVerso.css'

const CardVerso = (props) => { 

    return (
        <div className ="cartao-verso">
            <p className ="cvc" id="cartao__cvc">{props.codigo}</p>
        </div>
    )
}

export default CardVerso