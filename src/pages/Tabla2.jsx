import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useTasks } from '../context/TaskProvider';
import { toast, ToastContainer } from 'react-toastify';


const darkTheme = createTheme({
  palette: {
    mode: "dark"
  }
});

function Tabla2() {
  const { ver_registro, deleteRegist } = useTasks();
  const navigate = useNavigate();
  const [tasks, setTasks ] = useState([]);
  const params = useParams();
  
  

  const loadTask = async () => {
    try {
      // Carga todos los registros
      const allTasks = await ver_registro();
      setTasks(allTasks);

    } catch (error) {
      console.error(error);
    }
  };

  const CustomConfirmationDialog = ({ closeToast, confirmAction, rowIndex  }) => (
    <div>
      <div>¿Estás seguro de que deseas eliminar este registro?</div>
      <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-full" onClick={() => { confirmAction(rowIndex); closeToast(); }}>Sí</button>
      <button className="bg-red-600 text-white font-bold py-2 px-4 rounded-full" onClick={() => { closeToast(); }}>Cancelar</button>
    </div>
  );
  

  useEffect(() => {
    // Llama a loadTasks al montar el componente y cuando params.id cambia
    loadTask();

    // Configura un intervalo para actualizar los datos cada 5 segundos (ajusta según tus necesidades)
  

    // Limpia el intervalo al desmontar el componente
    //return () => clearInterval(intervalId);
  }, [params.id]);


  const handleEdit = (rowIndex) => {
    const selectedRowId = tasks[rowIndex].id;
    navigate(`/editRegistro/${selectedRowId}`);
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
            await deleteRegist(taskId);
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
      <h2>REGISTRO DE REGISTRO {new Date().getFullYear()}</h2>
      </div>
      <div>
      <button
            className="bg-green-500 hover:bg-stone-900 text-black hover:text-white font-bold py-2 px-4 rounded-full"
            onClick={() => {
              navigate("/Registro");
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
      label:"N°"
    },
    {
      name:"Dato2",
      label:"SIGLA"
    },
    {
      name:"Dato3",
      label:"No. FTR"
    },
    {
      name:"Dato4",
      label:"OBJETO DE CONTRATACIÓN",
    },
    {
      name:"Dato5",
      label:"CÓDIGO PROCESO"
    },
    {
      name:"Dato6",
      label:"FECHA",
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
      name:"Dato7",
      label:"ÁREA REQUIRENTE"
    },
    {
      name:"Dato8",
      label:"FUNCIONARIO RESPONSABLE"
    },
    {
      name:"Dato9",
      label:"TIPO DE COMPRA"
    },
    {
      name:"Dato10",
      label:"PRESUPUESTO REFERENCIAL"
    },
    {
      name:"Dato11",
      label:"TIPO DE CONTRATACIÓN"
    },
    {
      name:"Dato12",
      label:"FORMA DE PAGO"
    },
    {
      name:"Dato13",
      label:"PLAZO"
    },
    {
      name:"Dato14",
      label:"ORDENES DE COMPRA"
    },
    {
      name:"Dato15",
      label:"Estado de Proceso"
    },
    {
      name:"Dato16",
      label:"FECHA PUBLICACION",
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
      name:"Dato17",
      label:"FECHA LÍMITE",
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
      name:"Dato18",
      label:"MONTO CONTRACTUAL"
    },
    {
      name:"Dato19",
      label:"FECHA INICIO",
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
      name:"Dato20",
      label:"PLAZO CONTRAACTUAL"
    },
    {
      name:"Dato21",
      label:"FECHA FIN",
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
      name:"Dato22",
      label:"RAZÓN SOCIAL PROVEEDOR"
    },
    {
      name:"Dato23",
      label:"RUC PROVEEDOR"
    },
    {
      name:"Dato24",
      label:"APELLIDOS Y NOMBRES"
    },
    {
      name:"Dato25",
      label:"E-MAIL"
    },
    {
      name:"Dato26",
      label:"APELLIDOS Y NOMBRES"
    },
    {
      name:"Dato27",
      label:"E-MAIL"
    },
    {
      name:"Dato28",
      label:"CONTRATO"
    },
    {
      name:"Dato29",
      label:"CONTRATO MODIFICATORIO"
    },
    {
      name:"Dato30",
      label:"CONTRATO COMPLEMENTARIO"
    },
    {
      name:"Dato31",
      label:"RESPONSABILIDAD CIVIL"
    },
    {
      name:"Dato32",
      label:"NOTIFICACIÓN ANTICIPO"
    },
    {
      name:"Dato33",
      label:"GARANTIA BUEN USO ANTICIPO"
    },
    {
      name:"Dato34",
      label:"GARANTÍA FIEL CUMPLIMIENTO"
    },
    {
      name:"Dato35",
      label:"GARANTÍA TÉCNICA"
    },
    {
      name:"Dato36",
      label:"PLANILLAS"
    },
    {
      name:"Dato37",
      label:"OFICIO RECEPCIÓN"
    },
    {
      name:"Dato38",
      label:"ACTA RECEPCIÓN"
    },
    {
      name:"Dato39",
      label:"OFICIO RECEPCIÓN"
    },
    {
      name:"Dato40",
      label:"ACTA RECEPCIÓN"
    },
    {
      name:"Dato41",
      label:"Observaciones"
    },
    {
      name:"Dato42",
      label:"FECHA ACTUALIZACIÓN",
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
      name:"Dato43",
      label:"LINK ACCESO AL PORTAL"
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
    responsive: 'stacked',
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

export default Tabla2;