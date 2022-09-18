import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import './Formulario.css'

const Formulario = (props) => {

    return(
        <form className='formulario'>
            <CampoTexto 
            label="Nome como está no cartão" 
            obrigatorio={true} 
            placeholder="Ana C N Perdigão"
            tipo = "text"  
            />

            <CampoTexto 
            label="Número do cartão" 
            obrigatorio={true} 
            placeholder="0000 0000 0000 0000"
            tipo = "number"
            />

            <Botao>
                Confirmar
            </Botao>

        </form>

    )
}

export default Formulario