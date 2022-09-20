import { useState } from 'react';
import './App.css';
import CardFrente from './componentes/CardFrente';
import CardVerso from './componentes/CardVerso';
import Formulario from './componentes/Formulario';

function App() {
  

  const [input, setInput] = useState([])
    //TESTE console.log(input)
  
  return (
    <div className="App">
      
      <section>     
 
      <CardFrente
        nome = {input.map(input => input.nome)} 
        numeroCartao = {input.map(input => input.numeroCartao)} 
        mes = {input.map(input => input.mes)}
        ano = {input.map(input => input.ano)}
      />

      <CardVerso 
        codigo = {input.map(input => input.codigo)}
      />

      </section>
      
      <section>
        <Formulario aoCartaoCadastrado = {input => setInput([input])}/>
      </section>
    
    </div>
  );
}

export default App;
