import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postDrivers, getTeams } from "../../redux/actions";
import styles from "./FormCreateDriver.module.css"

const validate = (input)=>{
    let errors = {}
    if(!input.firstName || !/^[A-Za-z\s]+$/.test(input.firstName)) errors.firstName ="El nombre es obligatorio y solo debe contener letras"
    if(!input.lastName || !/^[A-Za-z\s]+$/.test(input.lastName)) errors.lastName ="El apellidos es obligatorio y solo debe contener letras"
    if(!input.description) errors.description ="Se requiere una descripción"
    if(!input.nationality || !/^[A-Za-z\s]+$/.test(input.nationality)) errors.nationality ="La nacionalidad es obligatoria y solo debe contener letras"
    if(!input.birthday || !/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/.test(input.birthday)) errors.birthday = "Formato de fecha inválido, el formato debe ser el siguiente: aaaa-mm-dd "
    
    return errors;
}


const FormCreateDriver = ()=>{

    const dispatch = useDispatch();
    const teams = useSelector(state=> state.teams)
    const navigate = useNavigate()

    

    const [errors, setErrors] = useState({})

    const [input, setInput] = useState({
        firstName: "",
        lastName:"",
        description: "",
        image: "",
        nationality: "",
        birthday: "",
        teams: []
         
    })

    const newTeams = teams.filter(element => {for(let i = 0; i< input.teams.length; i++){
        return element !== input.teams[i]
    }})

    console.log("new teams:", newTeams)

    console.log("***Valores de los inputs***") 
    console.log("firstName:", input.firstName)
    console.log("lastName:", input.lastName)
    console.log("description:", input.description)
    console.log("image:", input.image)
    console.log("nationality:", input.nationality)
    console.log("birthday:", input.birthday)
    console.log("teams:", input.teams)


    useEffect(()=>{
        dispatch(getTeams())
    },[])

    const handleInputChange = (e)=>{
        setInput(
            {
                ...input,
                [e.target.name]: e.target.value
            }
        )

        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    const handleSelect = (e)=>{
        setInput(
            {
                ...input,
                teams: [...input.teams, e.target.value]  
            }
        )
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(postDrivers(input))
        console.log(input)
        alert("Driver creado!!!")
        navigate("/home")
    }

    return(
        <div className={styles.container}>
            <h1>Form Create Driver</h1>
            <Link to='/home'><button>Volver</button></Link>
            <form onSubmit={handleSubmit}>
                <div>

                    <input className={styles.input}
                        type="text"
                        value={input.firstName}
                        name="firstName"
                        placeholder="Firstname"
                        onChange={handleInputChange}
                    /> <br></br>
                    {
                        errors.firstName && <p className={styles.parrafo}>{errors.firstName}</p>
                    }

                    <input className={styles.input}
                        type="text"
                        value={input.lastName}
                        name="lastName"
                        placeholder="Lastname"
                        onChange={handleInputChange}
                    /> <br></br>
                    {
                        errors.lastName && <p className={styles.parrafo}>{errors.lastName}</p>
                    }


                    <input className={styles.input}
                        type="text"
                        value={input.description}
                        name="description"
                        placeholder="Description"
                        onChange={handleInputChange}
                    /> <br></br>
                     {
                        errors.description && <p className={styles.parrafo}>{errors.description}</p>
                    }

                    <input className={styles.input}
                        type="text"
                        value={input.image}
                        name="image"
                        placeholder="Image"
                        onChange={handleInputChange}
                    /> <br></br>

                    <input className={styles.input}
                        type="text"
                        value={input.nationality}
                        name="nationality"
                        placeholder="Nationality"
                        onChange={handleInputChange}
                    /> <br></br>
                    {
                        errors.nationality && <p className={styles.parrafo}>{errors.nationality}</p>
                    }

                    <input className={styles.input}
                        type="text"
                        value={input.birthday}
                        name="birthday"
                        placeholder="Birthday"
                        onChange={handleInputChange}
                    />
                    <br></br>
                    {
                        errors.birthday && <p className={styles.parrafo}>{errors.birthday}</p>
                    }

                
                    <select className={styles.input} onChange={handleSelect}>
                        <option>Elija los equipos</option>
                        {newTeams.map(element =>{
                            return (
                                <option value={element.name}>{element.name}</option>
                            )
                        })}
                    </select>
                    <br></br>
                    {
                        errors.teams && <p className={styles.parrafo}>{errors.teams}</p>
                    }

                    <label>"Equipos seleccionados"</label><br></br>
                    <ul>{input.teams.map(element => <li>{element}</li>)}</ul>

                    <br></br>
                    

                    {
                        (!errors.firstName && !errors.lastName && !errors.description && !errors.nationality && !errors.birthday) && <button type="submit">Crear Driver</button>
                    }

                    {console.log("Errors:", errors)}

                    

                </div>
                
            </form>
        </div>
    )
}

export default FormCreateDriver;