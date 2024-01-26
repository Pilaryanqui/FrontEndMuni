import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../context/AuthContext';

const InicioU = () => {
  // Importa el hook useNavigate para la navegación y la función setAuthUser del contexto useAuth.
  const navigate = useNavigate();
  const { setAuthUser } = useAuth();

  // Estado para almacenar mensajes de error relacionados con la autenticación.
  const [errorMessage, setErrorMessage] = useState('');


// Función asincrónica para manejar el envío del formulario de inicio de sesión.
const handleSubmit = async (values, actions) => {
  try {
    // Realiza una solicitud POST al servidor de autenticación con las credenciales proporcionadas.
    const response = await axios.post('http://localhost:4000/login', {
      usuario: values.usuario,
      contrasena: values.contrasena,
    });

    // Actualiza el contexto de autenticación con el nombre de usuario.
    setAuthUser(values.usuario);

    // Muestra una notificación de éxito y navega a la página de menú.
    toast.success('Inicio de sesión exitoso');
    navigate('/Menu');
  } catch (error) {
    console.error(error);

    // Maneja diferentes escenarios de error y muestra notificaciones correspondientes.
    if (error.response && error.response.status === 401) {
      toast.error('Contraseña incorrecta. Verifica tus credenciales.');
    } else {
      toast.error('Error en el inicio de sesión. Por favor, inténtalo nuevamente.');
    }
  } finally {
    // Establece submitting en false para permitir futuros envíos de formulario.
    actions.setSubmitting(false);
  }
};

  // Renderiza el formulario de inicio de sesión utilizando Formik y estilos de Tailwind CSS.
  return (
    <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
    <Formik
        initialValues={{ usuario: '', contrasena: '' }}
        onSubmit={handleSubmit}
    >
        {({ handleChange, handleSubmit, values, isSubmitting, isValid }) => (
            <Form className='space-y-6'>
                <h1 className='text-xl font-bold uppercase text-center text-black'>INICIO DE SESION</h1>

                <label className='block text-sm font-medium leading-6 text-black'>Usuario:</label>
                <input
                    type='text'
                    name='usuario'
                    placeholder='Escriba el Usuario'
                    onChange={handleChange}
                    value={values.usuario}
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3'
                />

                <label className='block text-sm font-medium leading-6 text-black'>Contraseña:</label>
                <input
                    type='password'
                    name='contrasena'
                    placeholder='Escriba la Contraseña'
                    onChange={handleChange}
                    value={values.contrasena}
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3'
                />

                <button
                    type='submit'
                    disabled={isSubmitting || !isValid}
                    className='flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                >
                    {isSubmitting ? 'Comprobando Credenciales..' : 'INGRESAR'}
                </button>

                <button
                    type='submit'
                    disabled={isSubmitting}
                    onClick={() => navigate('/crearUsuario')}
                    className='flex w-full justify-center rounded-md bg-gray-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                >
                    REGISTRARSE
                </button>

                {errorMessage && <div className='text-red-500 mt-2 '>{errorMessage}</div>}
            </Form>
        )}
    </Formik>

    <ToastContainer />
</div>
  );
};

export default InicioU;
