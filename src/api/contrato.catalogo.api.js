import axios from 'axios'

//api de registro:
export const CreadorContrato = async(task)=>
    await axios.post('http://localhost:4000/creaContrato', task);

//api ver todos los registros
export const getVistasContrato =async()=>
    await axios.get('http://localhost:4000/vistasContrato');

//actualizar ver todos los registros
export const UpdateContrato = async(IdCont, newFields)=>
    await axios.put(`http://localhost:4000/actuContrato/${IdCont}`,newFields);

//Eliminar el Registro
export const borrarContrato = async (IdCont) => {
    try {
      const response = await axios.delete(`http://localhost:4000/eliminContrato/${IdCont}`);
      return response.data; 
    } catch (error) {
      throw error;
    }
  };

//Ver un solo Registro
export const getvContratoOne = async(IdCont)=>
    await axios.get(`http://localhost:4000/oneContrato/${IdCont}`);