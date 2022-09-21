import { useState } from 'react';
import './App.css';
import CardFrente from './components/CardFrente';
import CardVerso from './components/CardVerso';
import Formulario from './components/Formulario';

function App() {
  // const [input, setInput] = useState([]);
  const [formValues, setFormValues] = useState({
    nome: '',
    numeroCartao: '',
    mes: '',
    ano: '',
    codigo: '',
  });

  /*
    input -> [
      {
      nome: ana,
      numeroCartao: 123123123123,
      mes: 12,
      ano: 27,
      codigo: 123,
    }
    ]
  */
  // nome = {input[0].nome}

  return (
    <div className="App">
      <section>
        <CardFrente formValues={formValues} />

        <CardVerso codigo={formValues.codigo} />
      </section>

      <section>
        <Formulario formValues={formValues} setFormValues={setFormValues} />
      </section>
    </div>
  );
}

export default App;
