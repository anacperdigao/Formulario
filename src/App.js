/* eslint-disable prettier/prettier */
import { useState } from 'react';
import './App.css';
import CadastroFinalizado from './components/CadastroFinalizado';
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

  const [aoFinalizado, setAoFinalizado] = useState(true);

  return (
    <div className="App">
      <section className="cards">
        <CardFrente formValues={formValues} />
        <CardVerso codigo={formValues.codigo} />
      </section>

      <section>
        {aoFinalizado
        ? <Formulario formValues={formValues} setFormValues={setFormValues} setAoFinalizado={setAoFinalizado}/>
        : <CadastroFinalizado setAoFinalizado={setAoFinalizado} setFormValues={setFormValues}/>}
      </section>

    </div>
  );
}

export default App;
