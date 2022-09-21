import { useState } from 'react';
import './App.css';
import CardFrente from './components/CardFrente';
import CardVerso from './components/CardVerso';
import Formulario from './components/Formulario';

function App() {

  const [formValues, setFormValues] = useState({
    nome: '',
    numeroCartao: '',
    mes: '',
    ano: '',
    codigo: '',
  });


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
