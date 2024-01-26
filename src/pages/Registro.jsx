import { Form, Formik } from "formik";
import { useTasks } from "../context/TaskProvider";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
//import DatePicker from 'react-date-picker';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Asegúrate de importar los estilos de react-datepicker
import { FaCalendarAlt } from 'react-icons/fa';


function Registro() {
  const { create_Reg, getvReg, updateREG } = useTasks();
  const params = useParams();
  console.log(params)


  const navigate = useNavigate();
  const [task, setTask] = useState({
    Dato1: "",
    Dato2: "",
    Dato3: "",
    Dato4: "",
    Dato5: "",
    Dato6: "",
    Dato7: "",
    Dato8: "",
    Dato9: "",
    Dato10: "",
    Dato11: "",
    Dato12: "",
    Dato13: "",
    Dato14: "",
    Dato15: "",
    Dato16: "",
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
    Dato35: "",
    Dato36: "",
    Dato37: "",
    Dato38: "",
    Dato39: "",
    Dato40: "",
    Dato41: "",
    Dato42: "",
    Dato43: "",
  });



  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        try {
          const task = await getvReg(params.id);
          if (task) {
            setTask({
              Dato1: task.Dato1,
              Dato2: task.Dato2,
              Dato3: task.Dato3,
              Dato4: task.Dato4,
              Dato5: task.Dato5,
              Dato6: task.Dato6,
              Dato7: task.Dato7,
              Dato8: task.Dato8,
              Dato9: task.Dato9,
              Dato10: task.Dato10,
              Dato11: task.Dato11,
              Dato12: task.Dato12,
              Dato13: task.Dato13,
              Dato14: task.Dato14,
              Dato15: task.Dato15,
              Dato16: task.Dato16,
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
              Dato35: task.Dato35,
              Dato36: task.Dato36,
              Dato37: task.Dato37,
              Dato38: task.Dato38,
              Dato39: task.Dato39,
              Dato40: task.Dato40,
              Dato41: task.Dato41,
              Dato42: task.Dato42,
              Dato43: task.Dato43,
              
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
      
      <Formik
      
      
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);
          if (params.id){
              await updateREG(params.id, values);
              toast.success('Registro actualizado exitosamente!');
              
              
          }else{
              await create_Reg(values);
              toast.success('Registro guardado exitosamente!');
              
          }
          navigate('/Vista2');
          

          setTask({
            Dato1: "",
            Dato2: "",
            Dato3: "",
            Dato4: "",
            Dato5: "",
            Dato6: "",
            Dato7: "",
            Dato8: "",
            Dato9: "",
            Dato10: "",
            Dato11: "",
            Dato12: "",
            Dato13: "",
            Dato14: "",
            Dato15: "",
            Dato16: "",
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
            Dato35: "",
            Dato36: "",
            Dato37: "",
            Dato38: "",
            Dato39: "",
            Dato40: "",
            Dato41: "",
            Dato42: "",
            Dato43: "",
          });

        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table 
              className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
            >
              <caption className="text-center p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                DATOS DE REGISTRO
              </caption>
              <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                <tr>
                  <th
                    className="border border-slate-600 p-2 px-6 py-3 bg-gray-50 dark:bg-gray-800"
                    colSpan="16"
                  ></th>

                  <th
                    className="text-lg font-semibold bg-white dark:text-white dark:bg-gray-800 border border-slate-600 p-5 px-6 py-3 bg-gray-50 dark:bg-gray-800"
                    colSpan="11"
                  >
                    
                    FASE CONTRACTUAL
                  </th>
                  <th
                    className="text-lg font-semibold bg-white dark:text-white dark:bg-gray-800 border border-slate-600 p-5 px-6 py-3 bg-gray-50 dark:bg-gray-800"
                    colSpan="13"
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
                    colSpan="16"
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
                    colSpan="13"
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
                  <th className=" bg-zinc-900 text-center border border-slate-600 p-2 px-6 py-3">
                    N°
                  </th>

                  <th className="bg-zinc-900 text-center border border-slate-600 p-2 px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    SIGLA
                  </th>
                  <th className="bg-zinc-900 text-center border border-slate-600 p-2 px-6 py-3">
                    No. FTR
                  </th>
                  <th  className="px-20 text-center border border-slate-600 bg-gray-50 dark:bg-gray-800">
                    OBJETO DE CONTRATACIÓN
                  </th>
                  <th className="bg-zinc-900 px-20 text-center border border-slate-600">
                    CÓDIGO PROCESO
                  </th>
                  <th className="px-20 text-center border border-slate-600 bg-gray-50 dark:bg-gray-800">
                    FECHA
                  </th>
                  <th className="bg-zinc-900 px-20 text-center border border-slate-600 ">
                    ÁREA REQUIRENTE
                  </th>
                  <th className="px-20 text-center border border-slate-600  bg-gray-50 dark:bg-gray-800">
                    FUNCIONARIO RESPONSABLE
                  </th>
                  <th className="bg-zinc-900 px-20 text-center border border-slate-600 ">
                    TIPO DE COMPRA
                  </th>
                  <th className="px-20 text-center border border-slate-600  bg-gray-50 dark:bg-gray-800">
                    PRESUPUESTO REFERENCIAL
                  </th>
                  <th className="bg-zinc-900 px-20 text-center border border-slate-600 ">
                    TIPO DE CONTRATACIÓN
                  </th>
                  <th className="px-20 text-center border border-slate-600  bg-gray-50 dark:bg-gray-800">
                    FORMA DE PAGO
                  </th>
                  <th className="bg-zinc-900 px-20 text-center border border-slate-600 ">
                    PLAZO
                  </th>
                  <th className="px-20 text-center border border-slate-600  bg-gray-50 dark:bg-gray-800">
                    ORDENES DE COMPRA
                  </th>
                  <th className="bg-zinc-900 px-20 text-center border border-slate-600 ">
                    Estado de Proceso
                  </th>
                  <th className="px-20 text-center border border-slate-600  bg-gray-50 dark:bg-gray-800">
                    FECHA PUBLICACION
                  </th>

                  <th className="bg-zinc-900 px-20 text-center border border-slate-600 ">
                    FECHA LÍMITE
                  </th>
                  <th className="px-20 text-center border border-slate-600  bg-gray-50 dark:bg-gray-800">
                    MONTO CONTRACTUAL
                  </th>
                  <th className="bg-zinc-900 px-20 text-center border border-slate-600 ">
                    FECHA INICIO
                  </th>
                  <th className="px-20 text-center border border-slate-600  bg-gray-50 dark:bg-gray-800">
                    PLAZO CONTRAACTUAL
                  </th>
                  <th className="bg-zinc-900 px-20 text-center border border-slate-600 ">
                    FECHA FIN
                  </th>
                  <th className="px-20 text-center border border-slate-600  bg-gray-50 dark:bg-gray-800">
                    RAZÓN SOCIAL PROVEEDOR
                  </th>
                  <th className="bg-zinc-900 px-20 text-center border border-slate-600 ">
                    RUC PROVEEDOR
                  </th>

                  <th className="px-20 text-center border border-slate-600  bg-gray-50 dark:bg-gray-800">
                    APELLIDOS Y NOMBRES
                  </th>
                  <th className="bg-zinc-900 px-20 text-center border border-slate-600">
                    E-MAIL
                  </th>
                  <th className="px-20 text-center border border-slate-600  bg-gray-50 dark:bg-gray-800">
                    APELLIDOS Y NOMBRES
                  </th>
                  <th className="bg-zinc-900 px-20 text-center border border-slate-600 ">
                    E-MAIL
                  </th>

                  <th className="px-20 text-center border border-slate-600  bg-gray-50 dark:bg-gray-800">
                    CONTRATO
                  </th>
                  <th className="bg-zinc-900 px-20 text-center border border-slate-600 ">
                    CONTRATO MODIFICATORIO
                  </th>
                  <th className="px-20 text-center border border-slate-600 bg-gray-50 dark:bg-gray-800">
                    CONTRATO COMPLEMENTARIO
                  </th>
                  <th className="bg-zinc-900 px-20 text-center border border-slate-600">
                    RESPONSABILIDAD CIVIL
                  </th>
                  <th className="px-20 text-center border border-slate-600  bg-gray-50 dark:bg-gray-800">
                    NOTIFICACIÓN ANTICIPO
                  </th>
                  <th className="bg-zinc-900 px-20 text-center border border-slate-600">
                    GARANTIA BUEN USO ANTICIPO
                  </th>
                  <th className="px-20 text-center border border-slate-600  bg-gray-50 dark:bg-gray-800">
                    GARANTÍA FIEL CUMPLIMIENTO
                  </th>
                  <th className="bg-zinc-900 px-20 text-center border border-slate-600 ">
                    GARANTÍA TÉCNICA
                  </th>
                  <th className="px-20 text-center border border-slate-600  bg-gray-50 dark:bg-gray-800">
                    PLANILLAS
                  </th>
                  <th className="bg-zinc-900 px-20 text-center border border-slate-600 ">
                    OFICIO RECEPCIÓN
                  </th>
                  <th className="px-20 text-center border border-slate-600  bg-gray-50 dark:bg-gray-800">
                    ACTA RECEPCIÓN
                  </th>
                  <th className="bg-zinc-900 px-20 text-center border border-slate-600 ">
                    OFICIO RECEPCIÓN
                  </th>
                  <th className="px-20 text-center border border-slate-600  bg-gray-50 dark:bg-gray-800">
                    ACTA RECEPCIÓN
                  </th>

                  <th className="bg-zinc-900 px-20 text-center border border-slate-600 ">
                    OBSERVACIONES 
                  </th>

                  <th className="px-20 text-center border border-slate-600  bg-gray-50 dark:bg-gray-800">
                    FECHA ACTUALIZACIÓN
                  </th>
                  <th className="bg-zinc-900 px-20  text-center border border-slate-600">
                    LINK ACCESO AL PORTAL
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="bg-zinc-900 border border-slate-600 p-2">
                    
                    <input
                      type="number"
                      name="Dato1"
                      placeholder="N°"
                      onChange={handleChange}
                      value={values.Dato1}
                      className=" peer h-full w-full rounded-[7px] border-t-transparent bg-transparent  font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    />
                  </td>

                  <td className="bg-gray-800 border border-slate-600 p-2">
                    <input
                      type="text"
                      name="Dato2"
                      placeholder="SIGLA"
                      onChange={handleChange}
                      value={values.Dato2}
                      className="peer h-full w-full rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    />
                  </td>

                  <td className="bg-zinc-900 border border-slate-600 p-2">
                    <input
                      type="text"
                      name="Dato3"
                      placeholder="NO.F"
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


                  <td className="bg-zinc-900 border border-slate-600 p-2">
                    <textarea
                      name="Dato7"
                      rows="3"
                      placeholder="Write a description"
                      onChange={handleChange}
                      value={values.Dato7}
                      className="peer h-full w-full rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    ></textarea>
                  </td>

                  <td className="bg-gray-800 border border-slate-600 p-2">
                    <input
                      type="email"
                      name="Dato8"
                      placeholder="FUNCIONARIO"
                      onChange={handleChange}
                      value={values.Dato8}
                      className="text-center  peer h-full w-full rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    />
                  </td>

                  <td className="bg-zinc-900 border border-slate-600 p-2">
                    <input
                      type="text"
                      name="Dato9"
                      placeholder="TIPO DE COMPRA"
                      onChange={handleChange}
                      value={values.Dato9}
                      className="text-center peer h-full w-full rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    />
                  </td>

                  <td className="bg-gray-800 border border-slate-600 p-2">
                    <input
                      type="number"
                      name="Dato10"
                      placeholder="PRESUPUESTO REFERENCIAL"
                      onChange={handleChange}
                      value={values.Dato10}
                      className="w-[200px] peer h-full w-full rounded-[7px] border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    />
                  </td>

                  <td className="bg-zinc-900 border border-slate-600 p-2">
                    <input
                      type="text"
                      name="Dato11"
                      placeholder="TIPO DE CONTRATACION"
                      onChange={handleChange}
                      value={values.Dato11}
                      className="text-center peer h-full w-full rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    />
                  </td>

                  <td className="bg-gray-800 border border-slate-600 p-2">
                    <textarea
                      type="text"
                      name="Dato12"
                      rows="3"
                      placeholder="Descripción"
                      onChange={handleChange}
                      value={values.Dato12}
                      className="text-center peer h-full w-full rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    ></textarea>
                  </td>

                  <td className="bg-zinc-900 border border-slate-600 p-2">
                    <input
                      type="number"
                      name="Dato13"
                      placeholder="Plazo"
                      onChange={handleChange}
                      value={values.Dato13}
                      className="peer h-full w-full rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    />
                  </td>

                  <td className="bg-gray-800 border border-slate-600 p-2">
                    <input
                      type="text"
                      name="Dato14"
                      placeholder="Ordenes"
                      onChange={handleChange}
                      value={values.Dato14}
                      className="text-center peer h-full w-full rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    />
                  </td>

                  <td className="bg-zinc-900 border border-slate-600 p-2">
                    <textarea
                      type="text"
                      name="Dato15"
                      rows="3"
                      placeholder="Estado de Compra"
                      onChange={handleChange}
                      value={values.Dato15}
                      className="text-center  peer h-full w-full rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    ></textarea>
                  </td>

                <td className="bg-gray-800 border border-slate-600 p-2">
                  <div className="relative">
                    <FaCalendarAlt className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-500" />
                    <DatePicker
                      selected={values.Dato16 ? new Date(values.Dato16) : null}
                      onChange={(date) =>
                        handleChange({ target: { name: 'Dato16', value: date } })
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
                    <input
                      type="number"
                      name="Dato18"
                      placeholder="MONTO CONTRACTUAL"
                      onChange={handleChange}
                      value={values.Dato18}
                      className="peer h-full w-full rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    />
                  </td>

                  <td className="bg-gray-800 border border-slate-600 p-2">
                  <div className="relative">
                    <FaCalendarAlt className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-500" />
                    <DatePicker
                      selected={values.Dato19 ? new Date(values.Dato19) : null}
                      onChange={(date) =>
                        handleChange({ target: { name: 'Dato19', value: date } })
                      }
                      dateFormat="yyyy-MM-dd"
                      placeholderText="ESCOJA LA FECHA"
                      className="peer pl-8 h-full w-full rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-t-transparent focus:outline-0 disabled:bg-blue-gray-50"
                      popperClassName="z-50" // Agrega una clase z-50 para asegurar que el calendario aparezca sobre otros elementos
                    />
                  </div>
                </td>


                  <td className="bg-gray-800 border border-slate-600 p-2">
                    <input
                      type="number"
                      name="Dato20"
                      placeholder="MONTO"
                      onChange={handleChange}
                      value={values.Dato20}
                      className="peer h-full w-full rounded-[7px] border-t-transparent bg-transparent  font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    />
                  </td>

                  <td className="bg-gray-800 border border-slate-600 p-2">
                  <div className="relative">
                    <FaCalendarAlt className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-500" />
                    <DatePicker
                      selected={values.Dato21 ? new Date(values.Dato21) : null}
                      onChange={(date) =>
                        handleChange({ target: { name: 'Dato21', value: date } })
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
                      name="Dato22"
                      rows="3"
                      placeholder="Descripción"
                      onChange={handleChange}
                      value={values.Dato22}
                      className="text-center peer h-full w-full rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    ></textarea>
                  </td>

                  <td className="bg-zinc-900 border border-slate-600 p-2">
                    <input
                      type="text"
                      name="Dato23"
                      placeholder="RUC PROVEEDOR"
                      onChange={handleChange}
                      value={values.Dato23}
                      className="text-center peer h-full w-full rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    />
                  </td>

                  <td className="bg-gray-800 border border-slate-600 p-2">
                    <textarea
                      name="Dato24"
                      rows="3"
                      placeholder="Descripción"
                      onChange={handleChange}
                      value={values.Dato24}
                      className="peer h-full w-full rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    ></textarea>
                  </td>

                  <td className="bg-zinc-900 border border-slate-600 p-2">
                    <input
                      type="email"
                      name="Dato25"
                      placeholder="E-MAIL"
                      onChange={handleChange}
                      value={values.Dato25}
                      className="peer h-full w-full rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    />
                  </td>

                  <td className="bg-gray-800 border border-slate-600 p-2">
                    <textarea
                      name="Dato26"
                      rows="3"
                      placeholder="Descripción"
                      onChange={handleChange}
                      value={values.Dato26}
                      className="peer h-full w-full rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    ></textarea>
                  </td>

                  <td className="bg-zinc-900 border border-slate-600 p-2">
                    <input
                      type="email"
                      name="Dato27"
                      placeholder="E-MAIL"
                      onChange={handleChange}
                      value={values.Dato27}
                      className="peer h-full w-full rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    />
                  </td>

                  <td className="bg-gray-800 border border-slate-600 p-2">
                    <input
                      type="text"
                      name="Dato28"
                      placeholder="CONTRATO"
                      onChange={handleChange}
                      value={values.Dato28}
                      className="text-center peer h-full w-full rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    />
                  </td>

                  <td className="bg-zinc-900 border border-slate-600 p-2">
                    <input
                      type="text"
                      name="Dato29"
                      placeholder="MODIFICATORIO"
                      onChange={handleChange}
                      value={values.Dato29}
                      className="text-center peer h-full w-full rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    />
                  </td>

                  <td className="bg-gray-800 border border-slate-600 p-2">
                    <input
                      type="text"
                      name="Dato30"
                      placeholder="COMPLEMENTARIO"
                      onChange={handleChange}
                      value={values.Dato30}
                      className="text-center w-[215px] peer h-full w-full rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    />
                  </td>

                  <td className="bg-zinc-900 border border-slate-600 p-2">
                    <input
                      type="text"
                      name="Dato31"
                      placeholder="RESPONSABILIDAD CIVIL"
                      onChange={handleChange}
                      value={values.Dato31}
                      className="text-center w-[215px] peer h-full w-full rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    />
                  </td>

                  <td className="bg-gray-800 border border-slate-600 p-2">
                    <input
                      type="text"
                      name="Dato32"
                      placeholder="NOTIFICACIÓN ANTICIPO"
                      onChange={handleChange}
                      value={values.Dato32}
                      className="text-center w-[215px] peer h-full w-full rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    />
                  </td>

                  <td className="bg-zinc-900 border border-slate-600 p-2">
                    <input
                      type="text"
                      name="Dato33"
                      placeholder="Descripción"
                      onChange={handleChange}
                      value={values.Dato33}
                      className="text-center peer h-full w-full rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    />
                  </td>

                  <td className="bg-gray-800 border border-slate-600 p-2">
                    <input
                      type="text"
                      name="Dato34"
                      placeholder="Descripción"
                      onChange={handleChange}
                      value={values.Dato34}
                      className="text-center  peer h-full w-full rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    />
                  </td>

                  <td className="bg-zinc-900 border border-slate-600 p-2">
                    <input
                      type="text"
                      name="Dato35"
                      placeholder="Descripción"
                      onChange={handleChange}
                      value={values.Dato35}
                      className="text-center  peer h-full w-full rounded-[7px] border-t-transparent bg-transparent  font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    />
                  </td>

                  <td className="bg-gray-800 border border-slate-600 p-2">
                    <input
                      type="text"
                      name="Dato36"
                      placeholder="PLANILLAS"
                      onChange={handleChange}
                      value={values.Dato36}
                      className=" peer h-full w-full rounded-[7px] border-t-transparent bg-transparent  font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    />
                  </td>

                  <td className="bg-zinc-900 border border-slate-600 p-2">
                    <input
                      type="text"
                      name="Dato37"
                      placeholder="OFICIO"
                      onChange={handleChange}
                      value={values.Dato37}
                      className=" peer h-full w-full rounded-[7px] border-t-transparent bg-transparent  font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    />
                  </td>

                  <td className="bg-gray-800 border border-slate-600 p-2">
                    <input
                      type="text"
                      name="Dato38"
                      placeholder="ACTA"
                      onChange={handleChange}
                      value={values.Dato38}
                      className="peer h-full w-full rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    />
                  </td>

                  <td className="bg-zinc-900 border border-slate-600 p-2">
                    <input
                      type="text"
                      name="Dato39"
                      placeholder="OFICIO"
                      onChange={handleChange}
                      value={values.Dato39}
                      className=" peer h-full w-full rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    />
                  </td>

                  <td className="bg-gray-800 border border-slate-600 p-2">
                    <input
                      type="text"
                      name="Dato40"
                      placeholder="ACTA"
                      onChange={handleChange}
                      value={values.Dato40}
                      className=" peer h-full w-full rounded-[7px] border-t-transparent bg-transparent  font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    />
                  </td>

                  <td className="bg-zinc-900 border border-slate-600 p-2">
                    <textarea
                      name="Dato41"
                      rows="3"
                      placeholder="Descripción"
                      onChange={handleChange}
                      value={values.Dato41}
                      className=" peer h-full w-full rounded-[7px] border-t-transparent bg-transparent  font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    ></textarea>
                  </td>

                  <td className="bg-gray-800 border border-slate-600 p-2">
                  <div className="relative">
                    <FaCalendarAlt className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-500" />
                    <DatePicker
                      selected={values.Dato42 ? new Date(values.Dato42) : null}
                      onChange={(date) =>
                        handleChange({ target: { name: 'Dato42', value: date } })
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
                      type="url"
                      name="Dato43"
                      rows="3"
                      placeholder="Descripción"
                      onChange={handleChange}
                      value={values.Dato43}
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

export default Registro;