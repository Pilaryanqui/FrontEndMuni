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

function VistaTabla4() {
  const { verdatosContrato, deleteContrato } = useTasks();
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const params = useParams();

  const loadTask = async () => {
    try {
      const allTasks = await verdatosContrato();
      setTasks(allTasks);
    } catch (error) {
      console.error(error);
    }
  };

  const CustomConfirmationDialog = ({ closeToast, confirmAction, rowIndex }) => (
    <div>
      <div>¿Estás seguro de que deseas eliminar este registro de Catalogo?</div>
      <button
        className="bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => {
          confirmAction(rowIndex);
          closeToast();
        }}
      >
        Sí
      </button>
      <button
        className="bg-red-600 text-white font-bold py-2 px-4 rounded-full"
        onClick={closeToast}
      >
        Cancelar
      </button>
    </div>
  );

    /**
   * La función handleEdit navega a una página específica según el índice de fila seleccionado.
   */
  const handleEdit = (rowIndex) => {
    const selectedRowId = tasks[rowIndex].IdCont;
    navigate(`/ContratoN/${selectedRowId}`);
  };

  const handleDelete = async (rowIndex) => {
    try {
      if (tasks.length === 0 || rowIndex === undefined) {
        return;
      }

      const taskId = tasks[rowIndex].IdCont;

      toast.info(
        <CustomConfirmationDialog
          confirmAction={async (rowIndex) => {
            const taskId = tasks[rowIndex].IdCont;
            await deleteContrato(taskId);
            setTasks((prevTasks) =>
              prevTasks.filter((task) => task.IdCont !== taskId)
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
        <h2>REGISTRO DE CATALOGO {new Date().getFullYear()}</h2>
      </div>
      <div>
        <button
          className="bg-green-500 hover:bg-stone-900 text-black hover:text-white font-bold py-2 px-4 rounded-full"
          onClick={() => {
            navigate("/RegisContrato");
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
      label:"FTR"
    },
    {
      name:"Dato3",
      label:"No. FTR"
    },
    {
      name:"Dato4",
      label:"OBJETO DE CONTRATACIÓN"
    },
    {
      name:"Dato5",
      label:"CÓDIGO PROCESO"
    },
    /* El bloque de código que proporcionó define una columna denominada "FECHA" en una tabla. La columna
    tiene una función de representación de cuerpo personalizada que formatea el valor de la columna como
    una fecha. */
    {
      name: "Dato6",
      label: "FECHA",
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
      name:"Nombre_Area",
      label:"ÁREA REQUIRENTE"
  },
    {
      name:"Dato8",
      label:"FUNCIONARIO RESPONSABLE"
    },
    {
        name:"Dato9",
        label:"Usuario"
    },
    {
      name:"Dato10",
      label:"TIPO DE COMPRA"
    },
    {
      name:"Dato11",
      label:"PRESUPUESTO REFERENCIAL"
    },
    {
      name:"Dato12",
      label:"TIPO DE CONTRATACIÓN"
    },
    {
      name:"Dato13",
      label:"FORMA DE PAGO"
    },
    {
      name:"Dato14",
      label:"PLAZO"
    },
    {
      name:"Dato15",
      label:"ORDENES DE COMPRA"
    },
    {
      name:"Nombre_Estado",
      label:"Estado de Proceso"
    },

    /* El bloque de código que proporcionaste define una columna llamada "FECHA PUBLICACION" en una tabla.
    La columna tiene una función de representación de cuerpo personalizada que formatea el valor de la
    columna como una fecha. */
    {
      name: "Dato17",
      label: "FECHA PUBLICACION",
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
    /* El código anterior define un objeto de configuración para representar un cuerpo personalizado en un
    componente de React. La función customBodyRender toma un valor como entrada, que se espera que sea
    una fecha. Luego convierte el valor de fecha en un objeto Fecha de JavaScript y lo formatea usando
    el método toLocaleDateString. Luego se devuelve la fecha formateada y se mostrará en el componente
    React. */
    {
      name: "Dato18",
      label: "FECHA LIMITE",
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
      name:"Dato19",
      label:"MONTO CONTRACTUAL"
    },
    /* El código anterior define un componente de React que representa una fecha formateada. Toma un valor
    como parámetro, que se espera que sea una cadena de fecha. Luego convierte la cadena de fecha en un
    objeto Fecha de JavaScript y lo formatea usando el método `toLocaleDateString`. Luego, el componente
    devuelve y representa la fecha formateada. */
    {
      name: "Dato20",
      label: "FECHA INICIO",
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
      name:"Dato21",
      label:"PLAZO CONTRAACTUAL"
    },
    {
      name: "Dato22",
      label: "FECHA FIN",
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
      name:"Dato23",
      label:"RAZÓN SOCIAL PROVEEDOR"
    },
    {
      name:"Dato24",
      label:"RUC PROVEEDOR"
    },
    {
      name:"Dato25",
      label:"APELLIDOS Y NOMBRES"
    },
    {
      name:"Dato26",
      label:"E-MAIL"
    },
    {
      name:"Dato27",
      label:"APELLIDOS Y NOMBRES"
    },
    {
      name:"Dato28",
      label:"E-MAIL"
    },
    {
      name:"Dato29",
      label:"ACTA RECEPCIÓN DEFINTIVA"
    },
    {
      name:"Dato30",
      label:"FACTURA Y RETENCION"
    },
    {
      name:"Dato31",
      label:"SPI LIQUIDACION"
    },
    
    {
      name:"Dato32",
      label:"Observaciones"
    },
    {
      name: "Dato33",
      label: "FECHA ACTUALIZACION",
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
        name:"Dato34",
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
    onRowClick: (rowData, rowMeta) => {
      // `rowData` contiene los datos de la fila
      // `rowMeta` contiene información adicional sobre la fila, incluido el índice y el ID

      const selectedRowId = tasks[rowMeta.dataIndex].id;

      // Puedes hacer lo que quieras con el ID de la fila seleccionada
    },
  };

  useEffect(() => {
    loadTask();
  }, [params.id]);

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

export default VistaTabla4;
