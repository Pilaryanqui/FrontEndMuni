import axios from 'axios'

//api de registro:
export const CreateRegistro = async(task)=>
    await axios.post('http://localhost:4000/crearegistro', task);

//api ver todos los registros
export const getVistasRegistro =async()=>
    await axios.get('http://localhost:4000/ver');

//actualizar ver todos los registros
export const UpdateRegistro = async(id, newFields)=>
    await axios.put(`http://localhost:4000/actuaregist/${id}`,newFields);

//Eliminar el Registro
// En tu archivo de funciones API (tasks.api.js)
export const borrarReg = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:4000/elimReg/${id}`);
      return response.data; // O cualquier cosa que devuelva tu servidor al borrar el registro
    } catch (error) {
      throw error;
    }
  };
  

//Ver un solo Registro
export const getvRegist = async(id)=>
    await axios.get(`http://localhost:4000/vistaone/${id}`);