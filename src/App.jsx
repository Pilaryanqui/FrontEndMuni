/* El código importa varios componentes y módulos de diferentes archivos. A continuación se muestra un
desglose de lo que hace cada declaración de importación: */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // Importa el AuthProvider desde la carpeta context
import NotFound from './pages/NotFound.jsx';
import { TaskContextProvider } from './context/TaskProvider.jsx';
import Navbar from './components/Navbar.jsx';
import TaskForm1 from './pages/TaskForm1.jsx';
import InicioU from './pages/InicioU.jsx';
import Menu from './pages/Menu.jsx';
import Registro from './pages/Registro.jsx';
import Tabla2 from './pages/Tabla2.jsx';
import RegistroInfima from './pages/RegistroInfima.jsx';
import VistaTabla2 from './pages/VistaTabla2.jsx';
import RegistroContrato from './pages/RegistroContrato.jsx';
import CrearAreaRequeriente from './pages/Area.jsx';
import Procesos from './pages/Procesos.jsx';
import VistaTabla4 from './pages/VistaTabla4.jsx';
import Resumen1 from './pages/Resumen1.jsx';
import Menu2 from './pages/Menu2.jsx';
import Resumen2 from './pages/Resumen2.jsx';

/* El código define el componente principal de la aplicación, "App". Es un componente funcional que
devuelve código JSX. */
function App() {
  return (
    <div className='bg-white h-screen '>
      {/* El código envuelve un conjunto de rutas con el componente `AuthProvider`. */}
      <AuthProvider> {/* Agrega el AuthProvider para gestionar el contexto de autenticación */}
        <Navbar /> {/* Navbar está representando el componente Navbar */}
        <div className=' py-6 px-5'>
          <TaskContextProvider>
            {/* El bloque de código define las rutas para la aplicación utilizando los componentes `Routes` y
            `Route` de la biblioteca `react-router-dom`. Cada componente "Ruta" representa una ruta específica
            en la aplicación y especifica el componente que se representará cuando esa ruta coincida. */}
            <Routes>
              <Route path='/' element={<InicioU />} />
              <Route path='/crearUsuario' element={<TaskForm1 />} />
              <Route path='/sesion' element={<InicioU />} />
              <Route path='/Menu' element={<Menu />} />
              <Route path='/Registro' element={<Registro />} />
              <Route path='/Vista2' element={<Tabla2 />} />
              <Route path="/editRegistro/:id" element={<Registro />} />
              <Route path="/RegistroInf" element={<RegistroInfima />} />
              <Route path="/editarInf/:id" element={<RegistroInfima />} />
              <Route path="/VistInf" element={<VistaTabla2 />} />
              <Route path="/RegisContrato" element={<RegistroContrato />} />
              <Route path="/VistaContrato" element={<VistaTabla4 />} />
              <Route path="/ContratoN/:id" element={<RegistroContrato />} />
              <Route path="/crearArea" element={<CrearAreaRequeriente/>} />
              <Route path="/crearproceso" element={<Procesos/>} />
              <Route path="/resumencatalogo" element={<Resumen1/>} />
              <Route path="/Menu2" element={<Menu2/>} />
              <Route path="/resumenregistro" element={<Resumen2/>} />
              
              <Route path='*' element={<NotFound />} />
            </Routes>
          </TaskContextProvider>
        </div>
      </AuthProvider>
    </div>
  );
}

export default App;
