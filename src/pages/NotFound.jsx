import React from 'react';
// Página de error 404 (No Encontrado) que se muestra cuando una ruta no existe.
function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Not Found</h1>
        <p className="text-lg text-gray-600">Sorry, the page you are looking for does not exist.</p>
      </div>
    </div>
  );
}

export default NotFound;
