import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getDriverById } from "../../redux/actions";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./DetailDriver.module.css"

const DetailDriver = ()=>{
    const {id} = useParams();
    const dispatch = useDispatch();
    const driver = useSelector(state => state.driverById)
    console.log("Este es el driver actual:", driver)

    useEffect(()=>{
        dispatch(getDriverById(id))
    },[])

    return(
        <div className={styles.container}>
            <Link to='/home'><button>Volver</button></Link>
            <h1>Detail Driver</h1>

            {driver[0]?.image ?
                <img className={styles.image} src={driver[0]?.image} width="200px" height="250px" /> :
                <img className={styles.image} src="data:image/png;base64,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" width="200px" height="250px" />
            }



            <h3>Nombres:</h3>
            <p>{driver[0]?.firstName}</p>
            <h3>Apellidos:</h3>
            <p>{driver[0]?.lastName}</p>
            <h3>Birthday:</h3>
            <p>{driver[0]?.birthday}</p>
            <h3>Equipos:</h3>
            <p>
            {
                driver.length > 0 && Array.isArray(driver[0].teams) ?
                    driver[0].teams.map((element) => <h3>{element.name}</h3>) :
                    <h3>{driver[0]?.teams}</h3>
            }
            </p>
            
            <h3>Description:</h3>
            <p>{driver[0]?.description}</p>







        </div>
    )
}

export default DetailDriver;