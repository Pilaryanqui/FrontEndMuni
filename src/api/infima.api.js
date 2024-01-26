import axios from 'axios'

//api de registro:
export const CreadorInfima = async(task)=>
    await axios.post('http://localhost:4000/creoinfima', task);

//api ver todos los registros
export const getVistasInfima =async()=>
    await axios.get('http://localhost:4000/vitotal');

//actualizar ver todos los registros
export const Updateinfima = async(id, newFields)=>
    await axios.put(`http://localhost:4000/actinfima/${id}`,newFields);

//Eliminar el Registro
export const borrarInfima = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:4000/eliminfima/${id}`);
      return response.data; 
    } catch (error) {
      throw error;
    }
  };

//Ver un solo Registro
export const getvInfima = async(id)=>
    await axios.get(`http://localhost:4000/visone/${id}`);
  