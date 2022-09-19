import './CardFrente.css'

const CardFrente = () => {

    return (
        <div className='cartao-frente'>
            <img src= "C:\Users\anaca\formulario-cartao-credito\public\imagens\card-logo.svg" alt="Logo de cartão ficticio" className="logo_cartao"/>
			<p className ="cartao__numero" id="cartao__numero">0000 0000 0000 0000</p>
			<div className ="cartao__frente_dados">
				<p className ="cartao__nome" id="cartao__nome">Jane Appleseed</p>
				<div className ="validade">
					<p className ="cartao__validade_mes" id="cartao__mes">00</p>
					<p>/</p>
					<p className ="cartao__validade_ano" id="cartao__ano">00</p>
				</div>
			</div>
        </div>
    )
}

export default CardFrente