import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBook, faInfo, faChartBar } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Menu2 = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [clickedCard, setClickedCard] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (index) => {
    setClickedCard(index);

    if (cardsData[index].title === 'Resumen de Registro') {
      navigate('/resumenregistro');
    }
    if (cardsData[index].title === 'Resumen de Catálogo') {
      navigate('/resumencatalogo');
    }
  };

  const handleMouseEnter = (index) => {
    if (clickedCard !== index) {
      setHoveredCard(index);
    }
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const cardsData = [
    { title: 'Resumen de Registro', content: 'Resumen de Registro...', icon: faUser, color: 'bg-blue-900 bg-opacity-50' },
    { title: 'Resumen de Catálogo', content: 'Resumen de catálogo...', icon: faBook, color: 'bg-red-900 bg-opacity-50' },
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

export default Menu2;


