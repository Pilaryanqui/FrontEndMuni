/* El código importa varios módulos y componentes de diferentes bibliotecas y archivos. */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useParams, useNavigate } from "react-router-dom";
import Logo3 from '../pages/Logo3.png'

function Navbar() {

  /* El código utiliza enlaces de React Router y un AuthContext personalizado para acceder al usuario
  actual, manejar la funcionalidad de cierre de sesión, obtener la ubicación actual y navegar a
  diferentes rutas. */
  const { currentUser, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="bg-green-800 flex justify-between px-10 py-4">
      {/* El código representa una imagen de logotipo envuelta en un componente `Link` de React Router. El
      accesorio `to` del componente `Link` se establece en "/Menu" o "/sesion" según el valor de la
      variable `currentUser`. Si `currentUser` es verdadero, el enlace navegará a "/Menú"; de lo
      contrario, navegará a "/sesion". La imagen del logotipo se muestra con los estilos especificados,
      incluido un margen a la izquierda, una altura de 78 píxeles y un ancho de 160 píxeles. */}
      <Link
        to={currentUser ? "/Menu" : "/sesion"}
        className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
      >
        <img
          src={Logo3}
          alt="Logo02"
          style={{ marginLeft: '5px', height: '78px', width: '160px' }}
        />
      </Link>

      {/* El bloque de código `{currentUser? ... : ...}` es una declaración de representación
      condicional en JavaScript. Comprueba si la variable `currentUser` tiene un valor verdadero (es
      decir, si el usuario ha iniciado sesión). Si &quot;currentUser&quot; es verdadero, representa
      un &quot;<div> ` elemento con un mensaje de bienvenida, un botón &quot;Cerrar Sesión&quot; y
      un botón &quot;Menú&quot;. */}
      {currentUser ? (
        <div className="flex items-center">
          <p className="text-white mr-2">¡Bienvenido/a, {currentUser}</p>
          <button
            className=" bg-stone-900 hover:bg-black text-white font-bold py-2 px-4 rounded-full"
            onClick={() => {
              logout();
              navigate("/sesion");
            }}
          >
            <div className="">Cerrar Sesión</div>
          </button>
          <div style={{ marginLeft: "10px" }}></div>
          <button
            className="bg-yellow-500 hover:bg-stone-900 text-black hover:text-white font-bold py-2 px-4 rounded-full"
            onClick={() => {
              navigate("/Menu");
            }}
          >
            <div className="">Menu</div>
          </button>
        </div>
      ) : (
        <ul className="flex gap-x-1 rounded-full justify-between px-5 py-5">
          <li className="">
            {/* El código representa un componente "Link" de React Router. El accesorio `to` del componente `Link`
            está configurado en "/crearUsuario", lo que significa que cuando se hace clic en el enlace, navegará
            a la ruta "/crearUsuario". */}
            <Link
              to="/crearUsuario"
              className={`bg-green-600 hover:bg-stone-900 text-white hover:text-white font-bold py-2 px-4 rounded-full ${
                location.pathname === "/crearUsuario"
              }`}
            >
              Registro
            </Link>
          </li>
          <li>
            {/* El código representa un componente "Link" de React Router. El accesorio `to` del componente `Link`
            está configurado en "/sesion", lo que significa que cuando se hace clic en el enlace, navegará a la
            ruta "/sesion". */}
            <Link
              to="/sesion"
              className={`bg-yellow-400 hover:bg-stone-900 text-black hover:text-white font-bold py-2 px-4 rounded-full ${
                location.pathname === "/sesion"
              }`}
            >
              Login
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
