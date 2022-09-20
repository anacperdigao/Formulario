import './CampoTexto.css'

const CampoTexto = (props) => {

    const aoDigitado = (evento) => {
        //TESTE console.log(evento.target.value)
        props.aoAlterado(evento.target.value)
    }

    return(
        <div className="campo-texto">
            <label>{props.label}</label> 
            <input 
            value={props.valor} 
            onChange={aoDigitado}
            required={props.obrigatorio} 
            placeholder={props.placeholder}
            type = {props.tipo}
            style = {{width: props.tamanhoCampoTexto}}
            minLength = {props.minimo}
            maxLength = {props.maximo}
            />
        </div>
    )
}

export default CampoTexto