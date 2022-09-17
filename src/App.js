import './App.css';
import CampoTexto from './componentes/CampoTexto';
import Formulario from './componentes/Formulario';

function App() {
  return (
    <div className="App">
      <section className='container__cards'>
        <p>cards</p>
      </section>
      
      <section className='container__formulario'>
        <Formulario />
      </section>
    </div>
  );
}

export default App;
