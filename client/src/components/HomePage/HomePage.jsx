import React, { useEffect, useState} from "react";
import SearchBar from "../SearchBar/SearchBar";
import {useDispatch, useSelector } from "react-redux"
import { filterDriversByOrigin, filterDriversByTeam, getDrivers, getTeams, orderByBirthday, orderByName } from "../../redux/actions"
import {Link} from "react-router-dom"
import styles from "./HomePage.module.css"
import Paginado from "../Paginado/Paginado";

const HomePage = ()=>{
    const dispatch = useDispatch();
    const drivers = useSelector((state)=>state.drivers);
    const teams = useSelector((state) => state.teams);
    const [order, setOrder] = useState('');
  



    useEffect(()=>{
        dispatch(getDrivers())  
        dispatch(getTeams())
    },[dispatch])  

 const cargarDrivers = ()=>{
    dispatch(getDrivers()) 
 }

 const handleFilterByTeam = (e)=>{
    console.log(e.target.value)
    dispatch(filterDriversByTeam(e.target.value))
 }

 const handleFilterByOrigin = (e)=>{
    console.log(e.target.value)
    dispatch(filterDriversByOrigin(e.target.value))
 }

 const handleOrderByName =(e)=>{
        e.preventDefault();
        dispatch(orderByName(e.target.value))
        setOrder(e.target.value) 
 }

 const handleOrderByBirthday =(e)=>{
    e.preventDefault();
    dispatch(orderByBirthday(e.target.value))
    setOrder(e.target.value) 
}

 


 
    return(
        <div className={styles.container}>
            <Link to="/drivers">Crear Driver</Link>
            <Link to="/">Ir al inicio</Link>
            
            
            <h1>Drivers Aplication</h1>
            <button type="button" onClick={cargarDrivers}>Volver a cargar todos los Drivers</button><br></br><br></br>

            <div>
                <select className={styles.select}onChange={handleOrderByName}>
                    <option>Ordenar por nombre</option>
                    <option value='asc'>Ascendente</option>
                    <option value='desc'>Descendente</option> 
                </select>

                <select className={styles.select} onChange={handleOrderByBirthday}>
                    <option>Ordenar por fecha de nacimiento</option>
                    <option value='asc'>Ascendente</option>
                    <option value='desc'>Descendente</option>
                </select>

                <select className={styles.select} onChange={handleFilterByTeam}>
                    <option >Filtrar por equipos</option>
                    {
                        teams.map((element)=>{
                            return (
                                <option value={element.name}>{element.name}</option>
                            )
                        })
                    }
                    
                </select>

                <select className={styles.select} onChange={handleFilterByOrigin}>
                    <option>Filtrar por origen</option>
                    <option value='all'>All</option>
                    <option value='db'>From Db</option>
                    <option value='api'>From Api</option>

                </select>
               
            </div>

            <br></br>
            <br></br>
            <SearchBar></SearchBar><br></br>
            
            <div className={styles.containerCards}>
                <Paginado />
            </div>
           
            
        </div>
    )
}

export default HomePage;