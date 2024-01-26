import axios from 'axios'

//api de registro:
export const CreadorProceso = async(task)=>
    await axios.post('http://localhost:4000/creaproceso', task);

//api ver todos los registros
export const getVistasProceso =async()=>
    await axios.get('http://localhost:4000/vistasproceso');

//actualizar ver todos los registros
export const UpdateProcesoF = async(id, newFields)=>
    await axios.put(`http://localhost:4000/actuproceso/${id}`,newFields);

//Eliminar el Registro
export const borrarProceso = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:4000/eliminproceso/${id}`);
      return response.data; 
    } catch (error) {
      throw error;
    }
  };

//Ver un solo Registro
export const getProcesoOne = async(id)=>
    await axios.get(`http://localhost:4000/oneproceso/${id}`);