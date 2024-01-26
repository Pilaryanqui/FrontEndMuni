import axios from 'axios'

//api ver todos los registros
export const getResumRegistro =async()=>
    await axios.get('http://localhost:4000/resum2');