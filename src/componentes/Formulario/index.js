import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import './Formulario.css'

const Formulario = () => {

    return(
        <form className='formulario'>
            <CampoTexto 
            label="Nome como está no cartão" 
            obrigatorio={true} 
            placeholder="Ana C N Perdigão"
            tipo = "text" 
            tamanhoCampoTexto = "320px" 
            />

            <CampoTexto 
            label="Número do cartão" 
            obrigatorio={true} 
            placeholder="0000 0000 0000 0000"
            tipo = "number"
            tamanhoCampoTexto = "320px"
            />

            <div className='campos-menores'>
                <div className='data'>
                    <CampoTexto 
                    label="Expira em" 
                    obrigatorio={true} 
                    placeholder="MM"
                    tipo = "number"
                    tamanhoCampoTexto = "70px"
                    />

                    <CampoTexto 
                    label="(MM/AA)" 
                    obrigatorio={true} 
                    placeholder="AA"
                    tipo = "number"
                    tamanhoCampoTexto = "70px"
                    />
                </div>

                <CampoTexto 
                label="CVC" 
                obrigatorio={true} 
                placeholder="Ex.: 123"
                tipo = "number"
                tamanhoCampoTexto = "130px"
                />
            </div>

            <Botao>
                Confirmar
            </Botao>

        </form>

    )
}

export default Formulario