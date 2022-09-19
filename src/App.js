import './App.css';
import CardFrente from './componentes/CardFrente';
import CardVerso from './componentes/CardVerso';
import Formulario from './componentes/Formulario';

function App() {
  return (
    <div className="App">
      <section className='container__cards'>
        <CardFrente />
        <CardVerso />
      </section>
      
      <section className='container__formulario'>
        <Formulario />
      </section>
    </div>
  );
}

export default App;
