import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Login from "./Componentes/Login";
import Calendario from "./Componentes/Calendario";

import Lateral from "./Componentes/Lateral";
import Register from "./Componentes/Register";
import FormModal from "./Componentes/FormModal";
import CrudUsers from "./Componentes/CrudUsers";
import Tablas from "./Componentes/Tablas";
import Perfil from "./Componentes/Perfil";

import Dependencia from "./Componentes/Dependencia";
import Recurso from "./Componentes/Recurso";
import CrudDependencia from "./Componentes/CrudDependencia";
import CrudRecursos from "./Componentes/CrudRecursos";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/calendario" element={<Calendario />} />

          <Route path="/lateral" element={<Lateral />} />
          <Route path="/register" element={<Register />} />
          <Route path="/modal" element={<FormModal />} />
          <Route path="/users" element={<CrudUsers />} />
          <Route path="/tabla" element={<Tablas />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/dependencia" element={<Dependencia />} />
          <Route path="/recurso" element={<Recurso />} />
          <Route path="/dependencias" element={<CrudDependencia />} />
          <Route path="/recursos" element={<CrudRecursos />} />
          
          
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
