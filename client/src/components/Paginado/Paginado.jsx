import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from "./Paginado.module.css"
import { Link } from 'react-router-dom';

const Paginado = () => {
  const driversPerPage = 9; 
  const [currentPage, setCurrentPage] = useState(1);

  const drivers = useSelector((state)=>state.drivers);

 
  const getDriversOnPage = () => {
    const startIndex = (currentPage - 1) * driversPerPage;
    return drivers.slice(startIndex, startIndex + driversPerPage);
  };

  // Calcula el número total de páginas
  const totalPages = Math.ceil(drivers.length / driversPerPage);

  // Función para cambiar la página actual
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Genera botones de paginación usando un bucle for
  const pageButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    pageButtons.push(
      <button
        key={i}
        onClick={() => handlePageChange(i)}
        disabled={currentPage === i}
      >
        {i}
      </button>
    );
  }

  return (
    <div classNane={styles.containerCards}>
        <div>{pageButtons}</div>
        <br></br>
        <br></br>
      {getDriversOnPage().map((element)=>{
                    return(
                        
                        <div className={styles.containerCard}>
                            <Link to={"/driver/" + element.id}>
                              {element.image? 
                              <img className={styles.image} src={element.image} />:
                              <img className={styles.image} src="https://www.researchgate.net/publication/315108532/figure/fig1/AS:472492935520261@1489662502634/Figura-2-Avatar-que-aparece-por-defecto-en-Facebook.png"/>
                              }
                                 
                            </Link>

                            <h3>Nombres:</h3>
                            <p>{element.firstName}</p>
                            <h3>Apellidos:</h3>
                            <p>{element.lastName}</p>
                            <h3>Birthday:</h3>
                            <p>{element.birthday}</p>
                            <h3>Equipos</h3>
                           
                            
                            <p>{Array.isArray(element.teams) ? element.teams.map((element) => <p>{element.name}</p>) : <p>{element.teams}</p>}</p>
                        </div>
                        
                           
                    ) 
                })}
                <br></br>
                <br></br>
      <div>{pageButtons}</div>
    </div>
  );
};

export default Paginado;
