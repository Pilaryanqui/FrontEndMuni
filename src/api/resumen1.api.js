import axios from 'axios'

//api ver todos los registros
export const getResumen1 =async()=>
    await axios.get('http://localhost:4000/resum1');