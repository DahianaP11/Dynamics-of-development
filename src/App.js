import "./App.css";
import Inicio from "./components/Inicio";
import MaestroProductos from "./components/MaestroProductos";
import MaestroUsuario from "./components/MaestroUsuario";
import MaestroVentas from "./components/MaestroVentas";
import RegProductos from "./components/RegProductos";
import RegVentas from "./components/RegVentas";

function App() {
  return (
    <div className="App">
      <section>
        <MaestroUsuario />
      </section>
    </div>
  );
}

export default App;
