import React, { useEffect, useState } from "react";

function Personal() {
    
    const [repo, setRepo] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/personals.json')
        .then(response => response.json())
    
        .then(repo => 
            setRepo(repo) )// Establece el valor de 'repo' primero
             // Puedes dejar esto aquí si quieres, pero no es necesari)
        .catch(error => console.error(error));
        
    }, []);

  return (
    <div className='card' >
        {repo.map(int => {
                return(
                    <div className='card-body' key={int.id}>
                        <h3 className='card-title'>{int.name}</h3>
                        <p className='card-title'>{int.surname}</p>
                        <p className='card-title'>{int.rol}</p>  
                        <img className='card-img' src={int.image} alt={int.name} /> 
                        
                    </div>
                )
            })} 
    </div>
  )
}

export default Personal