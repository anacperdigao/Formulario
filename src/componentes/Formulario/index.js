import CampoTexto from '../CampoTexto'
import './Formulario.css'

const Formulario = (props) => {

    return(
        <form className='formulario'>
            <CampoTexto 
            label="Nome como está no cartão" 
            obrigatorio={true} 
            placeholder="Ana Carolina N Perdigão"  
            />

            <CampoTexto 
            label="Número do cartão" 
            obrigatorio={true} 
            placeholder="0000 0000 0000 0000"  
            />

        </form>

    )
}

export default Formulario