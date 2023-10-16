import { FILTER_DRIVERS_BY_TEAM, 
         GET_DRIVERS,
         GET_TEAMS,
         FILTER_DRIVERS_BY_ORIGIN,
         ORDER_BY_NAME, 
         ORDER_BY_BIRTHDATE,
         SEARCH_DRIVERS_BY_NAME,
         POST_DRIVER,
         GET_DRIVER_BY_ID
   
   } from "./actions-types";
import axios from "axios"





export const getDrivers = () => {
    return async function (dispatch) {
        let response = await axios.get(`http://localhost:3001/drivers`);
        return (dispatch({ type: GET_DRIVERS, payload: response.data }))
    }

}

export const getTeams = () => {
    return async function (dispatch) {
        let response = await axios.get(`http://localhost:3001/teams`);
        return (dispatch({ type: GET_TEAMS, payload: response.data }))
    }

}

export const postDrivers = (payload) => {
    return async function (dispatch) {
        let response = await axios.post(`http://localhost:3001/drivers`, payload);
        return (dispatch({ type: POST_DRIVER, payload: response.data }))
    }

}



export const searchDriversByName = (name)=>{
    return async function(dispatch){
        try {
            let response = await axios.get("http://localhost:3001/drivers?name="+name);
            return(
                dispatch ({
                    type : SEARCH_DRIVERS_BY_NAME,
                    payload :response.data

                }))
            
        } catch (error) {
            console.log(error.message)
        }
    }
}

export const getDriverById = (id)=>{
    return async function(dispatch){
        try {
            let response = await axios.get("http://localhost:3001/drivers/"+id);
            return(
                dispatch ({
                    type : GET_DRIVER_BY_ID,
                    payload :response.data

                }))
            
        } catch (error) {
            console.log(error.message)
        }
    }
}

export const filterDriversByTeam = (payload)=>{
    return{
        type: FILTER_DRIVERS_BY_TEAM,
        payload
    }
}

export const filterDriversByOrigin = (payload)=>{
    return{
        type: FILTER_DRIVERS_BY_ORIGIN,
        payload
    }
}

export const orderByName = (payload)=>{
    return{
        type :ORDER_BY_NAME, 
        payload
    } 
}

export const orderByBirthday = (payload)=>{
    return{
        type :ORDER_BY_BIRTHDATE, 
        payload
    } 
}

// export const getStudentsByApellidos = (apellidos) => {
// return async function(dispatch){
//    let response = await axios.get(`${apiUrl}/student?apellidos=${apellidos}`);
//    return(dispatch({type: GET_ESTUDIANTES_BY_APELLIDOS, payload: response.data}))
// }

// }


// export const getCursoById = (id_plan)=>{
// return async function(dispatch){
//    try {
//        let response = await axios.get(`${apiUrl}/curso?id_plan=${id_plan}`);
//        return(dispatch({type: GET_CURSO_BY_PLAN , payload: response.data})) 
//    } catch (error) {
//        alert("Primero elija un estudiante para luego consultar sus cursos")
//    }
   
// }
// }

// export const getCursosNotasCertificado = (id)=>{
// return async function(dispatch){
//    try {
//        let response = await axios.get(`${apiUrl}/certificado?id=${id}`);
//        return(dispatch({type: GET_CURSOS_Y_NOTAS_CERTIFICADO , payload: response.data})) 
//    } catch (error) {
//        alert("A ocurrido un error inesperado, vuelva a intentar la operación")
//    }
   
// }
// }

// export const getEstudianteNotas = (id)=>{
// return async function(dispatch){
//    try {
//        let response = await axios.get(`${apiUrl}/consultaestudiantenotas?id=${id}`);
//        return(dispatch({type: GET_ESTUDIANTE_NOTAS , payload: response.data})) 
//    } catch (error) {
//        alert("A ocurrido un error inesperado, vuelva a intentar la operación")
//    }
   
// }
// }

// export const postStudent = (payload)=>{

// return async function(dispatch){
//        try {
//            await axios.post(`${apiUrl}/student`, payload);
//            dispatch ({type: SET_SUCCESS_MESSAGE , payload: SUCCESS_MESSAGE})
           
//        } catch (error) {
//            dispatch ({type: SET_ERROR_MESSAGE , payload: ERROR_MESSAGE})
//        }
// }
// }

// export const postUser = (payload)=>{

// return async function(){
//        try {
//            const response3 = await axios.post(`${apiUrl}/user/signup`, payload);
//            return response3; 
//        } catch (error) {
//            alert("A OCURRIDO UN ERROR INESPERADO, VUELVA A REALIZAR LA OPERACIÓN")
//        }
// }
// }

// //Acciones para carga masiva de estudiantes, cursos y notas
// export const cargaMasiva = (payload)=>{

// return async function(dispatch){
//        try {
//            await axios.post(`${apiUrl}/student/cargamasiva`, payload);
//            dispatch ({type: SET_SUCCESS_MESSAGE , payload: SUCCESS_MESSAGE})
//        } catch (error) {
//            dispatch ({type: SET_ERROR_MESSAGE , payload: ERROR_MESSAGE})
//        }
// }
// }

// export const cargaMasivaCursos = (payload)=>{

// return async function(dispatch){
//        try {
//            await axios.post(`${apiUrl}/curso/cargamasiva`, payload);
//            dispatch ({type: SET_SUCCESS_MESSAGE , payload: SUCCESS_MESSAGE})
//        } catch (error) {
//            dispatch ({type: SET_ERROR_MESSAGE , payload: ERROR_MESSAGE})
//        }
// }
// }

// export const cargaMasivaNotas = (payload)=>{

// return async function(dispatch){
//        try {
//            await axios.post(`${apiUrl}/nota/cargamasiva`, payload);
//            dispatch ({type: SET_SUCCESS_MESSAGE , payload: SUCCESS_MESSAGE})
//        } catch (error) {
//            dispatch ({type: SET_ERROR_MESSAGE , payload: ERROR_MESSAGE})
//        }
// }
// }


// export const login = (payload)=>{

// return async function(dispatch){
//        try {
//            const response3 = await axios.post(`${apiUrl}/user/login` , payload);
          
//            return(dispatch({type: LOGIN , payload: response3.data})) ;
//        } catch (error) {
//            dispatch ({type: SET_ERROR_MESSAGE , payload: ERROR_MESSAGE})
           
//        }
// }
// }

// export const updateStudent = (id, updateData)=>{

// return async function(dispatch){
//        try {
//            await axios.put(`${apiUrl}/student/${id}`, updateData);
//            return(dispatch({type: SET_SUCCESS_MESSAGE , payload: SUCCESS_MESSAGE})) ; 
//        } catch (error) {
//            return(dispatch({type: SET_ERROR_MESSAGE , payload: ERROR_MESSAGE})) ; 
//        }
// }
// }


// export const updateNotaById = (id, updateData)=>{

// return async function(dispatch){
//        try {
//            const response3 = await axios.put(`${apiUrl}/nota/${id}`, updateData);
//            return response3;
//        } catch (error) {
//            alert("A OCURRIDO UN ERROR INESPERADO, VUELVA A REALIZAR LA OPERACIÓN")
//        }
// }
// }

// export const deleteStudent = (id)=>{

// return async function(dispatch){
//        try {
//            const response3 = await axios.delete(`${apiUrl}/student/${id}`);
//            return(dispatch({type: DELETE_STUDENT , payload: response3.data})) ; 
//        } catch (error) {
//            alert("A OCURRIDO UN ERROR INESPERADO, VUELVA A REALIZAR LA OPERACIÓN")
//        }
// }
// }

// export const deleteNota = (id)=>{

// return async function(dispatch){
//        try {
//            const response3 = await axios.delete(`${apiUrl}/nota/${id}`);
//            return(dispatch({type: DELETE_NOTA , payload: response3.data})) ; 
//        } catch (error) {
//            alert("A OCURRIDO UN ERROR INESPERADO, VUELVA A REALIZAR LA OPERACIÓN")
//        }
// }
// }


// export const postNota = (payload)=>{

// return async function(){ 
//        try {
//            const response4 = await axios.post(`${apiUrl}/nota`, payload);
//            return response4; 
//        } catch (error) {
//            alert("A OCURRIDO UN ERROR INESPERADO, VUELVA A REALIZAR LA OPERACIÓN")
//        }
// }
// }

// export const postPlan = (payload)=>{
// return async function(){
//    const response = await axios.post(`${apiUrl}/plan`, payload);
//    return response;
// }
// }

// export const postPeriodo = (payload)=>{
// return async function(){
//    try {
//        const response = await axios.post(`${apiUrl}/periodo`, payload);
//        return response;
//    } catch (error) {
//        alert("A OCURRIDO UN ERROR INESPERADO, VUELVA A REALIZAR LA OPERACIÓN")
//    }
   
// }
// }

// //Para los cursos
// export const postCurso = (payload)=>{
// return async function(){
//    const response2 = await axios.post(`${apiUrl}/curso`, payload);
//    return response2;
// }
// }

// export const updateCurso = (id, updateData)=>{

// return async function(dispatch){
//        try {
//            await axios.put(`${apiUrl}/curso/${id}`, updateData);
//            return(dispatch({type: SET_SUCCESS_MESSAGE , payload: SUCCESS_MESSAGE})) ; 
//        } catch (error) {
//            return(dispatch({type: SET_ERROR_MESSAGE , payload: ERROR_MESSAGE})) ; 
//        }
// }
// }

// export const getCursoById2 = (id)=>{
// return async function(dispatch){
//    try {
//        const response2 = await axios.get(`${apiUrl}/curso/${id}`,);
//        return(dispatch({type: GET_CURSO_BY_ID, payload: response2.data}))
//    } catch (error) {
//        return(dispatch({type: SET_ERROR_MESSAGE , payload: ERROR_MESSAGE}))
//    }
  
// }
// }

// export const getCursos = () => {
// return async function(dispatch){
//    try {
//        let response = await axios.get(`${apiUrl}/curso`);
//        return(dispatch({type: GET_CURSOS, payload: response.data}))
//    } catch (error) {
//        return(dispatch({type: SET_ERROR_MESSAGE , payload: ERROR_MESSAGE}))
//    }
  
// }
// }

// export const getCursoByName = (nombre) => {
// return async function(dispatch){
//    try {
//        let response = await axios.get(`${apiUrl}/curso?nombre=${nombre}`);
//        return (dispatch({ type: GET_CURSO_BY_NAME, payload: response.data }))
//    } catch (error) {
//        return(dispatch({type: SET_ERROR_MESSAGE , payload: ERROR_MESSAGE}))
//    }
   
// }

// }


// export const getPlan = () => {
// return async function(dispatch){
//    let response = await axios.get(`${apiUrl}/plan`);
//    return(dispatch({type: GET_PLAN, payload: response.data}))
// }

// }

// export const getPeriodo = () => {
// return async function(dispatch){
//    let response = await axios.get(`${apiUrl}/periodo`);
//    return(dispatch({type: GET_PERIODO, payload: response.data}))
// }

// }


// export const getStudenByDni = (dni) => {
// return async function(dispatch){
//    let response = await axios.get(`${apiUrl}/student?dni=${dni}`);
//    return(dispatch({type: GET_STUDENT_BY_DNI, payload: response.data}))
// }

// }

// //ACCIONES DE LIMPIEZA
// export const cleanStudentByDni = () => ({
// type: CLEAN_STUDENT_BY_DNI,
// });


// export const cleanCurrentStudent = () => ({
// type: CLEAN_CURRENT_STUDENT,
// });

// export const cleanMessage = () => ({
// type: CLEAR_MESSAGE,
// });

// export const clearPlan = () => ({
// type: CLEAR_PLAN,
// });

// export const clearDepartamentos = () => ({
// type: CLEAR_DEPARTAMENTOS,
// });


// export const getStudenById = (id) => {
// return async function(dispatch){
//    let response = await axios.get(`${apiUrl}/student?id_estudiante=${id}`);
//    return(dispatch({type: GET_STUDENT_BY_ID, payload: response.data}))
// }

// }

// export const getNotaById = (id) => {
// return async function(dispatch){
//    let response = await axios.get(`${apiUrl}/nota?id_nota=${id}`);
//    return(dispatch({type: GET_NOTA_BY_ID, payload: response.data}))
// }

// }

// export const setCurrentStudent = (id) => {
// return async function(dispatch){
//    let response = await axios.get(`${apiUrl}/student?id_estudiante=${id}`);
//    return(dispatch({type: SET_CURRENT_STUDENT, payload: response.data}))
// }

// }



// export const getDepartamento = ()=> {
// return async function(dispatch){
//    let response = await axios.get(`${apiUrl}/departamento`);
//    return(dispatch({type: GET_DEPARTAMENTO, payload: response.data}))
// }

// }




