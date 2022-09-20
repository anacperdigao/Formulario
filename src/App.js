import { useState } from 'react';
import './App.css';
import CardFrente from './componentes/CardFrente';
import CardVerso from './componentes/CardVerso';
import Formulario from './componentes/Formulario';

function App() {
  
  const [input, setInput] = useState([])
    console.log(input)

  const aoNovoCartaoCadastrado = (input) => {
    console.log(input.nome)
    setInput([input])
  }
  
  return (
    <div className="App">
      
      <section>
        <CardFrente 
          nome = {input.nome} 
          numeroCartao = {input.numeroCartao} 
          mes = {input.mes} 
          ano = {input.ano}
        />

        <CardVerso 
          codigo = {input.codigo}
        />
      </section>
      
      <section>
        <Formulario aoCartaoCadastrado = {aoNovoCartaoCadastrado}/>
      </section>
    
    </div>
  );
}

export default App;
