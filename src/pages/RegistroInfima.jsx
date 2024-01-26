import { Form, Formik } from "formik";
import { useTasks } from "../context/TaskProvider";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Asegúrate de importar los estilos de react-datepicker
import { FaCalendarAlt } from 'react-icons/fa';


function RegistroInfima() {
  const { create_inf, getunoInf, update_Inf} = useTasks();
  const params = useParams();
  const currentYear = new Date().getFullYear();


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
  });



  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        try {
          const task = await getunoInf(params.id);
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
    <div >
      <ToastContainer />
      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);
          if (params.id){
              await update_Inf(params.id, values);
              toast.success('Registro actualizado exitosamente!');
              
              
          }else{
              await create_inf(values);
              toast.success('Registro guardado exitosamente!');
              
          }
          navigate('/VistInf');
          

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
          });

        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table 
              className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
            >
              <caption className=" text-center p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                REGISTRO DE ÍNFIMAS CUANTÍAS DEL AÑO {currentYear}
              </caption>
              <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
              <tr>
                 <th className="bg-zinc-900 text-center border border-slate-600 p-2 px-6 py-5" colSpan={9}>
                  </th> 
                </tr>
                <tr>
                 <th className="bg-zinc-900 text-center border border-slate-600 p-2 px-6 py-7" colSpan={9}>
                  </th> 
                </tr>
                <tr>
                  <th className="bg-zinc-900 text-center border border-slate-600 p-2 px-6 py-5">
                    ITEM
                  </th>

                  <th className="text-center border border-slate-600 p-2 px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    FTR
                  </th>
                  <th className="bg-zinc-900 px-20 text-center border border-slate-600">
                    ÁREA REQUIRIENTE
                  </th>
                  <th  className="px-20 text-center border border-slate-600 bg-gray-50 dark:bg-gray-800">
                    PROCESO
                  </th>
                  <th className="bg-zinc-900 px-20 text-center border border-slate-600">
                    OBJETO DE CONTRATACIÓN
                  </th>
                  <th className="px-20 text-center border border-slate-600 bg-gray-50 dark:bg-gray-800">
                    PRESUPUESTO REFERENCIAL
                  </th>
                  <th className="bg-zinc-900 px-20 text-center border border-slate-600 ">
                    RESPONSABLE
                  </th>
                  <th className="px-20 text-center border border-slate-600  bg-gray-50 dark:bg-gray-800">
                    FECHA DE VALIDACIÓN
                  </th>
                  <th className="bg-zinc-900 px-20 text-center border border-slate-600 ">
                    OBSERVACIONES
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className=" bg-zinc-900 border border-slate-600 p-2">
                    
                    <input
                      type="number"
                      name="Dato1"
                      placeholder="ITEM"
                      onChange={handleChange}
                      value={values.Dato1}
                      className="peer h-full w-full rounded-[7px] border-t-transparent bg-transparent  font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    />
                  </td>

                  <td className="bg-gray-800 border border-slate-600 p-2">
                    <input
                      type="number"
                      name="Dato2"
                      placeholder="FTR"
                      onChange={handleChange}
                      value={values.Dato2}
                      className="peer h-full w-full rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    />
                  </td>

                  <td className="bg-zinc-900 border border-slate-600 p-2 py-25">
                    <input
                      type="text"
                      name="Dato3"
                      placeholder="ÁREA REQUIRIENTE"
                      onChange={handleChange}
                      value={values.Dato3}
                      className="peer h-full w-full rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    />
                  </td>

                  <td className="bg-gray-800 border border-slate-600 p-2">
                    <input
                      type="text"
                      name="Dato4"
                      placeholder="PROCESO"
                      onChange={handleChange}
                      value={values.Dato4}
                      className="peer h-full w-full rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    />
                  </td>


                  <td className="bg-zinc-900 border border-slate-600 p-2">
                    <textarea
                      name="Dato5"
                      
                      rows="3"
                      cols="50"
                      placeholder="Descripcion"
                      onChange={handleChange}
                      value={values.Dato5}
                      style={{
                        height: '100px', // Ajusta el valor según tus necesidades
                        width: '370px',   // Utiliza el 100% para abarcar completamente el ancho
                      }}
                      className=" peer h-full w-full rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    ></textarea>
                  </td>

                  <td className="bg-gray-800 border border-slate-600 p-2">
                    <input
                      type="text"
                      name="Dato6"
                      placeholder="PRESUPUESTO REFERENCIAL"
                      onChange={handleChange}
                      value={values.Dato6}
                      className="w-[200px] peer h-full w-full rounded-[7px] border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    />
                  </td>

                  <td className="bg-zinc-900 border border-slate-600 p-2">
                    <input
                      type="text"
                      name="Dato7"
                      placeholder="RESPONSABLE"
                      onChange={handleChange}
                      value={values.Dato7}
                      className="text-center peer  rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    />
                  </td>

                  <td className="bg-gray-800 border border-slate-600 p-2">
                  <div className="relative">
                    <FaCalendarAlt className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-500" />
                    <DatePicker
                      selected={values.Dato8 ? new Date(values.Dato8) : null}
                      onChange={(date) =>
                        handleChange({ target: { name: 'Dato8', value: date } })
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
                      type="text"
                      name="Dato9"
                      rows="3"
                      placeholder="Descripción"
                      onChange={handleChange}
                      value={values.Dato9}
                      style={{
                        height: '100px', // Ajusta el valor según tus necesidades
                        width: '370px',   // Utiliza el 100% para abarcar completamente el ancho
                      }}
                      className="text-center peer h-full w-full rounded-[7px] border-t-transparent bg-transparent font-sans text-sm font-normal outline outline-0 transition-all  placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200   focus:border-t-transparent focus:outline-0  disabled:bg-blue-gray-50"
                    ></textarea>
                  </td>
                </tr>
                <tr>
                 <th className="bg-zinc-900 text-center border border-slate-600 p-2 px-6 py-5" colSpan={9}>
                  </th> 
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

export default RegistroInfima;