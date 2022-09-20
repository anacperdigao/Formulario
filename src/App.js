import { useState } from 'react';
import './App.css';
import CardFrente from './componentes/CardFrente';
import CardVerso from './componentes/CardVerso';
import Formulario from './componentes/Formulario';

function App() {
  

  const [input, setInput] = useState([])
    //TESTE console.log(input)

  const aoNovoCartaoCadastrado = (input) => {
    setInput([input])
    //TESTE console.log(input.nome)
  }
  
  return (
    <div className="App">
      
      <section>     

      {input.map(input => 
      <CardFrente 
        key={input.nome} 
        nome = {input.nome} 
        numeroCartao = {input.numeroCartao} 
        mes = {input.mes} 
        ano = {input.ano}
      />)}

      {input.map(input => 
      <CardVerso 
        key={input.nome} 
        codigo = {input.codigo} 
      />)}

      </section>
      
      <section>
        <Formulario aoCartaoCadastrado = {input => aoNovoCartaoCadastrado(input)}/>
      </section>
    
    </div>
  );
}

export default App;
