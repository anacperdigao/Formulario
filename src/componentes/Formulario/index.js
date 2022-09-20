import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import './Formulario.css'
import { useState } from 'react'

const Formulario = (props) => {
    
    const [nome , setNome] = useState('')
    const [numeroCartao , setNumeroCartao] = useState('')
    const [mes , setMes] = useState('')
    const [ano , setAno] = useState('')
    const [codigo , setCodigo] = useState('')
    
    const aoSalvar = (evento) => {
        evento.preventDefault()
        //TESTE console.log(nome, numeroCartao, mes, ano, codigo)
        props.aoCartaoCadastrado({
            nome,
            numeroCartao,
            mes,
            ano,
            codigo
        })

        //Aqui é só pra limpar o formulário
        setNome('')
        setNumeroCartao('')
        setMes('')
        setAno('')
        setCodigo('')
    }

    return(
        <form onSubmit={aoSalvar} className='formulario'>
            <CampoTexto 
            label="Nome como está no cartão" 
            obrigatorio={true} 
            placeholder="Ana C N Perdigão"
            tipo = "text" 
            tamanhoCampoTexto = "320px"
            valor = {nome}
            aoAlterado = {valor => setNome(valor)} 
            />

            <CampoTexto 
            label="Número do cartão" 
            obrigatorio={true} 
            placeholder="0000 0000 0000 0000"
            tipo = "number"
            tamanhoCampoTexto = "320px"
            valor = {numeroCartao}
            aoAlterado = {valor => setNumeroCartao(valor)}
            />

            <div className='campos-menores'>
                <div className='data'>
                    <CampoTexto 
                    label="Expira em" 
                    obrigatorio={true} 
                    placeholder="MM"
                    tipo = "number"
                    tamanhoCampoTexto = "70px"
                    valor = {mes}
                    aoAlterado = {valor => setMes(valor)}
                    />

                    <CampoTexto 
                    label="(MM/AA)" 
                    obrigatorio={true} 
                    placeholder="AA"
                    tipo = "number"
                    tamanhoCampoTexto = "70px"
                    valor = {ano}
                    aoAlterado = {valor => setAno(valor)}
                    />
                </div>

                <CampoTexto 
                label="CVC" 
                obrigatorio={true} 
                placeholder="Ex.: 123"
                tipo = "number"
                tamanhoCampoTexto = "130px"
                valor = {codigo}
                aoAlterado = {valor => setCodigo(valor)}
                />
            </div>

            <Botao>
                Confirmar
            </Botao>
        </form>

    )
}

export default Formulario