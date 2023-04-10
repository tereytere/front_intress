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
    <div>
        {repo.map(int => {
                return(
                    <div key={int.id}>
                        <h3>{int.name}</h3>
                        <p>{int.surname}</p> 
                        <p>{int.image}</p> 
                        <p>{int.rol}</p> 
                    </div>
                )
            })} 
    </div>
  )
}

export default Personal