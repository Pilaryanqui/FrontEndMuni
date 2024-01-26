import axios from 'axios'

//api de registro:
export const CreadorArea = async(task)=>
    await axios.post('http://localhost:4000/creaArea', task);

//api ver todos los registros
export const getVistasArea =async()=>
    await axios.get('http://localhost:4000/totalArea');

//actualizar ver todos los registros
export const UpdateArea = async(ID_Area, newFields)=>
    await axios.put(`http://localhost:4000/actuArea/${ID_Area}`,newFields);

//Eliminar el Registro
export const borrarArea= async (ID_Area) => {
    try {
      const response = await axios.delete(`http://localhost:4000/eliminArea/${ID_Area}`);
      return response.data; 
    } catch (error) {
      throw error;
    }
  };

//Ver un solo Registro
export const getOneArea = async(ID_Area)=>
    await axios.get(`http://localhost:4000/oneArea/${ID_Area}`);