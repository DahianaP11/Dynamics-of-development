import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import MaestroProductos from "./components/MaestroProductos";
import MaestroUsuario from "./components/MaestroUsuario";
import MaestroVentas from "./components/MaestroVentas";
import RegProductos from "./components/RegProductos";
import RegVentas from "./components/RegVentas";
import NavBar from "./components/NavBar";
import Footer from "./components/Foooter";
import "./AppCss.css";

function App() {
  return (
    <div className="App">
      <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Inicio}/>
            <Route path="/Registro_Venta" exact component={RegVentas}/>
            <Route path="/Maestro_Ventas" exact component={MaestroVentas}/>
            <Route path="/Registro_Productos" exact component={RegProductos}/>
            <Route path="/Maestro_Productos" exact component={MaestroProductos}/>
            <Route path="/Maestro_Usuario" exact component={MaestroUsuario}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
