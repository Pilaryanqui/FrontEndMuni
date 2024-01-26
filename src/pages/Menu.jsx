// Importa React y useState para la gestión de estado.
// Importa FontAwesomeIcon y los íconos necesarios de FontAwesome.
// Importa useNavigate de react-router-dom para la navegación.

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBook, faInfo, faChartBar } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  // Estados locales para gestionar el card sobre el que se pasa el ratón y el card que se ha hecho clic.
  const [hoveredCard, setHoveredCard] = useState(null);
  const [clickedCard, setClickedCard] = useState(null);

  // Hook de navegación de react-router-dom para redirigir a otras páginas.
  const navigate = useNavigate();


  // Maneja el clic en un card actualizando el estado clickedCard y redirigiendo a la página correspondiente.
  const handleCardClick = (index) => {
    // Actualiza el estado clickedCard con el índice del card clicado.
    setClickedCard(index);

    // Utiliza el título del card para determinar la ruta de redirección.
    if (cardsData[index].title === 'Registro') {
      navigate('/Vista2');
    }
    if (cardsData[index].title === 'Infima') {
      navigate('/VistInf');
    }
    if (cardsData[index].title === 'Catálogo') {
      navigate('/VistaContrato');
    }
    if (cardsData[index].title === 'Resumen') {
      navigate('/Menu2');
    }
  };

  // Maneja el evento onMouseEnter para actualizar el estado hoveredCard si el card no ha sido clicado.
  const handleMouseEnter = (index) => {
    // Actualiza el estado hoveredCard solo si el card no ha sido clicado.
    if (clickedCard !== index) {
      setHoveredCard(index);
    }
  };


  // Maneja el evento onMouseLeave para restablecer el estado hoveredCard a null.
  const handleMouseLeave = () => {
    // Restablece el estado hoveredCard a null al salir del área del card.
    setHoveredCard(null);
  };

  // Datos de los cards que se muestran en la interfaz.
  const cardsData = [
    { title: 'Registro', content: 'Contenido del registro...', icon: faUser, color: 'bg-blue-900 bg-opacity-50' },
    { title: 'Catálogo', content: 'Contenido del catálogo...', icon: faBook, color: 'bg-red-900 bg-opacity-50' },
    { title: 'Infima', content: 'Contenido de Infima...', icon: faInfo, color: 'bg-green-900 bg-opacity-50' },
    { title: 'Resumen', content: 'Contenido del resumen...', icon: faChartBar, color: 'bg-yellow-900 bg-opacity-50' },
  ];

  return (
    <div className='my-16 sm:mx-auto sm:w-full sm:max-w-sm'>
      <div className="items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className={`${
                (clickedCard === index ? 'clicked' : '')
              } ${card.color} p-4 rounded-lg shadow-md cursor-pointer transition duration-300 transform ${
                hoveredCard === index ? 'scale-105' : 'scale-100'
              } flex flex-col items-center justify-center`}
              onClick={() => handleCardClick(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={card.icon} className="text-2xl mr-2" />
                <h2 className="text-xl font-bold">{card.title}</h2>
              </div>
              <p>{card.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;


