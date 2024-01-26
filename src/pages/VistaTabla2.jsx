import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import { useParams, useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useTasks } from '../context/TaskProvider';
import { toast, ToastContainer } from 'react-toastify';


const darkTheme = createTheme({
  palette: {
    mode: "dark"
  }
});

function VistaTabla2() {
  const { ver_Infima, deleteInf } = useTasks();
  const navigate = useNavigate();
  const [tasks, setTasks ] = useState([]);
  const params = useParams();
  
  

  const loadTask = async () => {
    try {
      // Carga todos los registros
      const allTasks = await ver_Infima();
      setTasks(allTasks);

    } catch (error) {
      console.error(error);
    }
  };

  const CustomConfirmationDialog = ({ closeToast, confirmAction, rowIndex }) => (
    <div>
      <div>¿Estás seguro de que deseas eliminar este registro?</div>
      <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-full" onClick={() => { confirmAction(rowIndex); closeToast(); }}>Sí</button>
      <button className="bg-red-600 text-white font-bold py-2 px-4 rounded-full" onClick={() => { closeToast(); }}>Cancelar</button>
    </div>
  );
  

  useEffect(() => {
    // Llama a loadTasks al montar el componente y cuando params.id cambia
    loadTask();

  }, [params.id]);


  const handleEdit = (rowIndex) => {
    const selectedRowId = tasks[rowIndex].id;
    navigate(`/editarInf/${selectedRowId}`);
  };
  

  const handleDelete = async (rowIndex) => {
    try {
      if (tasks.length === 0 || rowIndex === undefined) {
        return;
      }

      const taskId = tasks[rowIndex].id;

      toast.info(
        <CustomConfirmationDialog
          confirmAction={async (rowIndex) => {
            const taskId = tasks[rowIndex].id;
            await deleteInf(taskId);
            setTasks((prevTasks) =>
              prevTasks.filter((task) => task.id !== taskId)
            );
            toast.success("Registro eliminado exitosamente");
          }}
          rowIndex={rowIndex}
        />,
        {
          position: "top-right",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  const CustomToolbar = () => (
    <div className="flex justify-between items-center">
      <div className="font-bold text-2xl text-white hover:text-green-500">
      <h2>REGISTRO DE INFIMA {new Date().getFullYear()}</h2>
      </div>
      <div>
      <button
            className="bg-green-500 hover:bg-stone-900 text-black hover:text-white font-bold py-2 px-4 rounded-full"
            onClick={() => {
              navigate("/RegistroInf");
            }}
          >
            <div className="">Añadir Nuevo Registro</div>
          </button>
      </div>
    </div>
  );
  
  
  
  const columns = [
    {
      name:"Dato1",
      label:"ITEM"
    },
    {
      name:"Dato2",
      label:"FTR"
    },
    {
      name:"Dato3",
      label:"ÁREA REQUIRIENTE"
    },
    {
      name:"Dato4",
      label:"PROCESO"
    },
    {
      name:"Dato5",
      label:"OBJETO DE CONTRATACIÓN"
    },
    {
      name:"Dato6",
      label:"PRESUPUESTO REFERENCIAL"
    },
    {
      name:"Dato7",
      label:"RESPONSABLE"
    },
    {
      name:"Dato8",
      label:"FECHA DE VALIDACIÓN",
      options: {
        customBodyRender: (value) => {
          const date = new Date(value);
          const formattedDate = date.toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          });
          return formattedDate;
        },
      },
    },
    {
      name:"Dato9",
      label:"OBSERVACIONES"
    },
    {
      name: "actions",
      label: "Acciones",
      options: {
        customBodyRender: (value, tableMeta) => (
          <div className='flex gap-x-1'>
            <button
              className='bg-red-500 px-2 py-1 text-white'
              onClick={() => handleDelete(tableMeta.rowIndex)}
              
            >
              Eliminar
            </button>
            <button
              className='bg-blue-500 px-2 py-1 text-white'
              onClick={() => handleEdit(tableMeta.rowIndex)}
            >
              Editar
            </button>
          </div>
        ),
      },
    },
  ];

  const options = {
    // ... tus opciones aquí ...
    onRowClick: (rowData, rowMeta) => {
      // `rowData` contiene los datos de la fila
      // `rowMeta` contiene información adicional sobre la fila, incluido el índice y el ID
      const selectedRowId = tasks[rowMeta.dataIndex].id;
      // Puedes hacer lo que quieras con el ID de la fila seleccionada
    },
  };
  
  

  return (
    <div className="border border-slate-600 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <ThemeProvider theme={darkTheme}>

        <MUIDataTable
          title={<CustomToolbar />}
          data={tasks}
          columns={columns}
          options={options}
        />
          <ToastContainer />
      </ThemeProvider>
    </div>
  );
}

export default VistaTabla2;