/* El código anterior es un componente de JavaScript React que importa varios módulos y componentes de
diferentes bibliotecas. Utiliza la biblioteca Formik para el manejo de formularios, la biblioteca
reaccionar-router-dom para la navegación y la biblioteca reaccionar-toastify para mostrar
notificaciones del sistema. También importa y utiliza el componente reaccionar-datepicker para
seleccionar fechas. El código define un componente de formulario que se utilizará para crear o
actualizar tareas. Utiliza ganchos como useState y useEffect para administrar el estado y realizar
efectos secundarios. El código también incluye algunos estilos e íconos de la biblioteca
reaccionar-icons. */
import { Form, Formik } from "formik";
import { useTasks } from "../context/TaskProvider";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
//import DatePicker from 'react-date-picker';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Asegúrate de importar los estilos de react-datepicker
import { FaCalendarAlt } from 'react-icons/fa';


function RegistroContrato() {

  /* El código anterior está escrito en JavaScript y utiliza la biblioteca React. Está importando tres
  funciones: create_Contrato, getvContrato y updateContrato desde un módulo llamado useTasks. Es
  probable que estas funciones se utilicen para gestionar tareas relacionadas con contratos. */
  const { create_Contrato, getvContrato, updateContrato } = useTasks();
  /* El código anterior importa dos funciones, `verdatosArea` y `verdatosProcesos`, desde un gancho
  personalizado llamado `useTasks`. Luego, estas funciones se asignan a variables con los mismos
  nombres. */
  const { verdatosArea, verdatosProcesos} = useTasks();
  /* El código anterior está escrito en JavaScript utilizando el marco React. */
  const [areaRequerienteOptions, setAreaRequerienteOptions] = useState([]);
  /* El código anterior está escrito en JavaScript usando la biblioteca React. */
  const [areaRequerienteOptions1, setAreaRequerienteOptions1] = useState([]);
  
  /* El código anterior está escrito en JavaScript usando la biblioteca React. Consiste en declarar una
  variable constante llamada "params" y asignarle el valor de la función "useParams()". La función
  "useParams()" se usa típicamente en React Router para acceder a los parámetros de la ruta actual. */
  const params = useParams();
  
  
  /* El código anterior declara una variable constante llamada `currentYear` y le asigna el valor del
  año actual usando el método `getFullYear()` del objeto `Date`. */
  const currentYear = new Date().getFullYear();

  /* El código anterior está escrito en JavaScript y utiliza el marco React. Define una variable
  constante llamada "navegar", que es una función proporcionada por React Router. El enlace
  "useNavigate" se utiliza para acceder a la funcionalidad de navegación proporcionada por React
  Router. El código no muestra cómo se usa la función "navegar", pero generalmente se usa para
  navegar mediante programación a una ruta diferente en una aplicación React. */
  const navigate = useNavigate();

  /* El código anterior define una variable de estado llamada "tarea" usando el gancho useState en
  React. El estado inicial de la variable "tarea" es un objeto con múltiples propiedades (Dato1,
  Dato2, Dato3, etc.) que están todas configuradas en una cadena vacía. Estas propiedades se
  utilizan para almacenar datos relacionados con una tarea o proceso. */
  const [task, setTask] = useState({
    Dato1: "",
    Dato2: "",
    Dato3: "",
    Dato4: "",
    Dato5: "",
    Dato6: "",
    AreaRequeriente_ID: "",
    Dato8: "",
    Dato9: "",
    Dato10: "",
    Dato11: "",
    Dato12: "",
    Dato13: "",
    Dato14: "",
    Dato15: "",
    EstadoProceso_ID: "",
    Dato17: "",
    Dato18: "",
    Dato19: "",
    Dato20: "",
    Dato21: "",
    Dato22: "",
    Dato23: "",
    Dato24: "",
    Dato25: "",
    Dato26: "",
    Dato27: "",
    Dato28: "",
    Dato29: "",
    Dato30: "",
    Dato31: "",
    Dato32: "",
    Dato33: "",
    Dato34: "",
  });


  /* El código anterior utiliza el gancho useEffect en un componente de React. Está recuperando datos
  para las opciones "AreaRequeriente" y configurando los datos recuperados en la variable de estado
  "AreaRequerienteOptions". La función fetchAreaRequerienteOptions es una función asincrónica que
  llama a la función verdatosArea para recuperar los datos. Si hay un error durante la recuperación,
  se registrará en la consola. El gancho useEffect se activa una vez cuando se monta el componente,
  indicado por la matriz de dependencia vacía al final ([]). */
  useEffect(() => {
    const fetchAreaRequerienteOptions = async () => {
      try {
        const areaRequerienteData = await verdatosArea();
        setAreaRequerienteOptions(areaRequerienteData);
      } catch (error) {
        console.error('Error al obtener datos de AreaRequeriente', error);
      }
    };
  
    fetchAreaRequerienteOptions();
  }, []);


/* El código anterior utiliza el gancho useEffect en React para recuperar datos para las opciones
"AreaRequeriente". Llama a la función "verdatosProcesos" de forma asincrónica y establece los datos
recuperados en la variable de estado "AreaRequerienteOptions1". Si hay un error durante el proceso
de obtención de datos, registra un mensaje de error en la consola. El gancho useEffect se activa
solo una vez, cuando el componente está montado, como lo indica la matriz de dependencia vacía al
final de la llamada useEffect. */
  useEffect(() => {
    const fetchAreaRequerienteOptions1 = async () => {
      try {
        const areaRequerienteData1 = await verdatosProcesos();
        setAreaRequerienteOptions1(areaRequerienteData1);
      } catch (error) {
        console.error('Error al obtener datos de AreaRequeriente', error);
      }
    };
  
    fetchAreaRequerienteOptions1();
  }, []);

/**
 * La función `botonArea` navega a la ruta `/crearArea`.
 */
  const botonArea = () => {
    navigate(`/crearArea`);
    
  };

/**
 * La función `botonProceso` navega a la ruta `/crearproceso`.
 */
  const botonProceso = () => {
    navigate(`/crearproceso`);
    
  }; 

/* El código anterior es un gancho useEffect de React que se utiliza para cargar una tarea. Se activa
cuando se monta el componente y realiza una llamada asincrónica para obtener los datos de la tarea
utilizando la función getvContrato con el params.id proporcionado. Si se encuentra la tarea,
establece el estado de la tarea con los datos recuperados. Si no se encuentra la tarea, registra un
mensaje de error. Si hay un error al recuperar la tarea, registra un mensaje de error con el error
específico. */
  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        try {
          const task = await getvContrato(params.id);
          if (task) {
            setTask({
              Dato1: task.Dato1,
              Dato2: task.Dato2,
              Dato3: task.Dato3,
              Dato4: task.Dato4,
              Dato5: task.Dato5,
              Dato6: task.Dato6,
              AreaRequeriente_ID: task.AreaRequeriente_ID,
              Dato8: task.Dato8,
              Dato9: task.Dato9,
              Dato10: task.Dato10,
              Dato11: task.Dato11,
              Dato12: task.Dato12,
              Dato13: task.Dato13,
              Dato14: task.Dato14,
              Dato15: task.Dato15,
              EstadoProceso_ID: task.EstadoProceso_ID,
              Dato17: task.Dato17,
              Dato18: task.Dato18,
              Dato19: task.Dato19,
              Dato20: task.Dato20,
              Dato21: task.Dato21,
              Dato22: task.Dato22,
              Dato23: task.Dato23,
              Dato24: task.Dato24,
              Dato25: task.Dato25,
              Dato26: task.Dato26,
              Dato27: task.Dato27,
              Dato28: task.Dato28,
              Dato29: task.Dato29,
              Dato30: task.Dato30,
              Dato31: task.Dato31,
              Dato32: task.Dato32,
              Dato33: task.Dato33,
              Dato34: task.Dato34,
              
            });
          } else {
            console.error("Tarea no encontrada"); // Registra un error o maneja el caso en el que no se encuentra la tarea
          }
        } catch (error) {
          console.error("Error al obtener la tarea", error); // Registra el error o maneja de manera apropiada
        }
      }
    };
    loadTask();
  }, []);

  return (
    <div>
      <ToastContainer />
      
{      /* El código anterior utiliza Formik, una biblioteca de formularios para React, para manejar el envío
      de formularios. Inicializa el formulario con valores iniciales del objeto "tarea". Cuando se envía
      el formulario, comprueba si hay un valor "params.id". Si lo hay, actualiza el "Contrato" con los
      valores del formulario usando la función "updateContrato" y muestra un mensaje de éxito. Si no hay
      ningún valor "params.id", crea un nuevo "Contrato" con los valores del formulario usando la función
      "create_Contrato" y muestra un mensaje de éxito. */}
      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);
          if (params.id){
              await  updateContrato(params.id, values);
              toast.success('Registro actualizado exitosamente!');
              
              
          }else{
              await create_Contrato(values);
              toast.success('Registro guardado exitosamente!');
              
          }
          navigate('/VistaContrato');
          

          setTask({
            Dato1: "",
            Dato2: "",
            Dato3: "",
            Dato4: "",
            Dato5: "",
            Dato6: "",
            AreaRequeriente_ID: "",
            Dato8: "",
            Dato9: "",
            Dato10: "",
            Dato11: "",
            Dato12: "",
            Dato13: "",
            Dato14: "",
            Dato15: "",
            EstadoProceso_ID: "",
            Dato17: "",
            Dato18: "",
            Dato19: "",
            Dato20: "",
            Dato21: "",
            Dato22: "",
            Dato23: "",
            Dato24: "",
            Dato25: "",
            Dato26: "",
            Dato27: "",
            Dato28: "",
            Dato29: "",
            Dato30: "",
            Dato31: "",
            Dato32: "",
            Dato33: "",
            Dato34: "",
          });

        }}
      >
        {/* El código anterior es un componente de JavaScript React que utiliza un patrón de accesorios de
        renderizado. Se trata de representar un formulario y transmitir varios accesorios y funciones que se
        utilizarán dentro del formulario. La función handleChange se usa para manejar cambios en las
        entradas del formulario, la función handleSubmit se usa para manejar el envío del formulario, el
        objeto de valores se usa para almacenar los valores actuales de las entradas del formulario y el
        booleano isSubmitting se usa para rastrear si el formulario está actualmente siendo presentado. */}
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table 
              className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
            >
{              /* El código anterior representa un elemento de título en un componente de React. El título muestra el
              texto "REGISTRO DE PROCESOS DE CONTRATACION" seguido del valor de la variable "currentYear". El
              título tiene varias clases CSS aplicadas con fines de estilo. */}
              <caption className="text-center p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
              REGISTRO DE PROCESOS DE CONTRATACION {currentYear}
              </caption>
{              /* El código anterior define un elemento de encabezado de tabla en un componente de
              React. Establece el nombre de la clase en "text-xs text-gray-700 mayúscula
              oscura:text-gray-400" para fines de estilo. */}
              <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                {/* El código anterior define una fila de la tabla (`<tr> `) en un componente de React.
                Contiene varias celdas de encabezado de tabla (`<th> `) con varios estilos y
                atributos colSpan. Los encabezados de la tabla representan diferentes fases de un
                contrato y la ejecución y finalización del contrato. */}
                <tr>
                  <th
                    className="border border-slate-600 p-2 px-6 py-3 bg-gray-50 dark:bg-gray-800"
                    colSpan="17"
                  ></th>

                  <th
                    className="text-lg font-semibold bg-white dark:text-white dark:bg-gray-800 border border-slate-600 p-5 px-6 py-3 bg-gray-50 dark:bg-gray-800"
                    colSpan="11"
                  >
                    
                    FASE CONTRACTUAL
                  </th>
                  <th
                    className="text-lg font-semibold bg-white dark:text-white dark:bg-gray-800 border border-slate-600 p-5 px-6 py-3 bg-gray-50 dark:bg-gray-800"
                    colSpan="3"
                  >
                    Ejecucion y Finalización
                  </th>
                  <th className="border border-slate-600 p-2 px-6 py-3 bg-gray-50 dark:bg-gray-800"></th>
                  <th
                    className="border border-slate-600 p-2 px-6 py-3 bg-gray-50 dark:bg-gray-800"
                    colSpan={2}
                  ></th>
                </tr>
                <tr>
                  <th
                    className="text-lg font-semibold bg-white dark:text-white dark:bg-gray-800 border border-slate-600 p-5 px-6 py-3 bg-gray-50 dark:bg-gray-800"
                    colSpan="17"
                  >
                    FASE PRECONTRACTUAL
                  </th>

                  <th
                    className="text-center border border-slate-600 p-2 px-6 py-3 bg-gray-50 dark:bg-gray-800 bg-white dark:text-white dark:bg-gray-800"
                    colSpan="7"
                  >
                    INFORMACIÓN DEL CONTRATO
                  </th>
                  <th
                    className="text-center border border-slate-600 p-2 px-6 py-3 bg-gray-50 dark:bg-gray-800 bg-white dark:text-white dark:bg-gray-800"
                    colSpan="2"
                  >
                    ADMINISTRADOR DEL CONTRATO
                  </th>
                  <th
                    className="text-center border border-slate-600 p-2 px-6 py-3 bg-gray-50 dark:bg-gray-800 bg-white dark:text-white dark:bg-gray-800"
                    colSpan="2"
                  >
                    FISCALIZADOR DEL CONTRATO
                  </th>
                  <th
                    className="text-center border border-slate-600 p-2 px-6 py-3 bg-gray-50 dark:bg-gray-800 bg-white dark:text-white dark:bg-gray-800"
                    colSpan="3"
                  >
                    DOCUMENTACIÓN RELEVANTE
                  </th>
                  <th className="text-center border border-slate-600 p-2 px-6 py-3 bg-gray-50 dark:bg-gray-800 bg-white dark:text-white dark:bg-gray-800"></th>
                  <th
                    className="text-lg font-semibold bg-white dark:text-white dark:bg-gray-800 border border-slate-600 p-5 px-6 py-3 bg-gray-50 dark:bg-gray-800"
                    colSpan={2}
                  >
                    INFORMACION PARA LOTAIP
                  </th>
                </tr>
                <tr>
                {/* El código anterior define una fila de encabezado de tabla en un componente de
                 React. Incluye cuatro celdas de encabezado de tabla con diferentes estilos y
                 contenidos. La primera celda tiene un nombre de clase "bg-zinc-900 text-center
                 border border-slate-600 p-2 px-6 py-3" y muestra el texto "N°". La segunda celda
                 tiene un nombre de clase "bg-gray-800 text-center border border-slate-600 p-2 px-6
                 py-3 bg-gray-50 dark:bg-gray-800" y muestra el texto "FTR ". La tercera celda tiene
                 un nombre de clase " */}
                  <th className=" bg-zinc-900  text-center border border-slate-600 p-2 px-6 py-3">
                    N°
                  </th>

                  <th className="bg-gray-800 text-center border border-slate-600 p-2 px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    FTR
                  </th>
                  <th className="bg-zinc-900 text-center border border-slate-600 p-2 px-6 py-3">
                    No. FTR
                  </th>
                  <th  className="px-20 text-center border border-slate-600 bg-gray-50 dark:bg-gray-800">
                    OBJETO DE CONTRATACIÓN
                  </th>
                  <th className="bg-zinc-900  px-20 text-center border border-slate-600">
                    CÓDIGO PROCESO
                  </th>
                  <th className="px-20 text-center border border-slate-600 bg-gray-50 dark:bg-gray-800">
                    FECHA PUBLICACION
                  </th>
                  <th className="bg-zinc-900 px-20 text-center border border-slate-600 ">
                    ÁREA REQUIRENTE
                  </th>
                  <th className="px-20 text-center border border-slate-600  bg-gray-50 dark:bg-gray-800">
                    FUNCIONARIO RESPONSABLE
                  </th>
                  <th className="bg-zinc-900 px-20 text-center border border-slate-600 ">
                    USUARIO
                  </th>
                  <th className="px-20 text-center border border-slate-600 bg-gray-800">
                    TIPO DE COMPRA
                  </th>
                  <th className="bg-zinc-900  px-20 text-center border border-slate-600  bg-gray-50 ">
                    PRESUPUESTO REFERENCIAL
                  </th>
                  <th className="px-20 text-center border border-slate-600 bg-gray-800">
                    TIPO DE CONTRATACIÓN
                  </th>
                  <th className="bg-zinc-900 px-20 text-center border border-slate-600  bg-gray-50 ">
                    FORMA DE PAGO
                  </th>
                  <th className="px-20 text-center border border-slate-600 bg-gray-800 ">
                    PLAZO
                  </th>
                  <th className="bg-zinc-900 px-20 text-center border border-slate-600  bg-gray-50 ">
                    Nº DE ORDEN DE COMPRA
                  </th>
                  <th className="px-20 text-center border border-slate-600 bg-gray-800 ">
                    ESTADO DEL PROCESO
                  </th>
                  <th className="bg-zinc-900 px-20 text-center border border-slate-600  bg-gray-50">
                    FECHA DE ADJUDICACIÓN/CANCELACION/DESIERTO
                  </th>

                  <th className="px-20 text-center border border-slate-600 bg-gray-800">
                    FECHA LÍMITE SUSCRIPCIÓN CONTRATO
                  </th>
                  <th className="bg-zinc-900  px-20 text-center border border-slate-600  bg-gray-50 ">
                    MONTO CONTRACTUAL
                  </th>
                  <th className="px-20 text-center border border-slate-600 bg-gray-800 ">
                    FECHA INICIO CONTRATO
                  </th>
                  <th className="bg-zinc-900  px-20 text-center border border-slate-600  bg-gray-50">
                    PLAZO CONTRAACTUAL
                  </th>
                  <th className="px-20 text-center border border-slate-600 bg-gray-800 ">
                    FECHA FIN CONTRATO
                  </th>
                  <th className="bg-zinc-900 px-20 text-center border border-slate-600  bg-gray-50">
                    RAZÓN SOCIAL PROVEEDOR
                  </th>
                  <th className="px-20 text-center border border-slate-600 bg-gray-800">
                    RUC PROVEEDOR
                  </th>

                  <th className=" bg-zinc-900  px-20 text-center border border-slate-600  bg-gray-50">
                    APELLIDOS Y NOMBRES
                  </th>
                  <th className="px-20 text-center border border-slate-600 bg-gray-800">
                    E-MAIL
                  </th>
                  <th className="bg-zinc-900 px-20 text-center border border-slate-600  bg-gray-50">
                    APELLIDOS Y NOMBRES
                  </th>
                  <th className="px-20 text-center border border-slate-600 bg-gray-800">
                    E-MAIL
                  </th>

                  <th className="bg-zinc-900 px-20 text-center border border-slate-600  bg-gray-50 ">
                    ACTA RECEPCIÓN DEFINTIVA
                  </th>
                  <th className="px-20 text-center border border-slate-600 bg-gray-800">
                    FACTURA Y RETENCION
                  </th>
                  <th className="bg-zinc-900 px-20 text-center border border-slate-600 bg-gray-50">
                    SPI LIQUIDACION
                  </th>
                  
                  <th className="px-20 text-center border border-slate-600 bg-gray-800">
                    OBSERVACIONES 
                  </th>

                  <th className="bg-zinc-900 px-20 text-center border border-slate-600  bg-gray-50">
                    FECHA ACTUALIZACIÓN
                  </th>
                  <th className="px-20  text-center border border-slate-600 bg-gray-800">
                    LINK ACCESO AL PORTAL
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  {/* Celda de la tabla para el input del Número (Dato1) */}
                  <td className="bg-zinc-900 border border-slate-600 p-2">
                    {/* Input para el Número (Dato1) */}
  
                    <input
                      type="number"
                      name="Dato1"
                      placeholder="N°"
                      onChange={handleChange}
                      value={values.Dato1}
                      className="peer h-full w-full rounded-[7px] border-t-transparent bg-transparent  font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    />
                  </td>

                  <td className="bg-gray-800 border border-slate-600 p-2">
                    <input
                      type="text"
                      name="Dato2"
                      placeholder="FTR"
                      onChange={handleChange}
                      value={values.Dato2}
                      className="peer h-full w-full rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    />
                  </td>

                  <td className="bg-zinc-900 border border-slate-600 p-2">
                    <input
                      type="text"
                      name="Dato3"
                      placeholder="NO.FTR"
                      onChange={handleChange}
                      value={values.Dato3}
                      className="peer h-full w-full rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    />
                  </td>

                  <td className="bg-gray-800 border border-slate-600 p-2">
                    <textarea
                      name="Dato4"
                      rows="3"
                      placeholder="Write a description"
                      onChange={handleChange}
                      value={values.Dato4}
                      className=" peer h-full w-full rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    ></textarea>
                  </td>

                  <td className="bg-zinc-900 border border-slate-600 p-2">
                    <input
                      type="text"
                      name="Dato5"
                      placeholder="CODIGO"
                      onChange={handleChange}
                      value={values.Dato5}
                      className="text-center peer  rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    />
                  </td>
                 {/* El código anterior representa una celda de tabla (`<td> `) con un color de fondo
                  gris y un borde. Dentro de la celda, hay un `<div> `elemento con una posición
                  relativa. Dentro del `<div> `, hay un icono (`<FaCalendarAlt> `) colocado
                  absolutamente en la esquina superior izquierda. Debajo del ícono, hay un
                  `<DatePicker> `componente. */}
                  <td className="bg-gray-800 border border-slate-600 p-2">
                  <div className="relative">
                    <FaCalendarAlt className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-500" />
                    <DatePicker
                      selected={values.Dato6 ? new Date(values.Dato6) : null}
                      onChange={(date) =>
                        handleChange({ target: { name: 'Dato6', value: date } })
                      }
                      dateFormat="yyyy-MM-dd"
                      placeholderText="ESCOJA LA FECHA"
                      className="peer pl-8 h-full w-full rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-t-transparent focus:outline-0 disabled:bg-blue-gray-50"
                      popperClassName="z-50" // Agrega una clase z-50 para asegurar que el calendario aparezca sobre otros elementos
                    />
                  </div>
                </td>

                {/* Celda de la tabla para la selección del Área Requeriente */}
                  <td className="bg-zinc-900 border border-slate-600 p-2 space-y-2">
                  {/* Selector de Área Requeriente */}
                  <select
                      name="AreaRequeriente_ID"
                      onChange={handleChange}
                      value={values.AreaRequeriente_ID}
                      required 
                      className="peer h-full w-full rounded-[7px] border-t-transparent bg-black text-white font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-t-transparent focus:outline-0 disabled:bg-blue-gray-50"
                  >
                      <option value="">Selecciona Área Requeriente</option>
                      {/* Mapeo de opciones de Área Requeriente */}
                      {areaRequerienteOptions?.map((option) => (
                          <option key={option.ID_Area} value={option.ID_Area}>
                              {option.Nombre_Area}
                          </option>
                      ))}
                  </select>
                  {/* Botón para agregar Área */}
                  <button
                      className='bg-red-500 px-2 py-1 text-white'
                      onClick={botonArea}
                  >
                      Agregar Area
                  </button>
              </td>


                  {/* Celda de la tabla para el input del Funcionario Responsable */}
                  <td className="bg-gray-800 border border-slate-600 p-2">
                    {/* Input para el Funcionario Responsable */}
                    <input
                      type="text"
                      name="Dato8"
                      placeholder="FUNCIONARIO RESPONSABLE"
                      onChange={handleChange}
                      value={values.Dato8}
                      className="text-center  peer h-full w-full rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    />
                  </td>

                  <td className="bg-zinc-900 border border-slate-600 p-2">
                    <input
                      type="Text"
                      name="Dato9"
                      placeholder="Usuario"
                      onChange={handleChange}
                      value={values.Dato9}
                      className="text-center  peer h-full w-full rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    />
                  </td>

                  <td className="bg-gray-800 border border-slate-600 p-2">
                    <input
                      type="text"
                      name="Dato10"
                      placeholder="TIPO DE COMPRA"
                      onChange={handleChange}
                      value={values.Dato10}
                      className="text-center peer h-full w-full rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    />
                  </td>

                  <td className="bg-zinc-900 border border-slate-600 p-2">
                    <input
                      type="number"
                      name="Dato11"
                      placeholder="PRESUPUESTO REFERENCIAL"
                      onChange={handleChange}
                      value={values.Dato11}
                      className="w-[200px] peer h-full w-full rounded-[7px] border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    />
                  </td>

                  <td className="bg-gray-800 border border-slate-600 p-2">
                    <input
                      type="text"
                      name="Dato12"
                      placeholder="TIPO DE CONTRATACION"
                      onChange={handleChange}
                      value={values.Dato12}
                      className="text-center peer h-full w-full rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    />
                  </td>

                  <td className="bg-zinc-900 border border-slate-600 p-2">
                    <textarea
                      type="text"
                      name="Dato13"
                      rows="3"
                      placeholder="Descripción"
                      onChange={handleChange}
                      value={values.Dato13}
                      className="text-center peer h-full w-full rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    ></textarea>
                  </td>

                  <td className="bg-gray-800 border border-slate-600 p-2">
                    <input
                      type="number"
                      name="Dato14"
                      placeholder="Plazo"
                      onChange={handleChange}
                      value={values.Dato14}
                      className="peer h-full w-full rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    />
                  </td>

                  <td className="bg-zinc-900 border border-slate-600 p-2">
                    <textarea
                      type="text"
                      name="Dato15"
                      rows="3"
                      placeholder="Nº DE ORDEN DE COMPRA"
                      onChange={handleChange}
                      value={values.Dato15}
                      className="text-center  peer h-full w-full rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    ></textarea>
                  </td>



                  <td className="bg-gray-800 border border-slate-600 p-2 space-y-2">
                    <select
                        name="EstadoProceso_ID"
                        onChange={handleChange}
                        value={values.EstadoProceso_ID}
                        required
                        className="peer h-full w-full rounded-[7px] border-t-transparent bg-black text-white font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-t-transparent focus:outline-0 disabled:bg-blue-gray-50"
                    >
                        <option value="">Selecciona el Proceso</option>
                        {areaRequerienteOptions1?.map((option) => (
                            <option key={option.ID_Estado} value={option.ID_Estado}>
                                {option.Nombre_Estado}
                            </option>
                        ))}
                    </select>
                    <button
                      className='bg-red-500 px-2 py-1 text-white'
                      onClick={botonProceso}
                  >
                      Agregar Proceso
                  </button>
                </td>

                {/* Celda de la tabla para el selector de fecha (Dato17) */}
                <td className="bg-zinc-900 border border-slate-600 p-2">
                <div className="relative">
                    <FaCalendarAlt className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-500" />
                    <DatePicker
                      selected={values.Dato17 ? new Date(values.Dato17) : null}
                      onChange={(date) =>
                        handleChange({ target: { name: 'Dato17', value: date } })
                      }
                      dateFormat="yyyy-MM-dd"
                      placeholderText="ESCOJA LA FECHA"
                      className="peer pl-8 h-full w-full rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-t-transparent focus:outline-0 disabled:bg-blue-gray-50"
                      popperClassName="z-50" // Agrega una clase z-50 para asegurar que el calendario aparezca sobre otros elementos
                    />
                  </div>
                </td>

                <td className="bg-gray-800 border border-slate-600 p-2">
                  <div className="relative">
                    <FaCalendarAlt className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-500" />
                    <DatePicker
                      selected={values.Dato18 ? new Date(values.Dato18) : null}
                      onChange={(date) =>
                        handleChange({ target: { name: 'Dato18', value: date } })
                      }
                      dateFormat="yyyy-MM-dd"
                      placeholderText="ESCOJA LA FECHA"
                      className="peer pl-8 h-full w-full rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-t-transparent focus:outline-0 disabled:bg-blue-gray-50"
                      popperClassName="z-50" // Agrega una clase z-50 para asegurar que el calendario aparezca sobre otros elementos
                    />
                  </div>
                </td>

                  <td className="bg-zinc-900 border border-slate-600 p-2">
                    <input
                      type="number"
                      name="Dato19"
                      placeholder="MONTO CONTRACTUAL"
                      onChange={handleChange}
                      value={values.Dato19}
                      className="peer h-full w-full rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    />
                  </td>

                  <td className="bg-gray-800 border border-slate-600 p-2">
                  <div className="relative">
                    <FaCalendarAlt className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-500" />
                    <DatePicker
                      selected={values.Dato20 ? new Date(values.Dato20) : null}
                      onChange={(date) =>
                        handleChange({ target: { name: 'Dato20', value: date } })
                      }
                      dateFormat="yyyy-MM-dd"
                      placeholderText="ESCOJA LA FECHA"
                      className="peer pl-8 h-full w-full rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-t-transparent focus:outline-0 disabled:bg-blue-gray-50"
                      popperClassName="z-50" // Agrega una clase z-50 para asegurar que el calendario aparezca sobre otros elementos
                    />
                  </div>
                  </td>

                  <td className="bg-zinc-900 border border-slate-600 p-2">
                    <input
                      type="number"
                      name="Dato21"
                      placeholder="MONTO"
                      onChange={handleChange}
                      value={values.Dato21}
                      className="peer h-full w-full rounded-[7px] border-t-transparent bg-transparent  font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    />
                  </td>

                  <td className="bg-gray-800 border border-slate-600 p-2">
                  <div className="relative">
                    <FaCalendarAlt className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-500" />
                    <DatePicker
                      selected={values.Dato22 ? new Date(values.Dato22) : null}
                      onChange={(date) =>
                        handleChange({ target: { name: 'Dato22', value: date } })
                      }
                      dateFormat="yyyy-MM-dd"
                      placeholderText="ESCOJA LA FECHA"
                      className="peer pl-8 h-full w-full rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-t-transparent focus:outline-0 disabled:bg-blue-gray-50"
                      popperClassName="z-50" // Agrega una clase z-50 para asegurar que el calendario aparezca sobre otros elementos
                    />
                  </div>
                  </td>

                  <td className="bg-zinc-900 border border-slate-600 p-2">
                    <textarea
                      name="Dato23"
                      rows="3"
                      placeholder="Descripción"
                      onChange={handleChange}
                      value={values.Dato23}
                      className="text-center peer h-full w-full rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    ></textarea>
                  </td>

                  <td className="bg-gray-800 border border-slate-600 p-2">
                    <input
                      type="text"
                      name="Dato24"
                      placeholder="RUC PROVEEDOR"
                      onChange={handleChange}
                      value={values.Dato24}
                      className="text-center peer h-full w-full rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    />
                  </td>

                  <td className="bg-zinc-900 border border-slate-600 p-2">
                    <textarea
                      name="Dato25"
                      rows="3"
                      placeholder="Descripción"
                      onChange={handleChange}
                      value={values.Dato25}
                      className="peer h-full w-full rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    ></textarea>
                  </td>

                  <td className="bg-gray-800 border border-slate-600 p-2">
                    <input
                      type="email"
                      name="Dato26"
                      placeholder="E-MAIL"
                      onChange={handleChange}
                      value={values.Dato26}
                      className="peer h-full w-full rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    />
                  </td>

                  <td className="bg-zinc-900 border border-slate-600 p-2">
                    <textarea
                      name="Dato27"
                      rows="3"
                      placeholder="Descripción"
                      onChange={handleChange}
                      value={values.Dato27}
                      className="peer h-full w-full rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    ></textarea>
                  </td>

                  <td className="bg-gray-800 border border-slate-600 p-2">
                    <input
                      type="email"
                      name="Dato28"
                      placeholder="E-MAIL"
                      onChange={handleChange}
                      value={values.Dato28}
                      className="peer h-full w-full rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    />
                  </td>

                  <td className="bg-zinc-900 border border-slate-600 p-2">
                    <input
                      type="text"
                      name="Dato29"
                      placeholder="ACTA RECEPCIÓN DEFINTIVA"
                      onChange={handleChange}
                      value={values.Dato29}
                      className="text-center peer h-full w-full rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    />
                  </td>

                  <td className="bg-gray-800 border border-slate-600 p-2">
                    <input
                      type="text"
                      name="Dato30"
                      placeholder="FACTURA Y RETENCION"
                      onChange={handleChange}
                      value={values.Dato30}
                      className="text-center peer h-full w-full rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    />
                  </td>

                  <td className="bg-zinc-900 border border-slate-600 p-2">
                    <input
                      type="text"
                      name="Dato31"
                      placeholder="SPI LIQUIDACION"
                      onChange={handleChange}
                      value={values.Dato31}
                      className="text-center w-[215px] peer h-full w-full rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    />
                  </td>

                  <td className="bg-gray-800 border border-slate-600 p-2">
                    <textarea
                      name="Dato32"
                      rows="3"
                      placeholder="Descripción"
                      onChange={handleChange}
                      value={values.Dato32}
                      className=" peer h-full w-full rounded-[7px] border-t-transparent bg-transparent  font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    ></textarea>
                  </td>

                  <td className="bg-zinc-900 border border-slate-600 p-2">
                  <div className="relative">
                    <FaCalendarAlt className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-500" />
                    <DatePicker
                      selected={values.Dato33 ? new Date(values.Dato33) : null}
                      onChange={(date) =>
                        handleChange({ target: { name: 'Dato33', value: date } })
                      }
                      dateFormat="yyyy-MM-dd"
                      placeholderText="ESCOJA LA FECHA"
                      className="peer pl-8 h-full w-full rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-t-transparent focus:outline-0 disabled:bg-blue-gray-50"
                      popperClassName="z-50" // Agrega una clase z-50 para asegurar que el calendario aparezca sobre otros elementos
                    />
                  </div>
                  </td>

                  <td className="bg-gray-800 border border-slate-600 p-2">
                    <textarea
                      type="url"
                      name="Dato34"
                      rows="3"
                      placeholder="LINK ACCESO AL PORTAL"
                      onChange={handleChange}
                      value={values.Dato34}
                      className="peer h-full w-full rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    ></textarea>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button type='Submit' disabled={isSubmitting} className='mt-6 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                        {isSubmitting ? "Saving..":"Save"} 
                        
          </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default RegistroContrato;