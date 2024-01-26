import { useContext, useState} from "react";
import { 
    CreateUser, 
    getVistasUser 
} from "../api/login.api";

import { 
    CreateRegistro, 
    getVistasRegistro, 
    UpdateRegistro, 
    borrarReg, 
    getvRegist 
} from "../api/registro.api";

import {
    CreadorInfima, 
    getVistasInfima, 
    Updateinfima, 
    borrarInfima, 
    getvInfima
} from "../api/infima.api"


import {
    CreadorContrato,
    getVistasContrato,
    UpdateContrato,
    borrarContrato,
    getvContratoOne,
} from '../api/contrato.catalogo.api'

import{ 
    CreadorArea,
    getVistasArea,
    UpdateArea,
    borrarArea,
    getOneArea,
} from '../api/area.api'

import {
    CreadorProceso,
    getVistasProceso,
    UpdateProcesoF,
    borrarProceso,
    getProcesoOne,
} from '../api/procesos.api'

import {getResumen1} from '../api/resumen1.api'

import {getResumRegistro} from '../api/resumen2.api'


import { TaskContext } from "../pages/TaskContext";

export const useTasks =()=>{

    const context = useContext(TaskContext)
    if(!context ==undefined){
        throw new Error("useTasks must be used within ")
    }
    return context
};

export const TaskContextProvider = ({children})=>{
    const [tasks, setTask] = useState([]);

    //Crear usuario--
    const create_cli = async(task)=>{
        try {
            const response = await CreateUser(task);
            setTask([...tasks,response.data]);
        } catch (error) {
            console.error(error);
            
        }
    }


    //---
    //ver lista de Usuario:
    const ver_cli = async(task)=>{
        try {
            const response = await getVistasUser()
            setTask(response.data);
        } catch (error) {
            console.error(error);
            
        }
    }



    //---

    
    //Crear Registro--
    const create_Reg = async(task)=>{
        try {
            const response = await CreateRegistro(task);
            setTask([...tasks,response.data]);
        } catch (error) {
            console.error(error);
            
        }
    }

    //-----
    // Ver todos los Registro
    
    const ver_registro = async (taskId) => {
        try {
        const response = await getVistasRegistro();
    
        // Si taskId está presente, devuelve solo el registro correspondiente al taskId
        if (taskId) {
            const singleTask = response.data.find((task) => task.id === taskId);
            return singleTask || {}; // Devuelve el registro encontrado o un objeto vacío si no se encuentra
        }
    
        // Si no hay taskId, devuelve todos los registros
        return response.data || [];
        } catch (error) {
        console.error(error);
        throw error;
        }
    };

    //-----
    // Atualizar un Registro por Id 
    const updateREG =async(id, newFields)=>{
        try {
            const response = await UpdateRegistro(id, newFields);
            console.log(response)
            //setTask(tasks.map(task => (task.id === id ? response.data : task)));
        } catch (error) {
            console.error(error)
        }
        
    }


    //-----
    // Eliminar un Registro por Id:
    
    const deleteRegist = async (id) => {
        try {
        const response = await borrarReg(id);
        console.log('Response from borrarReg:', response);
    
        // No necesitas filtrar los elementos aquí, ya que lo harás después de la eliminación en el componente
        } catch (error) {
        console.error(error);
        }
    };
  

    //-----
    // Ver un solo Registro por Id:
    const getvReg = async (id)=>{
        try {
            const response = await getvRegist(id)
            return response.data
        } catch (error) {
            console.error(error)
            
        }
    }

    //-----REGISTRO DE INFIMA -------------------------------------
    
    //Crear INFIMA Registro--
    const create_inf = async(task)=>{
        try {
            const response = await CreadorInfima(task);
            setTask([...tasks,response.data]);
        } catch (error) {
            console.error(error);
            
        }
    }

        //-----
    // Ver todos los INFIMA Registro
    
    const ver_Infima = async (taskId) => {
        try {
        const response = await getVistasInfima();
    
        // Si taskId está presente, devuelve solo el registro correspondiente al taskId
        if (taskId) {
            const singleTask = response.data.find((task) => task.id === taskId);
            return singleTask || {}; // Devuelve el registro encontrado o un objeto vacío si no se encuentra
        }
        // Si no hay taskId, devuelve todos los registros
        return response.data || [];
        } catch (error) {
        console.error(error);
        throw error;
        }
    };

    //-----
    // Atualizar un Registro por Id 
    const update_Inf =async(id, newFields)=>{
        try {
            const response = await Updateinfima(id, newFields);
            console.log(response)
            //setTask(tasks.map(task => (task.id === id ? response.data : task)));
        } catch (error) {
            console.error(error)
        }
        
    }

    //-----
    // Eliminar un Registro por Id:
    
    const deleteInf = async (id) => {
        try {
        const response = await borrarInfima(id);
        console.log('Response from borrarReg:', response);
    
        // No necesitas filtrar los elementos aquí, ya que lo harás después de la eliminación en el componente
        } catch (error) {
        console.error(error);
        }
    };

    
    //-----
    // Ver un solo Registro por Id:
    const getunoInf = async (id)=>{
        try {
            const response = await getvInfima(id)
            return response.data
        } catch (error) {
            console.error(error)
            
        }
    }
  
    //-----------------------------
    //Vista de Catalogo Provider
    //-----

    //Crear Registro--
    const create_Logo = async(task)=>{
        try {
            const response = await CreateCatalogo(task);
            setTask([...tasks,response.data]);
        } catch (error) {
            console.error(error);
            
        }
    }

    //-----
    // Ver todos los Registro
    
    const ver_Logo = async (taskId) => {
        try {
        const response = await getVistasCatalogo();
    
        // Si taskId está presente, devuelve solo el registro correspondiente al taskId
        if (taskId) {
            const singleTask = response.data.find((task) => task.id === taskId);
            return singleTask || {}; // Devuelve el registro encontrado o un objeto vacío si no se encuentra
        }
    
        // Si no hay taskId, devuelve todos los registros
        return response.data || [];
        } catch (error) {
        console.error(error);
        throw error;
        }
    };

    //-----
    // Atualizar un Registro por Id 
    const updateLogo =async(id, newFields)=>{
        try {
            const response = await UpdateLogo(id, newFields);
            console.log(response)
            //setTask(tasks.map(task => (task.id === id ? response.data : task)));
        } catch (error) {
            console.error(error)
        }
        
    }


    //-----
    // Eliminar un Registro por Id:
    
    const deleteLogo = async (id) => {
        try {
        const response = await  borrarLogo(id);
        console.log('Response from borrarReg:', response);
    
        // No necesitas filtrar los elementos aquí, ya que lo harás después de la eliminación en el componente
        } catch (error) {
        console.error(error);
        }
    };
  

    //-----
    // Ver un solo Registro por Id:
    const getvcatalogo = async (id)=>{
        try {
            const response = await getvLogo(id)
            return response.data
        } catch (error) {
            console.error(error)
            
        }
    }


    //-----
    // REGISTRO DE CONTRATOS DE CATALOGO;

    //Crear Registro--
    const create_Contrato = async(task)=>{
        try {
            const response = await CreadorContrato(task);
            setTask([...tasks,response.data]);
        } catch (error) {
            console.error(error);
            
        }
    }

            // Ver todos los Registro

    
    const verdatosContrato = async (IdCont) => {
        try {
            const response = await getVistasContrato(); // Cambiar getVistasContrato() a getVistasArea()
    
            // Si ID_Area está presente, devuelve solo el registro correspondiente al ID_Area
            if (IdCont) {
                const singleTask = response.data.find((task) => task.IdCont === IdCont);
                return singleTask || null; // Devuelve el registro encontrado o null si no se encuentra
            }
    
            // Si no hay ID_Area, devuelve todos los registros
            return response.data || [];
        } catch (error) {
            console.error(error);
            throw error;
        }
    };
    


    // Atualizar un Registro por Id 
    const updateContrato =async(IdCont, newFields)=>{
        try {
            const response = await UpdateContrato(IdCont, newFields);
            console.log(response)
            //setTask(tasks.map(task => (task.id === id ? response.data : task)));
        } catch (error) {
            console.error(error)
        }
        
    }

   //-----
    // Eliminar un Registro por Id:
    
    const deleteContrato= async (IdCont) => {
        try {
        const response = await  borrarContrato(IdCont);
        console.log('Response from borrarReg:', response);
    
        // No necesitas filtrar los elementos aquí, ya que lo harás después de la eliminación en el componente
        } catch (error) {
        console.error(error);
        }
    };
  

    //-----
    // Ver un solo Registro por Id:
    const getvContrato = async (IdCont)=>{
        try {
            const response = await getvContratoOne(IdCont)
            return response.data
        } catch (error) {
            console.error(error)
            
        }
    }


    //-----
    // REGISTRO DE PROCESOS

    
    //Crear Registro PROCESOS--
    const create_Procesos = async(task)=>{
        try {
            const response = await CreadorProceso(task);
            setTask([...tasks,response.data]);
        } catch (error) {
            console.error(error);
            
        }
    }


    const verdatosProcesos= async (ID_Estado) => {
        try {
            const response = await getVistasProceso(); // Cambiar getVistasContrato() a getVistasArea()
    
            // Si ID_Area está presente, devuelve solo el registro correspondiente al ID_Area
            if (ID_Estado) {
                const singleTask = response.data.find((task) => task.ID_Estado === ID_Estado);
                return singleTask || null; // Devuelve el registro encontrado o null si no se encuentra
            }
    
            // Si no hay ID_Area, devuelve todos los registros
            return response.data || [];
        } catch (error) {
            console.error(error);
            throw error;
        }
    };
    

    
    const updateProcesos = async (ID_Estado, newFields) => {
        try {
            const response = await UpdateProcesoF(ID_Estado, newFields);
            console.log(response);
            // Puedes manejar la actualización local en el componente que utiliza el TaskProvider
            return response.data; // Devuelve la respuesta del servidor o maneja de otra manera
        } catch (error) {
            console.error('Error al actualizar el área:', error);
            throw error;
        }
    };
    

        // Eliminar un Registro por Id:
    
    const deleteProcesos = async (ID_Estado) => {
        try {
            const response = await borrarProceso(ID_Estado);
            console.log('Response from borrarReg:', response);
            // No necesitas filtrar los elementos aquí, ya que lo harás después de la eliminación en el componente
            return response.data; // Devuelve la respuesta del servidor o maneja de otra manera
        } catch (error) {
            console.error('Error al eliminar el área:', error);
            throw error;
        }
    };



    const getIdProcesos= async (ID_Estado) => {
        try {
            const response = await getProcesoOne(ID_Estado);
            return response.data; // Devuelve el registro encontrado
        } catch (error) {
            console.error('Error al obtener el área por ID:', error);
            throw error;
        }
    };


   // Area Requeriente

    
    //Crear Registro--
    const create_Area = async(task)=>{
        try {
            const response = await CreadorArea(task);
            setTask([...tasks,response.data]);
        } catch (error) {
            console.error(error);
            
        }
    }


    const verdatosArea = async (ID_Area) => {
        try {
            const response = await getVistasArea(); // Cambiar getVistasContrato() a getVistasArea()
    
            // Si ID_Area está presente, devuelve solo el registro correspondiente al ID_Area
            if (ID_Area) {
                const singleTask = response.data.find((task) => task.ID_Area === ID_Area);
                return singleTask || null; // Devuelve el registro encontrado o null si no se encuentra
            }
    
            // Si no hay ID_Area, devuelve todos los registros
            return response.data || [];
        } catch (error) {
            console.error(error);
            throw error;
        }
    };
    

    
    const updateArea = async (ID_Area, newFields) => {
        try {
            const response = await UpdateArea(ID_Area, newFields);
            console.log(response);
            // Puedes manejar la actualización local en el componente que utiliza el TaskProvider
            return response.data; // Devuelve la respuesta del servidor o maneja de otra manera
        } catch (error) {
            console.error('Error al actualizar el área:', error);
            throw error;
        }
    };
    

        // Eliminar un Registro por Id:
    
    const deleteArea = async (ID_Area) => {
        try {
            const response = await borrarArea(ID_Area);
            console.log('Response from borrarReg:', response);
            // No necesitas filtrar los elementos aquí, ya que lo harás después de la eliminación en el componente
            return response.data; // Devuelve la respuesta del servidor o maneja de otra manera
        } catch (error) {
            console.error('Error al eliminar el área:', error);
            throw error;
        }
    };



    const getIdArea = async (ID_Area) => {
        try {
            const response = await getOneArea(ID_Area);
            return response.data; // Devuelve el registro encontrado
        } catch (error) {
            console.error('Error al obtener el área por ID:', error);
            throw error;
        }
    };


    // Ver todos los Registro de catalogo de Resumen
    
    const ver_todo = async (taskId) => {
        try {
        const response = await getResumen1();
    
        // Si taskId está presente, devuelve solo el registro correspondiente al taskId
        if (taskId) {
            const singleTask = response.data.find((task) => task.id === taskId);
            return singleTask || {}; // Devuelve el registro encontrado o un objeto vacío si no se encuentra
        }
    
        // Si no hay taskId, devuelve todos los registros
        return response.data || [];
        } catch (error) {
        console.error(error);
        throw error;
        }
    };

    

    
    // Ver todos los Registro de Resumen
    
    const ResRegistro = async (taskId) => {
        try {
        const response = await getResumRegistro();
    
        // Si taskId está presente, devuelve solo el registro correspondiente al taskId
        if (taskId) {
            const singleTask = response.data.find((task) => task.id === taskId);
            return singleTask || {}; // Devuelve el registro encontrado o un objeto vacío si no se encuentra
        }
    
        // Si no hay taskId, devuelve todos los registros
        return response.data || [];
        } catch (error) {
        console.error(error);
        throw error;
        }
    };

    // Devuelve el componente TaskContext.Provider con los valores proporcionados al contexto.
    return (
    <TaskContext.Provider value={{
    create_cli, ver_cli, 
    create_Reg, ver_registro, updateREG, deleteRegist, getvReg,
    create_inf, ver_Infima, update_Inf, deleteInf, getunoInf,
    create_Contrato, verdatosContrato, updateContrato, deleteContrato, getvContrato,
    create_Area, verdatosArea, updateArea, deleteArea, getIdArea,
    create_Procesos, verdatosProcesos,updateProcesos, deleteProcesos, getIdProcesos, ver_todo, ResRegistro}}> 
        {children} 
    </TaskContext.Provider>
    );
};