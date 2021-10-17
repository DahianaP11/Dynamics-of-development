import './App.css';
import Inicio from './components/Inicio';
import MaestroProductos from './components/MaestroProductos';
import MaestroVentas from './components/MaestroVentas';
import RegProductos from './components/RegProductos';

function App() {
  return (
    <div className="App">
      <section>
        <MaestroProductos />
      </section>
    </div>
  );
}

export default App;
