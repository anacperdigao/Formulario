import { useState } from 'react';
import './App.css';
import CardFrente from './components/CardFrente';
import CardVerso from './components/CardVerso';
import Formulario from './components/Formulario';

function App() {
  const [input, setInput] = useState([]);
  const [formValues, setFormValues] = useState({
    nome: '',
    numeroCartao: '',
    mes: '',
    ano: '',
    codigo: '',
  });

  //TESTE console.log(input)

  return (
    <div className="App">
      <section>
        <CardFrente formValues={formValues} />

        <CardVerso codigo={input.map((input) => input.codigo)} />
      </section>

      <section>
        <Formulario
          aoCartaoCadastrado={(input) => setInput([input])}
          setFormValues={setFormValues}
        />
      </section>
    </div>
  );
}

export default App;
