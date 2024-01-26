import axios from 'axios'

//Api de Backend de Usuarios

export const getVistasUser =async()=>
    await axios.get('http://localhost:4000/vistasU');

export const getVistaUser = async(id)=>
    await axios.get(`http://localhost:4000/vistaU/${id}`);

export const CreateUser = async(task)=>
    await axios.post('http://localhost:4000/createrUser', task);

export const deleteUser = async(id)=>
    await axios.delete(`http://localhost:4000/elimU/${id}`);

export const UpdateUser = async(id, newFields)=>
    await axios.put(`http://localhost:4000/actU/${id}`,newFields);

// Ruta de tu backend para el inicio de sesión
const loginEndpoint = 'http://localhost:4000/login';

// Función para iniciar sesión
export const login_user = async (usuario, contrasena) => {
    try {
        // Realiza la solicitud al backend para el inicio de sesión
        const response = await axios.post(loginEndpoint, { usuario, contrasena });

        // Devuelve la respuesta del backend
        return response.data;
    } catch (error) {
        // Maneja errores, puedes personalizar esto según tus necesidades
        console.error(error);
        throw new Error('Error en el inicio de sesión');
    }
};



