import React, { useState, useEffect } from 'react';
import { useTasks } from '../context/TaskProvider';
import { useNavigate } from 'react-router-dom';

function Procesos() {
  // Extrae funciones y datos relacionados con los procesos del contexto.
  const { create_Procesos, verdatosProcesos, updateProcesos, deleteProcesos, getIdProcesos } = useTasks();

  // Estado para almacenar la nueva área requerida.
  const [nuevaArea, setNuevaArea] = useState({ Nombre_Estado: '' });

  // Estado para almacenar la lista de áreas requeridas.
  const [areasRequerientes, setAreasRequerientes] = useState([]);

  // Estado para almacenar el ID de la área que se está editando actualmente.
  const [editingAreaId, setEditingAreaId] = useState(null);

  // Hook de navegación para redirigir a otras páginas.
  const navigate = useNavigate();


  // Efecto secundario para cargar las áreas requerientes al cargar el componente.
  useEffect(() => {
    // Función asincrónica para obtener las áreas requerientes.
    const fetchAreasRequerientes = async () => {
      try {
        // Obtiene los datos de las áreas requerientes.
        const areasData = await verdatosProcesos();
        // Actualiza el estado con las áreas requerientes obtenidas.
        setAreasRequerientes(areasData);
      } catch (error) {
        // Manejo de errores en caso de fallo al obtener las áreas requerientes.
        console.error('Error al obtener áreas requerientes', error);
      }
    };

    // Llama a la función para cargar las áreas requerientes al montar el componente.
    fetchAreasRequerientes();
  }, []); 


  // Maneja el cambio en los campos de entrada y actualiza el estado de la nueva área.
  const handleInputChange = (e) => {
    // Actualiza el estado de la nueva área con el valor del campo de entrada cambiado.
    setNuevaArea({ ...nuevaArea, [e.target.name]: e.target.value });
  };


  // Maneja el evento del botón y navega a la ruta '/RegisContrato'.
  const boton1 = () => {
    // Utiliza el hook 'navigate' para redirigir a la ruta '/RegisContrato'.
    navigate(`/RegisContrato`);
  };

  // Maneja el envío del formulario para crear una nueva área requeriente.
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Verifica si ya hay una área en proceso de edición antes de crear una nueva.
      if (editingAreaId !== null) {
        console.log('Completa la edición actual antes de crear una nueva.');
        return;
      }

      // Llama a la función para crear una nueva área requeriente.
      await create_Procesos(nuevaArea);

      // Actualiza la lista de áreas requerientes después de la creación.
      const areasData = await verdatosProcesos();
      setAreasRequerientes(areasData);

      // Restablece el estado de la nueva área.
      setNuevaArea({ Nombre_Estado: '' });
    } catch (error) {
      console.error('Error al crear el área requeriente', error);
    }
  };


  // Maneja la preparación para la edición de un área requeriente al hacer clic en el botón de actualización.
  const handleUpdate = async (ID_Estado) => {
    try {
      // Verifica si ya hay un área en proceso de edición antes de comenzar una nueva.
      if (editingAreaId !== null) {
        console.log('Completa la edición actual antes de empezar una nueva.');
        return;
      }

      // Establece el ID del área actualmente en edición.
      setEditingAreaId(ID_Estado);

      // Obtiene los detalles del área por su ID.
      const areaEnEdicion = await getIdProcesos(ID_Estado);

      // Establece el nombre del área en el estado para la edición.
      setNuevaArea({ Nombre_Estado: areaEnEdicion.Nombre_Estado });
    } catch (error) {
      console.error('Error al iniciar la edición del área requeriente', error);
    }
  };


// Maneja la finalización de la edición de un área requeriente al guardar los cambios.
const handleFinishEditing = async () => {
  try {
    // Encuentra el área en edición en la lista de áreas requerientes.
    const areaEnEdicion = areasRequerientes.find((area) => area.ID_Estado === editingAreaId);

    // Verifica si el área en edición existe.
    if (!areaEnEdicion) {
      console.error('Área en edición no encontrada.');
      return;
    }

    // Actualiza el área en la base de datos.
    await updateProcesos(editingAreaId, { Nombre_Estado: nuevaArea.Nombre_Estado });

    // Finaliza la edición y restablece el ID de edición.
    setEditingAreaId(null);

    // Actualiza solo el área específica en el estado local.
    setAreasRequerientes(prevAreas => prevAreas.map(area =>
      area.ID_Estado === editingAreaId ? { ...area, Nombre_Estado: nuevaArea.Nombre_Estado } : area
    ));

    // Restablece el estado del área en edición.
    setNuevaArea({ Nombre_Estado: '' });
  } catch (error) {
    console.error('Error al finalizar la edición del Proceso requeriente', error);
  }
};


// Maneja la eliminación de un área requeriente.
const handleDelete = async (ID_Estado) => {
  try {
    // Elimina el área requeriente de la base de datos.
    await deleteProcesos(ID_Estado);

    // Actualiza la lista de áreas requerientes después de la eliminación.
    const areasData = await verdatosProcesos();
    setAreasRequerientes(areasData);
  } catch (error) {
    console.error('Error al eliminar el área requeriente', error);
  }
};



  return (
    <div className="container mx-auto p-8">
      <form onSubmit={editingAreaId !== null ? handleFinishEditing : handleSubmit} className="mb-8">
        <label className="block mb-4">
          <span className="text-gray-700 text-white ">Nombre del Proceso:</span>
          <input
            type="text"
            name="Nombre_Estado"
            value={nuevaArea.Nombre_Estado}
            onChange={handleInputChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
          />
        </label>
        
        <button
          type="submit"
          className={`bg-${editingAreaId !== null ? 'green' : 'blue'}-500 text-white font-bold py-2 px-4 rounded`}
        >
          {editingAreaId !== null ? 'Guardar Cambios' : 'Crear Área Requeriente'}
        </button>

          
      </form>
      <button
            className='space-y-2 bg-red-500 text-white font-bold py-1 px-2 rounded'
            onClick={boton1}
          >
            Regresar
      </button>

      <div>
  <h2 className="text-black text-xl font-bold mb-4">Los Procesos:</h2>
  <ul>
    {areasRequerientes.map((area) => (
      <li key={area.ID_Estado} className="flex items-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3">
        <span className="flex-grow text-black">{area.Nombre_Estado}</span>
        <div className="ml-auto">
          <button
            onClick={() => handleUpdate(area.ID_Estado)}
            className="bg-green-500 text-white font-bold py-1 px-2 rounded mr-2"
          >
            Actualizar
          </button>
          <button
            onClick={() => handleDelete(area.ID_Estado)}
            className="bg-red-500 text-white font-bold py-1 px-2 rounded"
          >
            Eliminar
          </button>
        </div>
      </li>
    ))}
  </ul>
</div>

    </div>
  );
}

export default Procesos;



