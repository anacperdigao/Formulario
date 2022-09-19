import './App.css';
import CardFrente from './componentes/CardFrente';
import Formulario from './componentes/Formulario';

function App() {
  return (
    <div className="App">
      <section className='container__cards'>
        <CardFrente />
      </section>
      
      <section className='container__formulario'>
        <Formulario />
      </section>
    </div>
  );
}

export default App;
