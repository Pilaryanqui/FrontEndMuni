// Importaciones de React y módulos necesarios
import React, { useState, useEffect } from "react";
import { useTasks } from "../context/TaskProvider";
import { useNavigate } from "react-router-dom";

function CrearAreaRequeriente() {
  // Importa funciones y estados necesarios del contexto 'useTasks'
  const { create_Area, verdatosArea, updateArea, deleteArea, getIdArea } = useTasks();
  // Estado local para almacenar los datos de una nueva área
  const [nuevaArea, setNuevaArea] = useState({ Nombre_Area: "" });
  // Estado local para almacenar la lista de áreas requerientes
  const [areasRequerientes, setAreasRequerientes] = useState([]);
  // Estado local para almacenar el ID de la área que está siendo editada
  const [editingAreaId, setEditingAreaId] = useState(null);
  // Utiliza el hook 'useNavigate' de React Router para la navegación
  const navigate = useNavigate();

  // Efecto secundario: obtiene y actualiza la lista de áreas requerientes al montar el componente
  useEffect(() => {
    // Función asincrónica para obtener las áreas requerientes
    const fetchAreasRequerientes = async () => {
      try {
        // Llama a la función del contexto para obtener los datos de las áreas requerientes
        const areasData = await verdatosArea();
        // Actualiza el estado local con la lista de áreas requerientes
        setAreasRequerientes(areasData);
      } catch (error) {
        // Manejo de errores en caso de que la obtención de áreas falle
        console.error("Error al obtener áreas requerientes", error);
      }
    };

    // Llama a la función para obtener las áreas requerientes al montar el componente
    fetchAreasRequerientes();
  }, []);

  // Función para manejar el cambio de entrada (input) en el formulario de nueva área
  const handleInputChange = (e) => {
    // Actualiza el estado local 'nuevaArea' con los valores actuales del formulario
    setNuevaArea({ ...nuevaArea, [e.target.name]: e.target.value });
  };

  // Función para navegar a la ruta '/RegisContrato' al hacer clic en un botón
  const boton2 = () => {
    // Utiliza el hook 'useNavigate' para navegar a la ruta '/RegisContrato'
    navigate(`/RegisContrato`);
  };

  // Función para manejar la presentación del formulario (submit)
  const handleSubmit = async (e) => {
    // Evita que el formulario se envíe de manera predeterminada
    e.preventDefault();
    try {
      // Verifica si se está editando una área actualmente
      if (editingAreaId !== null) {
        console.log("Completa la edición actual antes de crear una nueva.");
        return;
      }
      // Llama a la función del contexto para crear un área con los datos proporcionados
      await create_Area(nuevaArea);

      // Actualiza la lista de áreas requerientes después de la creación
      const areasData = await verdatosArea();
      setAreasRequerientes(areasData);
      // Restablece el estado local para el formulario de nueva área
      setNuevaArea({ Nombre_Area: "" });
    } catch (error) {
      console.error("Error al crear el área requeriente", error);
    }
  };

  // Función para iniciar la edición de un área requeriente por su ID
  const handleUpdate = async (ID_Area) => {
    try {
      // Verifica si se está editando un área actualmente
      if (editingAreaId !== null) {
        console.log("Completa la edición actual antes de empezar una nueva.");
        return;
      }
      // Establece el ID del área que se está editando
      setEditingAreaId(ID_Area);

      // Obtener los detalles del área por ID
      const areaEnEdicion = await getIdArea(ID_Area);

      // Establecer el nombre del área en el estado para edición
      setNuevaArea({ Nombre_Area: areaEnEdicion.Nombre_Area });
    } catch (error) {
      console.error("Error al iniciar la edición del área requeriente", error);
    }
  };

  // Función para finalizar la edición de un área requeriente
  const handleFinishEditing = async () => {
    try {
      // Encuentra el área en edición en la lista de áreas requerientes
      const areaEnEdicion = areasRequerientes.find(
        (area) => area.ID_Area === editingAreaId
      );

      // Verifica si el área en edición no se encuentra
      if (!areaEnEdicion) {
        console.error("Área en edición no encontrada.");
        return;
      }
      // Llama a la función del contexto para actualizar el área con los nuevos datos
      await updateArea(editingAreaId, { Nombre_Area: nuevaArea.Nombre_Area });

      // Restablece el estado de edición
      setEditingAreaId(null);

      // Actualiza solo el área específica en el estado local
      setAreasRequerientes((prevAreas) =>
        prevAreas.map((area) =>
          area.ID_Area === editingAreaId
            ? { ...area, Nombre_Area: nuevaArea.Nombre_Area }
            : area
        )
      );
      // Restablece el estado local para el formulario de nueva área
      setNuevaArea({ Nombre_Area: "" });
    } catch (error) {
      console.error(
        "Error al finalizar la edición del área requeriente",
        error
      );
    }
  };

  // Función para manejar la eliminación de un área requeriente por su ID
  const handleDelete = async (ID_Area) => {
    try {
      // Llama a la función del contexto para eliminar el área por su ID
      await deleteArea(ID_Area);
      // Actualiza la lista de áreas requerientes después de la eliminación
      const areasData = await verdatosArea();
      setAreasRequerientes(areasData);
    } catch (error) {
      // Manejo de errores en caso de que la eliminación de área falle
      console.error("Error al eliminar el área requeriente", error);
    }
  };


  return (
    <div className="container mx-auto p-8">
      <form
        onSubmit={editingAreaId !== null ? handleFinishEditing : handleSubmit}
        className="mb-8"
      >
        <label className="block mb-4">
          <span className="text-gray-700 text-white ">
            Nombre del Área Requeriente:
          </span>
          <input
            type="text"
            name="Nombre_Area"
            value={nuevaArea.Nombre_Area}
            onChange={handleInputChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
          />
        </label>
        <button
          type="submit"
          className={`bg-${
            editingAreaId !== null ? "green" : "blue"
          }-500 text-white font-bold py-2 px-4 rounded`}
        >
          {editingAreaId !== null
            ? "Guardar Cambios"
            : "Crear Área Requeriente"}
        </button>
      </form>
      <button
        className="space-y-2 bg-red-500 text-white font-bold py-1 px-2 rounded"
        onClick={boton2}
      >
        Regresar
      </button>

      <div>
        <h2 className="text-white text-xl font-bold mb-4">
          Áreas Requerientes:
        </h2>
        <ul>
          {areasRequerientes.map((area) => (
            <li
              key={area.ID_Area}
              className="flex items-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
            >
              <span className="flex-grow">{area.Nombre_Area}</span>
              <div className="ml-auto">
                <button
                  onClick={() => handleUpdate(area.ID_Area)}
                  className="bg-green-500 text-white font-bold py-1 px-2 rounded mr-2"
                >
                  Actualizar
                </button>
                <button
                  onClick={() => handleDelete(area.ID_Area)}
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

export default CrearAreaRequeriente;
