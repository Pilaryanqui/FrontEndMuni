import {Form, Formik} from 'formik'
import { useTasks } from '../context/TaskProvider'
import { useParams , useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'

function TaskForm1(){

    const {create_cli, ver_cli}=useTasks();

    const navigate = useNavigate();

    const [task, setTask]= useState({
        cedula: "",
        nombre: "",
        apellido: "",
        correoE: "",
        usuario: "",
        contrasena: "",
    })

    const params = useParams();


    return(
        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
            <Formik 
            initialValues={task}
            enableReinitialize={true}
            onSubmit={async (values, actions)=>{
                setTask(values);
                console.log(values);
                await create_cli(values);
                
                setTask({
                    cedula: "",
                    nombre: "",
                    apellido: "",
                    correoE: "",
                    usuario: "",
                    contrasena: "",
                });

                navigate('/sesion');
                
            }}
            >
            {({handleChange, handleSubmit, values, isSubmitting})=>(
                <Form onSubmit={handleSubmit} className='space-y-1'>
                    <h1 className='text-xl font-bold uppercase text-center text-black'>Registro</h1>

                    <label className='block text-sm font-medium leading-6 text-black'>Cedula:</label>
                    <input type='text' name='cedula' placeholder='Escriba la Cedula' required
                    onChange={handleChange} value={values.cedula} className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3'/>
                   
                    <label className='block text-sm font-medium leading-6 text-black' >Nombre:</label>
                    <input type='text' name='nombre' placeholder='Escriba el Nombre' required
                    onChange={handleChange} value={values.nombre} className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3'/>

                    <label className='block text-sm font-medium leading-6 text-black' >Apellido:</label>
                    <input type='text' name='apellido' placeholder='Escriba el Apelllido' required
                    onChange={handleChange} value={values.apellido} className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3'/>

                    <label className='block text-sm font-medium leading-6 text-black' >Correo Electronico:</label>
                    <input type='text' name='correoE' placeholder='Escriba el Correo' required
                    onChange={handleChange} value={values.correoE} className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3'/>

                    <label className='block text-sm font-medium leading-6 text-black' >Usuario:</label>
                    <input type='text' name='usuario' placeholder='Escriba el Usuario' 
                    onChange={handleChange} value={values.usuario} className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3'/>

                    <label className='block text-sm font-medium leading-6 text-black' >Contraseña:</label>
                    
                    <input type='password' name='contrasena' placeholder='Escriba la Contraseña' required
                    onChange={handleChange} value={values.contrasena} className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3'/>

                    <button type='Submit' disabled={isSubmitting} className='flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                        {isSubmitting ? "Guardando..":"GUARDAR"}
                    </button>
                </Form>
            )}
                
            </Formik>
        </div>
    )
}

export default TaskForm1