import React from "react";
import { useState } from "react";
import {useDispatch} from "react-redux";
import styles from "./SearchBar.module.css"
import { searchDriversByName } from "../../redux/actions";

const SearchBar = ()=>{

    const dispatch = useDispatch();
    const [name, setName] = useState("");

    const handleInputChange = (e)=>{
        e.preventDefault();
        setName(e.target.value)
        console.log(name)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(searchDriversByName(name))
        console.log(name)
        
    }
    return(
        <div className={styles.container}>
            <input className={styles.input} onChange={handleInputChange} type="text" placeholder="Search"/>
            <button type="submit" onClick={handleSubmit}>Buscar</button>
        </div>
    )
}

export default SearchBar;