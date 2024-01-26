// Importa React y varios hooks y componentes de Material-UI.
import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import { useParams, useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useTasks } from '../context/TaskProvider';
import { toast, ToastContainer } from 'react-toastify';

// Creación de un tema oscuro utilizando createTheme de Material-UI.
const darkTheme = createTheme({
  // Configuración de la paleta para el modo oscuro.
  palette: {
    mode: "dark" // Establece el modo oscuro para la paleta.
  }
});


function Resumen1() {
  // Utiliza el hook useTasks para obtener el estado 'ver_todo' del contexto TaskProvider.
  const { ver_todo } = useTasks();

  // Declaración de estado utilizando el hook useState para almacenar las tareas.
  const [tasks, setTasks] = useState([]);

  // Obtén los parámetros de la URL utilizando el hook useParams.
  const params = useParams();

  // Función asincrónica para cargar todas las tareas utilizando el estado 'ver_todo' del contexto TaskProvider.
  const loadTask = async () => {
    try {
      // Llama a la función 'ver_todo' del contexto TaskProvider para obtener todas las tareas.
      const allTasks = await ver_todo();

      // Actualiza el estado 'tasks' con las tareas obtenidas.
      setTasks(allTasks);
    } catch (error) {
      // Maneja cualquier error durante la carga de tareas, imprimiéndolo en la consola.
      console.error(error);
    }
  };


  // Utiliza el hook useEffect para cargar las tareas al montar o cuando params.id cambia.
  useEffect(() => {
    // Llama a la función loadTask para cargar las tareas.
    loadTask();
  }, [params.id]);


// Función para obtener el color asociado a un estado específico.
const getStatusColor = (status) => {
  // Utiliza un switch para asignar colores basados en el estado proporcionado.
  switch (status) {
    case 'En proceso':
      return '#ffcc00'; // Amarillo
    case 'Completado':
      return '#00cc66'; // Verde
    case 'Pendiente':
      return '#ff6666'; // Rojo
    default:
      return '#000000'; // Negro por defecto
  }
};


  const getStatusStyle = (status) => {
    return {
      backgroundColor: getStatusColor(status),
      color: '#ffffff', // Color de texto blanco
      padding: '8px', // Ajusta el relleno según sea necesario
      borderRadius: '4px' // Ajusta el radio de borde según sea necesario
    };
  };

  // Configuración de las columnas para el componente MUIDataTable.
  const columns = [
    {
      name: "Tipo_de_Proceso",
      label: "Tipo de Proceso"
    },
    {
      name: "Estado_del_Proceso",
      label: "Estado del Proceso",
      options: {
        // Utiliza customBodyRender para personalizar la representación del cuerpo de la celda.
        customBodyRender: (value) => (
          <div style={getStatusStyle(value)}>
            {value}
          </div>
        )
      }
    },
    {
      name: "Área_Requirente",
      label: "ÁREA REQUIRIENTE"
    },
    {
      name: "Administrador_de_Contratos",
      label: "Administrador de Contratos"
    },
  ];

  return (
    <div className="border border-slate-600 w-full text-sm text-left rtl:text-right text-white dark:text-gray-400">
      {/* Utiliza ThemeProvider para aplicar el tema oscuro a MUIDataTable y ToastContainer. */}
      <ThemeProvider theme={darkTheme}>
        {/* MUIDataTable para mostrar el resumen del catálogo. */}
        <MUIDataTable
          title={"RESUMEN DE CATALOGO " + new Date().getFullYear()}
          data={tasks}
          columns={columns}
        />
        {/* ToastContainer para mostrar notificaciones de mensajes. */}
        <ToastContainer />
      </ThemeProvider>
    </div>
  );
}

export default Resumen1;

