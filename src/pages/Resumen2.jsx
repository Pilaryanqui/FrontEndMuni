import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useTasks } from '../context/TaskProvider';
import { toast, ToastContainer } from 'react-toastify';

// Creación de un tema oscuro utilizando createTheme de Material-UI
const darkTheme = createTheme({
  palette: {
    mode: "dark"
  }
});

function Resumen2() {
// Extrae la función ResRegistro del contexto useTasks.
const { ResRegistro } = useTasks();

// Estado para almacenar las tareas y su función para actualizarlo.
const [tasks, setTasks] = useState([]);

// Obtiene los parámetros de la URL utilizando useParams.
const params = useParams();


// Función asincrónica para cargar todas las tareas utilizando la función ResRegistro.
  const loadTask = async () => {
    try {
      // Llama a la función ResRegistro para obtener todas las tareas.
      const allTasks = await ResRegistro();

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


  const getStatusColor = (status) => {
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
      name: "Tipo de Proceso",
      label: "Tipo de Proceso"
    },
    {
      name: "Estado del Proceso",
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
      name: "Área Requirente",
      label: "ÁREA REQUIRIENTE"
    },
    {
      name: "Administrador de Contratos",
      label: "Administrador de Contratos"
    },
  ];


  return (
    <div className="border border-slate-600 w-full text-sm text-left rtl:text-right text-white dark:text-gray-400">
      {/* Utiliza ThemeProvider para aplicar el tema oscuro a MUIDataTable y ToastContainer. */}
      <ThemeProvider theme={darkTheme}>
        {/* MUIDataTable para mostrar el resumen de Registro. */}
        <MUIDataTable
          title={"RESUMEN DE REGISTRO " + new Date().getFullYear()}
          data={tasks}
          columns={columns}
        />
        {/* ToastContainer para mostrar notificaciones de mensajes. */}
        <ToastContainer />
      </ThemeProvider>
    </div>
  );
}

export default Resumen2;
