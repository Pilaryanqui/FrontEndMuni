// Importaciones necesarias de React y ReactDOM.
import React from 'react';
import ReactDOM from 'react-dom';

// Importa el componente principal de la aplicación (App) y los estilos del índice.
import App from './App.jsx';
import './index.css';

// Importa el componente BrowserRouter de react-router-dom para la gestión de rutas en la aplicación.
import { BrowserRouter } from 'react-router-dom';

// Utiliza ReactDOM.render para renderizar el componente principal (App) dentro del elemento con el ID 'root' en el HTML.
ReactDOM.render(
  // Envuelve la aplicación con el componente BrowserRouter para habilitar la navegación por rutas.
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  // Selecciona el elemento del DOM con el ID 'root' para renderizar la aplicación.
  document.getElementById('root')
);
